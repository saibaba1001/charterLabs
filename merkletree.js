const { MerkleTree } = require('merkletreejs');
const crypto = require('crypto');
const hash = (data) => {
    return crypto.createHash('sha256').update(data).digest();
};
const transactions = [
    'tx1_hash',
    'tx2_hash',
    'tx3_hash',
    'tx4_hash',
];
const leaves = transactions.map(tx => hash(tx));
const tree = new MerkleTree(leaves, hash);
const root = tree.getRoot().toString('hex');
console.log("Merkle Root:", root);
const transactionToProof = 'tx2_hash';
const leafToProof = hash(transactionToProof);
const proof = tree.getProof(leafToProof).map(p => p.data.toString('hex'));
console.log("Merkle Proof for transaction:", transactionToProof);
console.log(proof);
const isValid = tree.verify(proof, leafToProof, root);
console.log("Is the proof valid?", isValid);
