it("should return false for empty proof", async function () {
    const result = await MerkleProofVerifier.verifyTransaction(txHashBytes, []);
    expect(result).to.be.false;
});

it("should return false for malformed proof", async function () {
    const malformedProof = ["0x1234567890abcdef"];
    const result = await MerkleProofVerifier.verifyTransaction(txHashBytes, malformedProof);
    expect(result).to.be.false;
});
