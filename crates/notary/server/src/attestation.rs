use axum::{ http::StatusCode, response::{ IntoResponse, Response }, Json };
use notify::Error;
use tracing::error;
use tracing::debug;
use serde_json::json;

pub const REPORT_DATA_SIZE: usize = 64;

fn pad_report_data(report_data: &[u8], length: usize) -> Result<Vec<u8>, Error> {
    if report_data.len() > length {
        let err_msg = "invalid report data len".to_string();
        error!(err_msg);
    }
    let mut inner_user_report_data = vec![0u8; length];
    inner_user_report_data[0..report_data.len()].copy_from_slice(report_data);
    Ok(inner_user_report_data)
}

pub async fn get_quote(report_data: Option<&[u8]>) -> impl IntoResponse {
    let report_data = if let Some(data) = report_data {
        pad_report_data(data, REPORT_DATA_SIZE).unwrap()
    } else {
        vec![0u8; REPORT_DATA_SIZE]
    };

    if sgx_quote::is_sgx() {
        return (StatusCode::OK, Json(json!({"tee": "sgx", "quote": ""}))).into_response();
    }
    return (StatusCode::OK, Json(json!({"tee": "sgx", "quote": ""}))).into_response();
}
