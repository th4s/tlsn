var searchIndex = JSON.parse('{\
"tlsn_core":{"doc":"TLSNotary core protocol library.","t":"CDCCNCCCCECCLLLLLLLLLALLLLLLLLLLLLLLLLLLLAALALALLLLALLLLLLLLNNNEDDEENNNDEDALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLDDLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLENDNDDLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLNDNENLLLLLLLLLLLLLLLLMLLLLLLMLLLLLLLLNNNNNNNNDDEELLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLNDENNDNDDEDLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMLLLMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLENDNDDLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLFLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","n":["Direction","EncodingId","HandshakeSummary","NotarizedSession","P256","RedactedTranscript","SessionData","SessionHeader","SessionProof","Signature","Transcript","TranscriptSlice","borrow","borrow","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","cmp","commitment","deref","deref","deref_mut","deref_mut","deserialize","drop","drop","eq","equivalent","fmt","fmt","from","from","from","hash","init","init","into","into","merkle","msg","partial_cmp","proof","serialize","session","to_bytes","to_inner","to_owned","to_owned","transcript","try_from","try_from","try_into","try_into","type_id","type_id","vzip","vzip","Blake3","Blake3","Blake3","Commitment","CommitmentId","CommitmentInfo","CommitmentKind","CommitmentOpening","Duplicate","MissingEncodings","NoCommitments","TranscriptCommitmentBuilder","TranscriptCommitmentBuilderError","TranscriptCommitments","blake3","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","build","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","cmp","commit_recv","commit_sent","data","deref","deref","deref","deref","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","direction","drop","drop","drop","drop","drop","drop","drop","drop","eq","eq","eq","equivalent","equivalent","equivalent","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","get","get_id_by_info","get_info","hash","hash","hash","hash","init","init","init","init","init","init","init","init","into","into","into","into","into","into","into","into","into_data","kind","kind","kind","merkle_root","merkle_tree","partial_cmp","provide","ranges","recover","serialize","serialize","serialize","serialize","serialize","serialize","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_string","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","Blake3Commitment","Blake3Opening","borrow","borrow","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","data","deref","deref","deref_mut","deref_mut","deserialize","deserialize","drop","drop","fmt","from","from","hash","init","init","into","into","into_data","new","nonce","open","recover","serialize","serialize","to_owned","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","vzip","vzip","MerkleError","MerkleNoLeavesProvided","MerkleProof","MerkleProofVerificationFailed","MerkleRoot","MerkleTree","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone_into","clone_into","clone_into","default","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deserialize","deserialize","deserialize","drop","drop","drop","drop","eq","eq","equivalent","fmt","fmt","fmt","from","from","from","from","from","from_leaves","init","init","init","init","into","into","into","into","proof","provide","root","serialize","serialize","serialize","to_inner","to_owned","to_owned","to_owned","to_string","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","verify","vzip","vzip","vzip","vzip","SessionHeader","SignedSessionHeader","SignedSessionHeader","TlsnMessage","TranscriptCommitmentRoot","borrow","borrow","borrow_mut","borrow_mut","deref","deref","deref_mut","deref_mut","deserialize","deserialize","drop","drop","fmt","fmt","from","from","header","init","init","into","into","serialize","serialize","signature","try_from","try_from","try_into","try_into","type_id","type_id","vzip","vzip","DuplicateCommitmentId","DuplicateData","InvalidCommitmentId","InvalidCommitmentType","InvalidInclusionProof","InvalidOpening","MaxDataExceeded","RangeOutOfBounds","SubstringsProof","SubstringsProofBuilder","SubstringsProofBuilderError","SubstringsProofError","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","build","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deserialize","drop","drop","drop","drop","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","init","init","init","init","into","into","into","into","provide","provide","reveal","serialize","to_string","to_string","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","verify","vzip","vzip","vzip","vzip","Commitment","HandshakeSummary","HandshakeVerifyError","InconsistentHeader","KxParams","NotarizedSession","ServerEphemKey","SessionData","SessionHeader","SessionHeaderVerifyError","SessionProof","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","build_substrings_proof","clone","clone","clone_into","clone_into","commitments","data","deref","deref","deref","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deserialize","deserialize","deserialize","deserialize","deserialize","drop","drop","drop","drop","drop","drop","drop","encoder","encoder_seed","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","handshake_commitment","handshake_data_decommitment","handshake_data_decommitment","handshake_data_decommitment","handshake_summary","header","header","header","init","init","init","init","init","init","init","into","into","into","into","into","into","into","merkle_root","new","new","new","new","new","provide","provide","recv_len","recv_transcript","sent_len","sent_transcript","serialize","serialize","serialize","serialize","serialize","server_public_key","session_proof","signature","signature","time","to_owned","to_owned","to_string","to_string","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","verify","verify","vzip","vzip","vzip","vzip","vzip","vzip","vzip","Direction","Received","RedactedTranscript","Sent","Transcript","TranscriptSlice","authed","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone_into","clone_into","clone_into","data","data","data","default","default","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deserialize","deserialize","drop","drop","drop","drop","eq","eq","equivalent","fmt","fmt","fmt","fmt","from","from","from","from","get_value_ids","hash","init","init","init","init","into","into","into","into","into_bytes","new","new","range","redacted","serialize","serialize","set_redacted","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","vzip","vzip","vzip","vzip"],"q":[[0,"tlsn_core"],[60,"tlsn_core::commitment"],[240,"tlsn_core::commitment::blake3"],[284,"tlsn_core::merkle"],[368,"tlsn_core::msg"],[405,"tlsn_core::proof"],[480,"tlsn_core::session"],[632,"tlsn_core::transcript"]],"d":["","The encoding id","","","A secp256r1 signature.","","","","","A Notary signature.","","","","","","","","","","","","Types related to transcript commitments.","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Merkle tree types.","Protocol message types.","","Types for substring proofs.","","TLS session types.","Returns the bytes of this signature.","Returns the encoding ID.","","","Transcript data types.","","","","","","","","","A BLAKE3 commitment to encodings of the transcript.","A BLAKE3 commitment to encodings of the transcript.","An opening to a BLAKE3 commitment","A commitment to some bytes in a transcript","A commitment id.","Info of a transcript commitment","The kind of a <code>Commitment</code>.","An opening to a commitment to the transcript.","Duplicate commitment","Failed to retrieve encodings for the provided transcript …","No commitments were added","A builder for <code>TranscriptCommitments</code>.","An error for <code>TranscriptCommitmentBuilder</code>","A collection of transcript commitments.","BLAKE3 commitments.","","","","","","","","","","","","","","","","","Builds the <code>TranscriptCommitments</code>","","","","","","","","","","","","","","Commits to the provided ranges of the <code>received</code> transcript.","Commits to the provided ranges of the <code>sent</code> transcript.","Returns the transcript data corresponding to this opening","","","","","","","","","","","","","","","","","","","","","","","Returns the direction of this commitment","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","Returns a commitment if it exists.","Returns the commitment id for a commitment with the given …","Returns commitment info, if it exists.","","","Returns the hash of this commitment","","","","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Returns the transcript data corresponding to this opening","Returns the kind of this commitment","Returns the kind of this commitment","Returns the kind of this opening","Returns the merkle root of the commitments.","Returns the merkle tree of the commitments.","","","Returns the ranges of this commitment","Recovers the expected commitment from this opening.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","A Blake3 commitment to the encodings of the substrings of …","A substring opening using Blake3","","","","","","","","","Returns the transcript data corresponding to this opening","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the hash of this commitment","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Returns the transcript data corresponding to this opening","Creates a new Blake3 commitment","Returns the nonce of this commitment","Opens this commitment","Recovers the expected commitment from this opening.","","","","","","","","","","","","","Errors that can occur during operations with Merkle tree …","","A Merkle proof.","","A Merkle root.","A Merkle tree.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Create a new Merkle tree from the given <code>leaves</code>","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Creates an inclusion proof for the given <code>indices</code>","","Returns the Merkle root for this MerkleTree","","","","Returns the inner byte array","","","","","","","","","","","","","","","","","Checks if indices, hashes and leaves count are valid for …","","","","","A session header.","A signed session header.","A session header signed by a notary.","Top-level enum for all messages","A Merkle root for the tree of commitments to the …","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","The session header","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","The notary’s signature","","","","","","","","","Attempted to add a commitment with a duplicate id.","The proof contains duplicate transcript data.","Invalid commitment id.","Invalid commitment type.","The proof contains an invalid inclusion proof.","The proof contains an invalid commitment opening.","The proof contains more data than the maximum allowed.","Range of the opening is out of bounds.","A substring proof containing the commitment openings and a …","A builder for <code>SubstringsProof</code>","An error for <code>SubstringsProofBuilder</code>","An error relating to <code>SubstringsProof</code>","","","","","","","","","Builds the <code>SubstringsProof</code>","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","Reveals data corresponding to the provided commitment id","","","","","","","","","","","","","","","","Verifies this proof and, if successful, returns two …","","","","","The handshake data does not match the commitment","Handshake summary is part of the session header signed by …","An error that can occur while verifying a handshake summary","The session header is not consistent with the provided data","The key exchange parameters are invalid","A validated notarized session stored by the Prover","The server ephemeral key does not match","Notarized session data.","An authentic session header from the Notary","An error that can occur while verifying a session header","A proof for a TLSNotary session","","","","","","","","","","","","","","","Returns a substrings proof builder.","","","","","Returns the transcript commitments.","Returns the SessionData","","","","","","","","","","","","","","","","","","","","","","","","","","","Create a new ChaChaEncoder from encoder_seed","Returns the seed used to generate plaintext encodings","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns commitment to the handshake data","Returns the decommitment to handshake data","Returns the decommitment to HandshakeData","","Returns the HandshakeSummary of the TLS session between …","Returns the SessionHeader","Returns the SessionHeader","","","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Returns the merkle_root of the merkle tree of the prover’…","Creates new session data.","Creates a new HandshakeSummary","Create a new instance of SessionHeader","Create a new instance of SessionProof","Create a new instance of NotarizedSession","","","Returns the number of bytes received by the server","Returns the transcript for data received from the server","Returns the number of bytes sent to the server","Returns the transcript for data sent to the server","","","","","","Returns the server ephemeral public key","Generates a new SessionProof from this NotarizedSession","Returns the signature for the session header, if the …","","Returns the time","","","","","","","","","","","","","","","","","","","","","","","","","","Verifies that the provided handshake data matches this …","Verify the data in the header is consistent with the Prover…","","","","","","","","The direction of data communicated over a TLS connection.","Received by the prover from the server","A transcript which may have some data redacted.","Sent from the prover to the server","A transcript contains a subset of bytes from a TLS session","Slice of a transcript.","Returns all the ranges of data which have been …","","","","","","","","","","","","","","","Returns the actual traffic data of this transcript","Returns a reference to the data.","Returns the bytes of this slice","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the value ID for each byte in the provided range …","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Returns the bytes of this slice","Creates a new transcript with the given ID and data","Creates a new redacted transcript with the given length.","Returns the range of bytes this slice refers to in the …","Returns all the ranges of data which have been redacted.","","","Sets all bytes in the transcript which were redacted.","","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,0,1,0,0,0,0,0,0,0,1,2,1,2,1,2,1,2,2,0,1,2,1,2,1,1,2,2,2,1,2,1,1,2,2,1,2,1,2,0,0,2,0,1,0,1,2,1,2,0,1,2,1,2,1,2,1,2,23,24,25,0,0,0,0,0,20,20,20,0,0,0,0,18,20,21,22,23,24,25,19,18,20,21,22,23,24,25,19,18,21,22,23,24,25,19,21,22,23,24,25,19,21,18,18,25,18,20,21,22,23,24,25,19,18,20,21,22,23,24,25,19,21,22,23,24,25,19,22,18,20,21,22,23,24,25,19,21,22,24,21,22,24,18,20,20,21,22,24,19,18,20,21,22,23,23,24,25,25,19,19,19,19,21,22,23,24,18,20,21,22,23,24,25,19,18,20,21,22,23,24,25,19,25,22,23,25,19,19,21,20,22,25,21,22,23,24,25,19,21,22,23,24,25,19,20,18,20,21,22,23,24,25,19,18,20,21,22,23,24,25,19,18,20,21,22,23,24,25,19,18,20,21,22,23,24,25,19,0,0,31,32,31,32,31,32,31,32,32,31,32,31,32,31,32,31,32,31,31,32,31,31,32,31,32,32,31,31,31,32,31,32,31,32,31,32,31,32,31,32,31,32,0,43,0,43,0,0,34,43,42,35,34,43,42,35,34,42,35,34,42,35,35,34,43,42,35,34,43,42,35,34,42,35,34,43,42,35,34,43,34,34,43,43,34,34,43,42,35,35,34,43,42,35,34,43,42,35,35,43,35,34,42,35,34,34,42,35,43,34,43,42,35,34,43,42,35,34,43,42,35,42,34,43,42,35,45,0,45,0,45,45,46,45,46,45,46,45,46,45,46,45,46,45,46,45,46,46,45,46,45,46,45,46,46,45,46,45,46,45,46,45,46,49,50,49,49,50,50,50,50,0,0,0,0,47,49,50,48,47,49,50,48,47,47,49,50,48,47,49,50,48,48,47,49,50,48,47,49,49,50,50,48,47,49,50,48,47,49,50,48,47,49,50,48,49,50,47,48,49,50,47,49,50,48,47,49,50,48,47,49,50,48,48,47,49,50,48,57,0,0,58,57,0,57,0,0,0,0,52,57,53,58,51,55,54,52,57,53,58,51,55,54,52,53,51,53,51,52,54,52,57,53,58,51,55,54,52,57,53,58,51,55,54,52,53,51,55,54,52,57,53,58,51,55,54,51,51,52,57,57,53,58,58,51,52,57,53,58,51,55,54,53,52,55,55,51,55,54,55,52,57,53,58,51,55,54,52,57,53,58,51,55,54,51,52,53,51,55,54,57,58,51,52,51,52,52,53,51,55,54,53,54,54,55,53,53,51,57,58,52,57,53,58,51,55,54,52,57,53,58,51,55,54,52,57,53,58,51,55,54,53,51,52,57,53,58,51,55,54,0,29,0,29,0,0,64,61,64,65,29,61,64,65,29,61,65,29,61,65,29,61,64,65,61,65,61,64,65,29,61,64,65,29,61,29,61,64,65,29,65,29,29,61,64,65,29,61,64,65,29,0,29,61,64,65,29,61,64,65,29,65,61,64,65,64,61,29,64,61,65,29,61,64,65,29,61,64,65,29,61,64,65,29,61,64,65,29],"f":[0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[1,1],[2,2],[[]],[[]],[[2,2],3],0,[4],[4],[4],[4],[5,[[6,[1]]]],[4],[4],[[2,2],7],[[],7],[[1,8],9],[[2,8],9],[10,1],[[]],[[]],[[2,11]],[[],4],[[],4],[[]],[[]],0,0,[[2,2],[[12,[3]]]],0,[[1,13],6],0,[1,[[15,[14]]]],[2,16],[[]],[[]],0,[[],6],[[],6],[[],6],[[],6],[[],17],[[],17],[[]],[[]],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[18,[[6,[19,20]]]],[21,21],[22,22],[23,23],[24,24],[25,25],[19,19],[[]],[[]],[[]],[[]],[[]],[[]],[[21,21],3],[[18,[27,[[26,[4]]]]],[[6,[21,20]]]],[[18,[27,[[26,[4]]]]],[[6,[21,20]]]],[25,[[28,[14]]]],[4],[4],[4],[4],[4],[4],[4],[4],[4],[4],[4],[4],[4],[4],[4],[4],[5,[[6,[21]]]],[5,[[6,[22]]]],[5,[[6,[23]]]],[5,[[6,[24]]]],[5,[[6,[25]]]],[5,[[6,[19]]]],[22,29],[4],[4],[4],[4],[4],[4],[4],[4],[[21,21],7],[[22,22],7],[[24,24],7],[[],7],[[],7],[[],7],[[18,8],[[6,[30]]]],[[20,8],9],[[20,8],9],[[21,8],9],[[22,8],9],[[24,8],9],[[19,8],[[6,[30]]]],[[]],[[]],[[]],[[]],[31,23],[[]],[[]],[32,25],[[]],[[]],[[19,21],[[12,[23]]]],[[19,24,[26,[4]],29],[[12,[21]]]],[[19,21],[[12,[22]]]],[[21,11]],[[22,11]],[23,33],[[24,11]],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[25,[[15,[14]]]],[22,24],[23,24],[25,24],[19,34],[19,35],[[21,21],[[12,[3]]]],[36],[22,[[26,[4]]]],[[25,[28,[[38,[37]]]]],23],[[21,13],6],[[22,13],6],[[23,13],6],[[24,13],6],[[25,13],6],[[19,13],6],[[]],[[]],[[]],[[]],[[]],[[]],[[],39],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],0,0,[[]],[[]],[[]],[[]],[31,31],[32,32],[[]],[[]],[32,[[28,[14]]]],[4],[4],[4],[4],[5,[[6,[31]]]],[5,[[6,[32]]]],[4],[4],[[31,8],[[6,[30]]]],[[]],[[]],[31,33],[[],4],[[],4],[[]],[[]],[32,[[15,[14]]]],[[[28,[[38,[40]]]]],31],[31,41],[[31,[15,[14]]],32],[[32,[28,[[38,[37]]]]],31],[[31,13],6],[[32,13],6],[[]],[[]],[[],6],[[],6],[[],6],[[],6],[[],17],[[],17],[[]],[[]],0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[34,34],[42,42],[35,35],[[]],[[]],[[]],[[],35],[4],[4],[4],[4],[4],[4],[4],[4],[5,[[6,[34]]]],[5,[[6,[42]]]],[5,[[6,[35]]]],[4],[4],[4],[4],[[34,34],7],[[43,43],7],[[],7],[[34,8],9],[[43,8],9],[[43,8],9],[[]],[[[44,[14]]],34],[[]],[[]],[[]],[[[28,[33]]],[[6,[35,43]]]],[[],4],[[],4],[[],4],[[],4],[[]],[[]],[[]],[[]],[[35,[28,[4]]],42],[36],[35,34],[[34,13],6],[[42,13],6],[[35,13],6],[34,[[44,[14]]]],[[]],[[]],[[]],[[],39],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],17],[[],17],[[],17],[[],17],[[42,34,[28,[4]],[28,[33]]],[[6,[43]]]],[[]],[[]],[[]],[[]],0,0,0,0,0,[[]],[[]],[[]],[[]],[4],[4],[4],[4],[5,[[6,[45]]]],[5,[[6,[46]]]],[4],[4],[[45,8],9],[[46,8],9],[[]],[[]],0,[[],4],[[],4],[[]],[[]],[[45,13],6],[[46,13],6],0,[[],6],[[],6],[[],6],[[],6],[[],17],[[],17],[[]],[[]],0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[47,[[6,[48,49]]]],[4],[4],[4],[4],[4],[4],[4],[4],[5,[[6,[48]]]],[4],[4],[4],[4],[[47,8],[[6,[30]]]],[[49,8],9],[[49,8],9],[[50,8],9],[[50,8],9],[[48,8],[[6,[30]]]],[[]],[[]],[[]],[[]],[[],4],[[],4],[[],4],[[],4],[[]],[[]],[[]],[[]],[36],[36],[[47,21],[[6,[47,49]]]],[[48,13],6],[[],39],[[],39],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],17],[[],17],[[],17],[[],17],[[48,51],[[6,[50]]]],[[]],[[]],[[]],[[]],0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[52,47],[53,53],[51,51],[[]],[[]],[52,19],[54,52],[4],[4],[4],[4],[4],[4],[4],[4],[4],[4],[4],[4],[4],[4],[5,[[6,[52]]]],[5,[[6,[53]]]],[5,[[6,[51]]]],[5,[[6,[55]]]],[5,[[6,[54]]]],[4],[4],[4],[4],[4],[4],[4],[51,56],[51,[[44,[14]]]],[[52,8],[[6,[30]]]],[[57,8],9],[[57,8],9],[[53,8],9],[[58,8],9],[[58,8],9],[[51,8],9],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[53,33],[52,[[60,[59]]]],[55,[[60,[59]]]],0,[51,53],[55,51],[54,51],0,[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[51,34],[[[60,[59]],61,61,19],52],[[16,62,33],53],[[[44,[14]],34,63,63,53],51],[[51,[12,[1]],[60,[59]]],55],[[51,[12,[1]],52],54],[36],[36],[51,63],[52,61],[51,63],[52,61],[[52,13],6],[[53,13],6],[[51,13],6],[[55,13],6],[[54,13],6],[53,62],[54,55],[54,[[12,[1]]]],0,[53,16],[[]],[[]],[[],39],[[],39],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17],[[53,[60,[59]]],[[6,[57]]]],[[51,16,62,34,[44,[14]],[60,[59]]],[[6,[58]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],0,0,0,0,0,0,[64,[[26,[4]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[61,61],[65,65],[29,29],[[]],[[]],[[]],[61,66],[64,[[28,[14]]]],[65,[[28,[14]]]],[[],61],[[],65],[4],[4],[4],[4],[4],[4],[4],[4],[5,[[6,[61]]]],[5,[[6,[29]]]],[4],[4],[4],[4],[[65,65],7],[[29,29],7],[[],7],[[61,8],9],[[64,8],9],[[65,8],9],[[29,8],9],[[]],[[]],[[]],[[]],[[[26,[4]],29],67],[[29,11]],[[],4],[[],4],[[],4],[[],4],[[]],[[]],[[]],[[]],[65,[[15,[14]]]],[[[27,[66]]],61],[[4,[15,[65]]],64],[65,[[68,[4]]]],[64,[[26,[4]]]],[[61,13],6],[[29,13],6],[[64,14]],[[]],[[]],[[]],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],6],[[],17],[[],17],[[],17],[[],17],[[]],[[]],[[]],[[]]],"c":[],"p":[[4,"Signature"],[3,"EncodingId"],[4,"Ordering"],[15,"usize"],[8,"Deserializer"],[4,"Result"],[15,"bool"],[3,"Formatter"],[6,"Result"],[6,"Signature"],[8,"Hasher"],[4,"Option"],[8,"Serializer"],[15,"u8"],[3,"Vec"],[15,"u64"],[3,"TypeId"],[3,"TranscriptCommitmentBuilder"],[3,"TranscriptCommitments"],[4,"TranscriptCommitmentBuilderError"],[3,"CommitmentId"],[3,"CommitmentInfo"],[4,"Commitment"],[4,"CommitmentKind"],[4,"CommitmentOpening"],[3,"RangeSet"],[8,"Into"],[15,"slice"],[4,"Direction"],[3,"Error"],[3,"Blake3Commitment"],[3,"Blake3Opening"],[3,"Hash"],[3,"MerkleRoot"],[3,"MerkleTree"],[3,"Demand"],[3,"Full"],[4,"EncodedValue"],[3,"String"],[3,"Active"],[3,"Nonce"],[3,"MerkleProof"],[4,"MerkleError"],[15,"array"],[4,"TlsnMessage"],[3,"SignedSessionHeader"],[3,"SubstringsProofBuilder"],[3,"SubstringsProof"],[4,"SubstringsProofBuilderError"],[4,"SubstringsProofError"],[3,"SessionHeader"],[3,"SessionData"],[3,"HandshakeSummary"],[3,"NotarizedSession"],[3,"SessionProof"],[3,"ChaChaEncoder"],[4,"HandshakeVerifyError"],[4,"SessionHeaderVerifyError"],[3,"HandshakeData"],[3,"Decommitment"],[3,"Transcript"],[3,"PublicKey"],[15,"u32"],[3,"RedactedTranscript"],[3,"TranscriptSlice"],[3,"Bytes"],[8,"Iterator"],[3,"Range"]]},\
"tlsn_notary":{"doc":"The notary library","t":"NNNDDDDEENNFLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","n":["IOError","MpcError","MuxerError","Notary","NotaryBackgroundFut","NotaryConfig","NotaryConfigBuilder","NotaryConfigBuilderError","NotaryError","UninitializedField","ValidationError","bind_notary","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","build","builder","clone","clone","clone_into","clone_into","compat","compat","compat","compat","compat","compat","compat_mut","compat_mut","compat_mut","compat_mut","compat_mut","compat_mut","compat_ref","compat_ref","compat_ref","compat_ref","compat_ref","compat_ref","default","deref","deref","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","drop","drop","drop","drop","drop","drop","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from","from","from","id","id","init","init","init","init","init","init","into","into","into","into","into","into","into_future","max_transcript_size","max_transcript_size","new","notarize","poll","provide","provide","source","to_owned","to_owned","to_string","to_string","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_poll","type_id","type_id","type_id","type_id","type_id","type_id","vzip","vzip","vzip","vzip","vzip","vzip"],"q":[[0,"tlsn_notary"]],"d":["","","","A Notary instance.","A future that performs background processing for the …","Configuration for the <code>Notary</code>","Builder for <code>NotaryConfig</code>.","Error type for NotaryConfigBuilder","An error that can occur during notarization.","Uninitialized field","Custom validation error","Helper function to bind a new notary to the given socket.","","","","","","","","","","","","","Builds a new <code>NotaryConfig</code>.","Create a new builder for <code>NotaryConfig</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","Returns the argument unchanged.","","","","","","","Returns the ID of the notarization session.","","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","Get the maximum transcript size in bytes.","Maximum transcript size in bytes","Create a new <code>Notary</code>.","Runs the notary instance.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[6,6,6,0,0,0,0,0,0,9,9,0,30,26,1,8,9,6,30,26,1,8,9,6,8,1,1,8,1,8,30,26,1,8,9,6,30,26,1,8,9,6,30,26,1,8,9,6,8,30,26,1,8,9,6,30,26,1,8,9,6,30,26,1,8,9,6,1,9,9,6,6,30,26,1,8,9,9,9,6,6,6,6,6,6,6,1,8,30,26,1,8,9,6,30,26,1,8,9,6,30,1,8,26,26,30,9,6,6,1,8,9,6,30,26,1,8,9,6,30,26,1,8,9,6,30,30,26,1,8,9,6,30,26,1,8,9,6],"f":[0,0,0,0,0,0,0,0,0,0,0,[[1,[0,[2,3,4,5]]],[[7,[6]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[8,[[7,[1,9]]]],[[],8],[1,1],[8,8],[[]],[[]],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],8],[11],[11],[11],[11],[11],[11],[11],[11],[11],[11],[11],[11],[11],[11],[11],[11],[11],[11],[[1,12],13],[[9,12],13],[[9,12],13],[[6,12],13],[[6,12],13],[[]],[[]],[[]],[[]],[[]],[14,9],[15,9],[[]],[16,6],[17,6],[18,6],[19,6],[20,6],[21,6],[1,22],[[8,[23,[15]]],8],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[1,11],[[8,11],8],[[1,[25,[24]]],26],[[26,[28,[[23,[27]]]]],[[7,[29,6]]]],[[[31,[30]],32],33],[34],[34],[6,[[36,[35]]]],[[]],[[]],[[],15],[[],15],[[],7],[[],7],[[],7],[[],7],[[],7],[[],7],[[],7],[[],7],[[],7],[[],7],[[],7],[[],7],[[31,32],33],[[],37],[[],37],[[],37],[[],37],[[],37],[[],37],[[]],[[]],[[]],[[]],[[]],[[]]],"c":[],"p":[[3,"NotaryConfig"],[8,"AsyncWrite"],[8,"AsyncRead"],[8,"Send"],[8,"Unpin"],[4,"NotaryError"],[4,"Result"],[3,"NotaryConfigBuilder"],[4,"NotaryConfigBuilderError"],[3,"Compat"],[15,"usize"],[3,"Formatter"],[6,"Result"],[3,"UninitializedFieldError"],[3,"String"],[4,"SenderActorError"],[4,"MuxerError"],[3,"Error"],[4,"OTError"],[4,"ReceiverActorError"],[4,"MpcTlsError"],[15,"str"],[8,"Into"],[3,"UidYamuxControl"],[3,"BincodeMux"],[3,"Notary"],[4,"Signature"],[8,"Signer"],[3,"SessionHeader"],[3,"NotaryBackgroundFut"],[3,"Pin"],[3,"Context"],[4,"Poll"],[3,"Demand"],[8,"Error"],[4,"Option"],[3,"TypeId"]]},\
"tlsn_prover":{"doc":"The prover library","t":"NDNNNDNNNNDDDEDINDNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","n":["AsyncClientError","Closed","CommitmentBuilder","CommitmentError","IOError","Initialized","InvalidServerName","MpcError","MuxerError","NotarizationError","Notarize","Prover","ProverConfig","ProverError","ProverFuture","ProverState","ServerNoCloseNotify","Setup","TlsClientError","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","builder","clone","clone_into","commitment_builder","compat","compat","compat","compat","compat","compat","compat","compat","compat_mut","compat_mut","compat_mut","compat_mut","compat_mut","compat_mut","compat_mut","compat_mut","compat_ref","compat_ref","compat_ref","compat_ref","compat_ref","compat_ref","compat_ref","compat_ref","connect","deref","deref","deref","deref","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","drop","drop","drop","drop","drop","drop","drop","drop","finalize","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","init","init","init","init","init","init","init","init","into","into","into","into","into","into","into","into","into_future","max_transcript_size","new","poll","provide","recv_transcript","recv_transcript","sent_transcript","sent_transcript","server_dns","setup","source","start_notarize","to_owned","to_string","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_poll","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip"],"q":[[0,"tlsn_prover"]],"d":["","State after the TLS connection has been closed.","","","","Entry state","","","","","The state for the Prover during notarization","A prover instance.","Configuration for the prover","An error that can occur during proving.","Prover future which must be polled for the TLS connection …","","","State after MPC setup has completed.","","","","","","","","","","","","","","","","","","Create a new builder for <code>ProverConfig</code>.","","","Returns the transcript commitment builder","","","","","","","","","","","","","","","","","","","","","","","","","Connects to the server using the provided socket.","","","","","","","","","","","","","","","","","","","","","","","","","Finalize the notarization returning a <code>NotarizedSession</code>","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","Get the maximum transcript size in bytes.","Creates a new prover.","","","Returns the transcript of the received responses","Returns the transcript of the received responses","Returns the transcript of the sent requests","Returns the transcript of the sent requests","Returns the server DNS name.","Set up the prover.","","Starts notarization of the TLS session.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[11,0,11,11,11,0,11,11,11,11,0,0,0,0,0,0,11,0,11,15,6,18,2,33,1,11,3,15,6,18,2,33,1,11,3,1,1,1,3,15,6,18,2,33,1,11,3,15,6,18,2,33,1,11,3,15,6,18,2,33,1,11,3,3,15,6,18,2,33,1,11,3,15,6,18,2,33,1,11,3,15,6,18,2,33,1,11,3,3,15,6,18,2,1,11,11,3,15,6,18,2,2,33,1,11,11,11,11,11,11,11,11,11,11,11,11,3,15,6,18,2,33,1,11,3,15,6,18,2,33,1,11,3,33,1,3,33,11,3,3,3,3,1,3,11,3,1,11,15,6,18,2,33,1,11,3,15,6,18,2,33,1,11,3,33,15,6,18,2,33,1,11,3,15,6,18,2,33,1,11,3],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],0,[1,1],[[]],[[[3,[2]]],4],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[[3,[6]],[0,[7,8,9,10]]],[[12,[11]]]],[13],[13],[13],[13],[13],[13],[13],[13],[13],[13],[13],[13],[13],[13],[13],[13],[13],[13],[13],[13],[13],[13],[13],[13],[[[3,[2]]],[[12,[14,11]]]],[[15,16],[[12,[17]]]],[[6,16],[[12,[17]]]],[[18,16],[[12,[17]]]],[[2,16],[[12,[17]]]],[[1,16],19],[[11,16],19],[[11,16],19],[[[3,[[0,[20,21]]]],16],19],[[]],[[]],[[]],[[]],[18,2],[[]],[[]],[22,11],[23,11],[24,11],[25,11],[26,11],[27,11],[28,11],[29,11],[30,11],[31,11],[32,11],[[]],[[]],[[],13],[[],13],[[],13],[[],13],[[],13],[[],13],[[],13],[[],13],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[1,13],[1,[[3,[15]]]],[[[34,[33]],35],36],[37],[[[3,[18]]],38],[[[3,[2]]],38],[[[3,[18]]],38],[[[3,[2]]],38],[1,39],[[[3,[15]],[0,[7,8,9,10]]],[[12,[[3,[6]],11]]]],[11,[[41,[40]]]],[[[3,[18]]],[[3,[2]]]],[[]],[[],42],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[34,35],36],[[],43],[[],43],[[],43],[[],43],[[],43],[[],43],[[],43],[[],43],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]]],"c":[],"p":[[3,"ProverConfig"],[3,"Notarize"],[3,"Prover"],[3,"TranscriptCommitmentBuilder"],[3,"Compat"],[3,"Setup"],[8,"AsyncWrite"],[8,"AsyncRead"],[8,"Send"],[8,"Unpin"],[4,"ProverError"],[4,"Result"],[15,"usize"],[3,"NotarizedSession"],[3,"Initialized"],[3,"Formatter"],[3,"Error"],[3,"Closed"],[6,"Result"],[8,"Debug"],[8,"ProverState"],[4,"TranscriptCommitmentBuilderError"],[4,"SenderActorError"],[3,"InvalidDnsNameError"],[4,"MuxerError"],[4,"Error"],[4,"MerkleError"],[4,"ConnectionError"],[4,"OTError"],[3,"Error"],[4,"MpcTlsError"],[4,"ReceiverActorError"],[3,"ProverFuture"],[3,"Pin"],[3,"Context"],[4,"Poll"],[3,"Demand"],[3,"Transcript"],[15,"str"],[8,"Error"],[4,"Option"],[3,"String"],[3,"TypeId"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
