cleanup() {
  echo "Terminating both commands..."
  kill $pid1 $pid2 2>/dev/null
}

trap cleanup SIGINT EXIT


# Start the first command in the background
cargo run --manifest-path ../ws-proxy/Cargo.toml --release &
# Save its PID
pid1=$!

# Start the second command in the background
RUSTFLAGS="-C target-feature=+atomics,+bulk-memory,+mutable-globals" wasm-pack test --chrome --release --features single-threaded -Z build-std=panic_abort,std &
# Save its PID
pid2=$!

# Wait for either command to exit
wait -n
# After one command exits, kill the other and exit
cleanup