use std::env;

use anyhow::Context;
use futures::{SinkExt, StreamExt};
use tokio::net::{TcpListener, TcpStream};

async fn handle(listener_0: &TcpListener, listener_1: &TcpListener) -> anyhow::Result<()> {
    let (socket_0, socket_1) = tokio::try_join!(
        async move {
            let stream_0 = listener_0.accept().await?.0;
            let socket = tokio_tungstenite::accept_async(stream_0).await?;
            println!("Websocket established on stream 0");
            Ok::<_, anyhow::Error>(socket)
        },
        async move {
            let stream_1 = listener_1.accept().await?.0;
            let socket = tokio_tungstenite::accept_async(stream_1).await?;
            println!("Websocket established on stream 1");
            Ok::<_, anyhow::Error>(socket)
        }
    )?;

    let (mut w_0, mut r_0) = socket_0.split();
    let (mut w_1, mut r_1) = socket_1.split();

    let task_0 = tokio::spawn(async move {
        w_1.flush().await?;
        while let Some(msg) = r_0.next().await {
            w_1.send(msg.context("message error from socket 0")?)
                .await
                .context("sending to socket 1")?;
        }

        w_1.close().await?;

        Ok::<(), anyhow::Error>(())
    });

    let task_1 = tokio::spawn(async move {
        w_0.flush().await?;
        while let Some(msg) = r_1.next().await {
            w_0.send(msg.context("message error from socket 1")?)
                .await
                .context("sending to socket 0")?;
        }

        w_0.close().await?;

        Ok::<(), anyhow::Error>(())
    });

    let (r_0, r_1) = tokio::try_join!(task_0, task_1)?;

    r_0?;
    r_1?;

    Ok(())
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let addr_0 = env::args()
        .nth(1)
        .unwrap_or_else(|| "127.0.0.1:8080".to_string());
    let addr_1 = env::args()
        .nth(2)
        .unwrap_or_else(|| "127.0.0.1:8081".to_string());

    let (listener_0, listener_1) =
        tokio::try_join!(TcpListener::bind(&addr_0), TcpListener::bind(&addr_1))?;

    println!("Listening on: {} and {}", addr_0, addr_1);

    loop {
        if let Err(e) = handle(&listener_0, &listener_1).await {
            eprintln!("Error: {:?}", e);
        }
    }
}
