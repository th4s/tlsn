use serde_wasm_bindgen::{from_value, to_value};
use tlsn_core::{commitment::CommitmentKind, proof::TlsProof};
use tlsn_formats::http::HttpTranscript;
use wasm_bindgen::{prelude::*, JsError, JsValue};

use super::config::RevealConfig;

type Result<T> = std::result::Result<T, JsError>;

#[wasm_bindgen]
pub struct NotarizedSession {
    session: tlsn_core::NotarizedSession,
    transcript: HttpTranscript,
}

#[wasm_bindgen]
impl NotarizedSession {
    pub(crate) fn new(value: tlsn_prover::http::NotarizedHttpSession) -> NotarizedSession {
        let (session, transcript) = value.into_parts();
        Self {
            session,
            transcript,
        }
    }

    #[wasm_bindgen]
    pub fn from_json(value: JsValue) -> Result<NotarizedSession> {
        let session: tlsn_core::NotarizedSession = from_value(value)?;
        let transcript = HttpTranscript::parse(
            session.data().sent_transcript(),
            session.data().recv_transcript(),
        )?;

        Ok(NotarizedSession {
            session,
            transcript,
        })
    }

    #[wasm_bindgen]
    pub fn to_json(&self) -> Result<JsValue> {
        to_value(&self.session).map_err(JsError::from)
    }

    #[wasm_bindgen]
    pub fn new_proof(&self, reveal: JsValue) -> Result<JsValue> {
        let reveal: RevealConfig = from_value(reveal)?;

        let session = self.session.session_proof();
        let mut builder = self.session.data().build_substrings_proof();

        let RevealConfig {
            request_headers,
            response_headers,
        } = reveal;

        for (idx, headers) in request_headers.into_iter().enumerate() {
            let request = self
                .transcript
                .requests
                .get(idx)
                .ok_or_else(|| JsError::new(&format!("invalid request index: {idx}")))?;
            for header in headers {
                let header = request
                    .headers_with_name(&header)
                    .next()
                    .ok_or_else(|| JsError::new(&format!("missing header: {header}")))?;
                builder.reveal_sent(header, CommitmentKind::Blake3)?;
            }
        }

        for (idx, headers) in response_headers.into_iter().enumerate() {
            let response = self
                .transcript
                .responses
                .get(idx)
                .ok_or_else(|| JsError::new(&format!("invalid response index: {idx}")))?;
            for header in headers {
                let header = response
                    .headers_with_name(&header)
                    .next()
                    .ok_or_else(|| JsError::new(&format!("missing header: {header}")))?;
                builder.reveal_recv(header, CommitmentKind::Blake3)?;
            }
        }

        to_value(&TlsProof {
            session,
            substrings: builder.build()?,
        })
        .map_err(JsError::from)
    }
}
