// Example with Hardhat and Chai
describe("Access Control", function () {
    it("should allow only the owner to set the Merkle root", async function () {
        const [owner, otherAccount] = await ethers.getSigners();
        await expect(MerkleProofVerifier.connect(owner).setMerkleRoot(newMerkleRoot))
            .to.emit(MerkleProofVerifier, "MerkleRootSet");

        await expect(MerkleProofVerifier.connect(otherAccount).setMerkleRoot(newMerkleRoot))
            .to.be.revertedWith("Ownable: caller is not the owner");
    });
});
