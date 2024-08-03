//! Hash types.

use std::{
    collections::HashMap,
    fmt::Display,
    sync::{Arc, LazyLock},
};

use serde::{Deserialize, Serialize};

/// The SHA-256 hash algorithm.
pub const SHA256: HashAlgorithmId = HashAlgorithmId(0);
/// The BLAKE3 hash algorithm.
pub const BLAKE3: HashAlgorithmId = HashAlgorithmId(1);
/// The Keccak-256 hash algorithm.
pub const KECCAK256: HashAlgorithmId = HashAlgorithmId(2);

/// Officially supported hash algorithms.
pub const HASH_ALGORITHMS: &'static [HashAlgorithmId] = &[SHA256, BLAKE3, KECCAK256];

pub static DEFAULT_HASH_PROVIDER: LazyLock<Arc<HashProvider>> = LazyLock::new(|| {
    let mut algs = HashMap::new();

    // algs.insert(SHA256, Box::new(Sha256::default()));
    // algs.insert(BLAKE3, Box::new(Blake3::default()));
    // algs.insert(KECCAK256, Box::new(Keccak256::default()));

    Arc::new(HashProvider { algs })
});

#[derive(Debug, thiserror::Error)]
#[error("unknown hash algorithm id: {}", self.0)]
pub struct HashProviderError(HashAlgorithmId);

/// Hash provider.
pub struct HashProvider {
    algs: HashMap<HashAlgorithmId, Box<dyn HashAlgorithm + Send + Sync>>,
}

impl Default for HashProvider {
    fn default() -> Self {
        todo!()
    }
}

impl HashProvider {
    /// Returns the hash algorithm with the given identifier, or an error if the hash algorithm
    /// does not exist.
    pub fn get(
        &self,
        id: &HashAlgorithmId,
    ) -> Result<&(dyn HashAlgorithm + Send + Sync), HashProviderError> {
        self.algs
            .get(&id)
            .map(|alg| &**alg)
            .ok_or(HashProviderError(*id))
    }
}

/// A hash algorithm identifier.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub struct HashAlgorithmId(u8);

impl HashAlgorithmId {
    /// Creates a new hash algorithm identifier.
    ///
    /// # Panics
    ///
    /// Panics if the identifier is in the reserved range 0-127.
    ///
    /// # Arguments
    ///
    /// * id - Unique identifier for the hash algorithm.
    pub fn new(id: u8) -> Self {
        assert!(id > 128, "hash algorithm id range 0-127 is reserved");

        Self(id)
    }

    /// Returns the unique identifier for the hash algorithm.
    pub fn as_u8(&self) -> u8 {
        self.0
    }
}

impl Display for HashAlgorithmId {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{:02x}", self.0)
    }
}

/// A typed hash value.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct TypedHash {
    /// The algorithm of the hash.
    pub alg: HashAlgorithmId,
    /// The hash value.
    pub value: Hash,
}

/// A hash value.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub struct Hash(pub Vec<u8>);

/// A hashing algorithm.
pub trait HashAlgorithm {
    /// Returns the hash algorithm identifier.
    fn id(&self) -> HashAlgorithmId;

    /// Returns a new incrementally updateable hash context for this algorithm.
    fn new(&self) -> Box<dyn HashContext>;

    /// Computes the hash of the provided data.
    fn hash(&self, data: &[u8]) -> Hash;
}

/// An incrementally updateable hash context for a [`HashAlgorithm`].
pub trait HashContext {
    /// Returns the hash algorithm identifier.
    fn id(&self) -> HashAlgorithmId;

    /// Clones the hash context.
    fn clone(&self) -> Box<dyn HashContext>;

    /// Updates the hash with the given data.
    fn update(&mut self, data: &[u8]);

    /// Finalizes the hash.
    fn finalize(self: Box<Self>) -> Hash;
}

mod sha2 {
    use ::sha2::Digest;

    /// SHA-256 hasher.
    #[derive(Default, Clone)]
    pub struct Sha256(::sha2::Sha256);

    opaque_debug::implement!(Sha256);

    impl super::HashContext for Sha256 {
        fn id(&self) -> super::HashAlgorithmId {
            super::SHA256
        }

        fn clone(&self) -> Box<dyn super::HashContext> {
            Box::new(Self(self.0.clone()))
        }

        fn update(&mut self, data: &[u8]) {
            self.0.update(data);
        }

        fn finalize(self: Box<Self>) -> super::Hash {
            super::Hash(self.0.finalize().to_vec())
        }
    }
}

pub use sha2::Sha256;

mod blake3 {
    /// BLAKE3 hasher.
    #[derive(Default, Clone)]
    pub struct Blake3(::blake3::Hasher);

    opaque_debug::implement!(Blake3);

    impl super::HashContext for Blake3 {
        fn id(&self) -> super::HashAlgorithmId {
            super::BLAKE3
        }

        fn clone(&self) -> Box<dyn super::HashContext> {
            Box::new(Self(self.0.clone()))
        }

        fn update(&mut self, data: &[u8]) {
            self.0.update(data);
        }

        fn finalize(self: Box<Self>) -> super::Hash {
            super::Hash(self.0.finalize().as_bytes().to_vec())
        }
    }
}

pub use blake3::Blake3;

mod keccak {
    use tiny_keccak::Hasher;

    /// Keccak-256 hasher.
    #[derive(Clone)]
    pub struct Keccak256(tiny_keccak::Keccak);

    opaque_debug::implement!(Keccak256);

    impl Default for Keccak256 {
        fn default() -> Self {
            Self(tiny_keccak::Keccak::v256())
        }
    }

    impl super::HashContext for Keccak256 {
        fn id(&self) -> super::HashAlgorithmId {
            super::KECCAK256
        }

        fn clone(&self) -> Box<dyn super::HashContext> {
            Box::new(Self(self.0.clone()))
        }

        fn update(&mut self, data: &[u8]) {
            self.0.update(data);
        }

        fn finalize(self: Box<Self>) -> super::Hash {
            let mut output = vec![0; 32];
            self.0.finalize(&mut output);
            super::Hash(output)
        }
    }
}

pub use keccak::Keccak256;
