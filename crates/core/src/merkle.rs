//! Merkle tree types.

use serde::{Deserialize, Serialize};
use utils::iter::DuplicateCheck;

use crate::{
    hash::{HashAlgorithmId, TypedHash},
    serialize::CanonicalSerialize,
};

/// Errors that can occur during operations with Merkle tree and Merkle proof
#[derive(Debug, thiserror::Error, PartialEq)]
#[allow(missing_docs)]
pub(crate) enum MerkleError {
    /// Hash algorithm mismatch
    #[error("hash algorithm mismatch: expected {expected:?}, got {actual:?}")]
    AlgorithmMismatch {
        expected: HashAlgorithmId,
        actual: HashAlgorithmId,
    },
    /// Invalid merkle proof.
    #[error("invalid merkle proof")]
    InvalidProof,
}

#[derive(Debug, Serialize, Deserialize)]
pub(crate) struct MerkleProof;

impl MerkleProof {
    /// Returns the hash algorithm of the proof.
    pub(crate) fn algorithm(&self) -> HashAlgorithmId {
        todo!()
    }

    /// Checks if indices, hashes and leaves count are valid for the provided root
    ///
    /// # Panics
    ///
    /// - If the length of `leaf_indices` and `leaf_hashes` does not match.
    /// - If `leaf_indices` contains duplicates.
    pub(crate) fn verify<T: CanonicalSerialize>(
        &self,
        root: &TypedHash,
        leaf_indices: &[usize],
        leafs: &[T],
    ) -> Result<(), MerkleError> {
        assert_eq!(
            leaf_indices.len(),
            leafs.len(),
            "leaf indices length must match leafs length"
        );

        assert!(
            !leaf_indices.iter().contains_dups(),
            "duplicate indices provided {:?}",
            leaf_indices
        );

        // // zip indices and hashes
        // let mut leaf_hashes: Vec<(usize, H::Output)> = leaf_indices
        //     .iter()
        //     .copied()
        //     .zip(leafs)
        //     .map(|(idx, leaf)| {
        //         let hash = <H as HashContext>::hash(&leaf.serialize());
        //         (idx, hash)
        //     })
        //     .collect();

        // // sort by index and unzip
        // leaf_hashes.sort_by_key(|(idx, _)| *idx);
        // let (indices, leaf_hashes): (Vec<usize>, Vec<_>) = leaf_hashes.into_iter().unzip();

        // if !self
        //     .proof
        //     .verify(*root, &indices, &leaf_hashes, self.total_leaves)
        // {
        //     return Err(MerkleError::InvalidProof);
        // }

        // Ok(())

        todo!()
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub(crate) struct MerkleTree;

impl MerkleTree {
    pub(crate) fn new(alg: HashAlgorithmId) -> Self {
        todo!()
    }

    pub(crate) fn algorithm(&self) -> HashAlgorithmId {
        todo!()
    }

    pub(crate) fn insert<T: CanonicalSerialize + ?Sized>(&mut self, leaf: &T) {
        todo!()
    }

    pub(crate) fn proof(&self, indices: &[usize]) -> MerkleProof {
        assert!(
            indices.windows(2).all(|w| w[0] < w[1]),
            "indices must be unique and sorted"
        );

        todo!()
    }

    pub(crate) fn root(&self) -> TypedHash {
        todo!()
    }
}

#[cfg(test)]
mod test {
    use crate::hash::{BLAKE3, KECCAK256, SHA256};

    use super::*;
    use rstest::*;

    impl CanonicalSerialize for u64 {
        fn serialize(&self) -> Vec<u8> {
            self.to_be_bytes().to_vec()
        }
    }

    // Expect Merkle proof verification to succeed
    #[rstest]
    #[case::sha2(SHA256)]
    #[case::blake3(BLAKE3)]
    #[case::keccak(KECCAK256)]
    fn test_verify_success(#[case] alg: HashAlgorithmId) {
        let mut tree = MerkleTree::new(alg);
        for i in 0..=4 {
            tree.insert(&i)
        }

        let proof = tree.proof(&[2, 3, 4]);

        assert!(proof
            .verify(&tree.root(), &[2, 3, 4], &[2u64, 3u64, 4u64])
            .is_ok());
    }

    #[rstest]
    #[case::sha2(SHA256)]
    #[case::blake3(BLAKE3)]
    #[case::keccak(KECCAK256)]
    fn test_verify_fail_wrong_leaf(#[case] alg: HashAlgorithmId) {
        let mut tree = MerkleTree::new(alg);
        for i in 0..=4 {
            tree.insert(&i)
        }

        let proof = tree.proof(&[2, 3, 4]);

        // fail because the leaf is wrong
        assert_eq!(
            proof
                .verify(&tree.root(), &[2, 3, 4], &[1u64, 3u64, 4u64])
                .err()
                .unwrap(),
            MerkleError::InvalidProof
        );
    }

    #[rstest]
    #[should_panic]
    #[case::sha2(SHA256)]
    #[should_panic]
    #[case::blake3(BLAKE3)]
    #[should_panic]
    #[case::keccak(KECCAK256)]
    fn test_proof_fail_length_unsorted(#[case] alg: HashAlgorithmId) {
        let mut tree = MerkleTree::new(alg);
        for i in 0..=4 {
            tree.insert(&i)
        }

        _ = tree.proof(&[2, 4, 3]);
    }

    #[rstest]
    #[should_panic]
    #[case::sha2(SHA256)]
    #[should_panic]
    #[case::blake3(BLAKE3)]
    #[should_panic]
    #[case::keccak(KECCAK256)]
    fn test_proof_fail_length_duplicates(#[case] alg: HashAlgorithmId) {
        let mut tree = MerkleTree::new(alg);
        for i in 0..=4 {
            tree.insert(&i)
        }

        _ = tree.proof(&[2, 2, 3]);
    }

    #[rstest]
    #[should_panic]
    #[case::sha2(SHA256)]
    #[should_panic]
    #[case::blake3(BLAKE3)]
    #[should_panic]
    #[case::keccak(KECCAK256)]
    fn test_verify_fail_length_mismatch(#[case] alg: HashAlgorithmId) {
        let mut tree = MerkleTree::new(alg);
        for i in 0..=4 {
            tree.insert(&i)
        }

        let proof = tree.proof(&[2, 3, 4]);

        _ = proof.verify(&tree.root(), &[1, 2, 3, 4], &[2u64, 3u64, 4u64]);
    }

    #[rstest]
    #[should_panic]
    #[case::sha2(SHA256)]
    #[should_panic]
    #[case::blake3(BLAKE3)]
    #[should_panic]
    #[case::keccak(KECCAK256)]
    fn test_verify_fail_duplicates(#[case] alg: HashAlgorithmId) {
        let mut tree = MerkleTree::new(alg);
        for i in 0..=4 {
            tree.insert(&i)
        }

        let proof = tree.proof(&[2, 3, 4]);

        _ = proof.verify(&tree.root(), &[2, 2, 3], &[2u64, 2u64, 3u64]);
    }

    #[rstest]
    #[case::sha2(SHA256)]
    #[case::blake3(BLAKE3)]
    #[case::keccak(KECCAK256)]
    fn test_verify_fail_incorrect_leaf_count(#[case] alg: HashAlgorithmId) {
        let mut tree = MerkleTree::new(alg);
        for i in 0..=4 {
            tree.insert(&i)
        }

        let mut proof = tree.proof(&[2, 3, 4]);

        // match &mut proof.0 {
        //     MerkleProofAlg::Sha256(inner) => inner.total_leaves = 6,
        //     MerkleProofAlg::Blake3(inner) => inner.total_leaves = 6,
        //     MerkleProofAlg::Keccak256(inner) => inner.total_leaves = 6,
        // }

        // fail because leaf count is wrong
        assert!(proof
            .verify(&tree.root(), &[2, 3, 4], &[2u64, 3u64, 4u64])
            .is_err());
    }

    #[rstest]
    #[case::sha2(SHA256)]
    #[case::blake3(BLAKE3)]
    #[case::keccak(KECCAK256)]
    fn test_verify_fail_incorrect_indices(#[case] alg: HashAlgorithmId) {
        let mut tree = MerkleTree::new(alg);
        for i in 0..=4 {
            tree.insert(&i)
        }

        let proof = tree.proof(&[2, 3, 4]);

        // fail because leaf index is wrong
        assert!(proof
            .verify(&tree.root(), &[1, 3, 4], &[2u64, 3u64, 4u64])
            .is_err());
    }

    #[rstest]
    #[case::sha2(SHA256)]
    #[case::blake3(BLAKE3)]
    #[case::keccak(KECCAK256)]
    fn test_verify_fail_fewer_indices(#[case] alg: HashAlgorithmId) {
        let mut tree = MerkleTree::new(alg);
        for i in 0..=4 {
            tree.insert(&i)
        }

        let proof = tree.proof(&[2, 3, 4]);

        // trying to verify less leaves than what was included in the proof
        assert!(proof.verify(&tree.root(), &[3, 4], &[3u64, 4u64]).is_err());
    }

    #[rstest]
    #[case::sha2(SHA256)]
    #[case::blake3(BLAKE3)]
    #[case::keccak(KECCAK256)]
    fn test_merkle_tree_serialization(#[case] alg: HashAlgorithmId) {
        let mut tree = MerkleTree::new(alg);
        for i in 0..=4 {
            tree.insert(&i)
        }

        let proof = tree.proof(&[2, 3, 4]);

        let tree2: MerkleTree = bincode::deserialize(&bincode::serialize(&tree).unwrap()).unwrap();
        let proof2: MerkleProof =
            bincode::deserialize(&bincode::serialize(&proof).unwrap()).unwrap();

        assert_eq!(tree.root(), tree2.root());
        assert!(proof2
            .verify(&tree.root(), &[2, 3, 4], &[2u64, 3u64, 4u64])
            .is_ok());
    }
}
