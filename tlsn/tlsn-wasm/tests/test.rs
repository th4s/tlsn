use futures::FutureExt;
use serde::{Serialize, Serializer as _};
use serde_wasm_bindgen::{from_value, to_value, Serializer};
use wasm_bindgen::{JsError, JsValue};
use wasm_bindgen_futures::{spawn_local, JsFuture};
use wasm_bindgen_test::*;
use web_sys::console;

use tlsn_wasm::{prover::JsProver, setup_tracing_web, verifier::JsVerifier};

use wasm_bindgen_rayon::init_thread_pool;

wasm_bindgen_test::wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
async fn test_interactive() -> Result<(), JsValue> {
    setup_tracing_web();

    let se = Serializer::new().serialize_maps_as_objects(true);

    let prover_config: JsValue = serde_json::json!({
        "id": "test",
        "server_dns": "swapi.dev",
        "max_sent_data": 1024,
        "max_received_data": 1024,
    })
    .serialize(&se)
    .unwrap();

    let verifier_config: JsValue = serde_json::json!({
        "id": "test",
        "max_sent_data": 1024,
        "max_received_data": 1024,
    })
    .serialize(&se)
    .unwrap();

    let mut prover = JsProver::new(prover_config)?;
    let mut verifier = JsVerifier::new(verifier_config)?;

    let request: JsValue = serde_json::json!({
        "method": "GET",
        "uri": "https://swapi.dev/api",
        "headers": {
            "Accept": "*"
        }
    })
    .serialize(&se)
    .unwrap();

    let redact: JsValue = serde_json::json!({
        "sent": [],
        "received": []
    })
    .serialize(&se)
    .unwrap();

    futures::try_join!(
        async move {
            prover.setup("ws://127.0.0.1:8080").await?;
            prover
                .send_request("wss://notary.pse.dev/proxy?token=swapi.dev", request)
                .await?;
            prover.reveal(redact).await?;

            Ok::<(), JsError>(())
        },
        async move {
            verifier.connect("ws://127.0.0.1:8081").await?;
            verifier.verify().await?;

            Ok::<(), JsError>(())
        }
    )?;

    Ok(())
}
