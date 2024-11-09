import React, { useState } from 'react';
import { ethers } from 'ethers';
import MerkleProofVerifierABI from './MerkleProofVerifierABI.json';

const contractAddress = "YOUR_SMART_CONTRACT_ADDRESS";
const provider = new ethers.JsonRpcProvider("YOUR_INFURA_OR_ALCHEMY_ENDPOINT");
const signer = provider.getSigner();

const MerkleProofVerifier = new ethers.Contract(contractAddress, MerkleProofVerifierABI, signer);

function App() {
    const [transactionHash, setTransactionHash] = useState("");
    const [proof, setProof] = useState([]);
    const [result, setResult] = useState(null);

    const handleVerify = async () => {
        const proofArray = proof.split(',').map(p => '0x' + p.trim());
        const txHashBytes = ethers.utils.keccak256(transactionHash);

        try {
            const isValid = await MerkleProofVerifier.verifyTransaction(txHashBytes, proofArray);
            setResult(isValid ? "Transaction is included in the block." : "Transaction is not included.");
        } catch (error) {
            console.error("Verification error:", error);
        }
    };

    return (
        <div>
            <h1>Merkle Proof Verification</h1>
            <input type="text" placeholder="Transaction Hash" onChange={(e) => setTransactionHash(e.target.value)} />
            <textarea placeholder="Merkle Proof (comma-separated)" onChange={(e) => setProof(e.target.value)} />
            <button onClick={handleVerify}>Verify Transaction</button>
            {result && <p>{result}</p>}
        </div>
    );
}

export default App;
