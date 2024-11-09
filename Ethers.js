///Code Sample (JavaScript with Web3.js or Ethers.js):

const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider("YOUR_INFURA_OR_ALCHEMY_ENDPOINT"); 
///I don't know why i couldn't able to fetch the blocknumber i mean a transaction from Sepolia or zkSync it's showing like ("to many request as well as time outed")///

async function fetchTransactions(blockNumber) {
    const block = await provider.getBlockWithTransactions(blockNumber);
    const transactions = block.transactions.map(tx => tx.hash);
    return transactions;
}
