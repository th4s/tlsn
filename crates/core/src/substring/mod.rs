//! Substring functionality.

mod config;

use serde::{Deserialize, Serialize};

use crate::{
    attestation::{AttestationBody, FieldId, FieldKind},
    encoding::{EncodingProof, EncodingProofError},
    hash::{HashAlgorithmId, HashProvider, HashProviderError, TypedHash},
    transcript::{PartialTranscript, Subsequence, SubsequenceIdx},
};

pub use config::{
    SubstringCommitConfig, SubstringCommitConfigBuilder, SubstringCommitConfigBuilderError,
    SubstringProofConfig, SubstringProofConfigBuilder, SubstringProofConfigBuilderError,
};

/// A hash of a subsequence of plaintext in the transcript.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct PlaintextHash {
    /// The subsequence of plaintext.
    pub seq: SubsequenceIdx,
    /// The hash of the data.
    pub hash: TypedHash,
}

/// A proof of the plaintext of a hash.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PlaintextHashProof {
    pub(crate) data: Vec<u8>,
    pub(crate) nonce: [u8; 16],
    pub(crate) commitment: FieldId,
}

/// An error for [`PlaintextHashProof`].
#[derive(Debug, thiserror::Error)]
#[error("invalid plaintext hash proof: {0}")]
pub struct PlaintextHashProofError(String);

impl PlaintextHashProofError {
    fn new<T: Into<String>>(msg: T) -> Self {
        Self(msg.into())
    }
}

impl PlaintextHashProof {
    /// Returns the field id of the commitment this opening corresponds to.
    pub fn commitment_id(&self) -> &FieldId {
        &self.commitment
    }

    /// Verifies the proof, returning the subsequence of plaintext.
    ///
    /// # Arguments
    ///
    /// * `commitment` - The commitment attested to by a Notary.
    pub fn verify(
        &self,
        provider: &HashProvider,
        commitment: &PlaintextHash,
    ) -> Result<Subsequence, PlaintextHashProofError> {
        let mut opening = self.data.clone();
        opening.extend_from_slice(&self.nonce);

        let alg = provider.get(&commitment.hash.alg).unwrap();

        let expected_hash = alg.hash(&opening);

        if expected_hash == commitment.hash.value {
            Subsequence::new(commitment.seq.clone(), self.data.clone())
                .map_err(|_| PlaintextHashProofError::new("proof contains invalid subsequence"))
        } else {
            Err(PlaintextHashProofError::new(
                "hash does not match commitment",
            ))
        }
    }
}

/// Kind of transcript commitment.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub enum SubstringCommitmentKind {
    /// A commitment to the encodings of the transcript.
    Encoding,
    /// A hash commitment to some plaintext in the transcript.
    Hash {
        /// The hash algorithm used.
        alg: HashAlgorithmId,
    },
}

/// An error for [`SubstringProof`].
#[derive(Debug, thiserror::Error)]
#[non_exhaustive]
pub enum SubstringProofError {
    /// Encoding proof error.
    #[error("encoding proof error: {0}")]
    Encoding(#[from] EncodingProofError),
    /// Hash proof error.
    #[error("hash proof error: {0}")]
    Hash(#[from] PlaintextHashProofError),
    /// Attestation is missing a required field.
    #[error("missing field: {0:?}")]
    MissingField(FieldKind),
    /// Incorrect field kind.
    #[error("incorrect field kind: {kind:?} expected for field {id:?}")]
    IncorrectField {
        /// The field id.
        id: FieldId,
        /// The expected field kind.
        kind: FieldKind,
    },
}

/// A proof of substrings in a transcript.
#[derive(Serialize, Deserialize)]
pub struct SubstringProof {
    pub(crate) encoding_proof: Option<EncodingProof>,
    pub(crate) hash_proofs: Vec<PlaintextHashProof>,
}

opaque_debug::implement!(SubstringProof);

impl SubstringProof {
    /// Verifies the proof using the attestation body.
    ///
    /// Returns a partial transcript of authenticated data.
    ///
    /// # Arguments
    ///
    /// * `attestation_body` - The attestation body to verify against.
    pub(crate) fn verify(
        self,
        config: &HashProvider,
        attestation_body: &AttestationBody,
    ) -> Result<PartialTranscript, SubstringProofError> {
        let info = attestation_body.conn_info();

        let mut transcript = PartialTranscript::new(
            info.transcript_length.sent as usize,
            info.transcript_length.received as usize,
        );

        // Verify encoding proof.
        if let Some(proof) = self.encoding_proof {
            let commitment = attestation_body
                .encoding_commitment()
                .ok_or_else(|| SubstringProofError::MissingField(FieldKind::EncodingCommitment))?;
            let seq = proof.verify(&info.transcript_length, commitment)?;
            transcript.union_transcript(&seq);
        }

        // Verify hash openings.
        for opening in self.hash_proofs {
            let commitment = attestation_body
                .plaintext_hashes()
                .find_map(|field| {
                    if &field.id() == opening.commitment_id() {
                        Some(field.data().inner())
                    } else {
                        None
                    }
                })
                .ok_or_else(|| SubstringProofError::MissingField(FieldKind::PlaintextHash))?;

            let seq = opening.verify(config, commitment)?;
            transcript.union_subsequence(&seq);
        }

        Ok(transcript)
    }
}
