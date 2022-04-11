require('dotenv').config();
const API_URL = process.env.API_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL)
const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
//console.log(JSON.stringify(contract.abi));

const contractAddress = "0xcfA1Ac824fFAa5F03944fF6f4c2ea48A93f8a01e";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);