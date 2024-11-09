///Gas Optimization
const estimatedGas = await MerkleProofVerifier.estimateGas.verifyTransaction(txHashBytes, proofArray);
console.log("Estimated gas cost for verifyTransaction:", estimatedGas.toString());
