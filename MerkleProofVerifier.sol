// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract MerkleProofVerifier is Ownable {
    bytes32 public merkleRoot;

    // Function to set Merkle root, restricted to the contract owner
    function setMerkleRoot(bytes32 _merkleRoot) external onlyOwner {
        merkleRoot = _merkleRoot;
    }

    // Verify if a transaction hash is part of the Merkle tree
    function verifyTransaction(bytes32 transactionHash, bytes32[] calldata proof) external view returns (bool) {
        return MerkleProof.verify(proof, merkleRoot, transactionHash);
    }
}
