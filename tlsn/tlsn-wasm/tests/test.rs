use futures::FutureExt;
use serde::{Serialize, Serializer as _};
use serde_wasm_bindgen::{from_value, to_value, Serializer};
use wasm_bindgen::{JsError, JsValue};
use wasm_bindgen_futures::{spawn_local, JsFuture};
use wasm_bindgen_test::*;
use web_sys::console;

use tlsn_wasm::{prover::JsProver, setup_tracing_web, verifier::JsVerifier};

use wasm_bindgen_rayon::init_thread_pool;

wasm_bindgen_test::wasm_bindgen_test_configure!(run_in_dedicated_worker);

#[wasm_bindgen_test]
async fn test() -> Result<(), JsValue> {
    setup_tracing_web();
    // spawn_local(JsFuture::from(init_thread_pool(4)).map(|_| ()));
    // JsFuture::from(init_thread_pool(8)).map(|_| ()).await;
    
    let _ = init_thread_pool(4);  // Specify the number of threads you want

    let se = Serializer::new().serialize_maps_as_objects(true);
    let prover_config: JsValue = serde_json::json!({
        "id": "interactive-verifier-demo",
        "server_dns": "swapi.dev",
        "max_sent_data": 1024,
        "max_received_data": 1024,
    })
    .serialize(&se)
    .unwrap();

    let mut prover = JsProver::new(prover_config)?;

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

    prover
        .setup("ws://localhost:9816/verify")
        .await?;
    prover
        .send_request("wss://notary.pse.dev/proxy?token=swapi.dev", request)
        .await?;
    prover.reveal(redact).await?;

     Ok(())
}
