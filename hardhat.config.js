//let secret = require("./secret")

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-tracer");
require('@nomiclabs/hardhat-ethers');
require('dotenv').config()


const { API_URL, PRIVATE_KEY, ETHERSCAN_KEY} = process.env;


module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1
      }
    }
  },
  networks: {
  
    rinkeby: {
      url: "https://speedy-nodes-nyc.moralis.io/26e50ab044cfb048e9442a7f/eth/rinkeby",
      accounts: [process.env.PRIVATE_KEY]
      
    },
    mainnet: {
      url: "https://speedy-nodes-nyc.moralis.io/26e50ab044cfb048e9442a7f/bsc/mainnet",
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  etherscan: {
      apiKey: "ZUURYZQ7A52XFECR3GJK9QWPV3273TJNFW"
  }
};