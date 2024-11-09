///Code Sample (JavaScript with Web3.js or Ethers.js):

const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider("YOUR_INFURA_OR_ALCHEMY_ENDPOINT");

async function fetchTransactions(blockNumber) {
    const block = await provider.getBlockWithTransactions(blockNumber);
    const transactions = block.transactions.map(tx => tx.hash);
    return transactions;
}
