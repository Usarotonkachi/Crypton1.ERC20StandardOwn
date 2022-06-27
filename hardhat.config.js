let secret = require("./secret")

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-tracer");
require('@nomiclabs/hardhat-ethers');


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
    testnet: {
      url: secret.url,
      accounts: [secret.key],
      
    },
    rinkeby: {
      url: "https://speedy-nodes-nyc.moralis.io/26e50ab044cfb048e9442a7f/eth/rinkeby",
      accounts: [secret.key]
      
    },
    mainnet: {
      url: "https://speedy-nodes-nyc.moralis.io/26e50ab044cfb048e9442a7f/bsc/mainnet",
      accounts: [secret.key],
    }
  },
  etherscan: {
      apiKey: "ZUURYZQ7A52XFECR3GJK9QWPV3273TJNFW"
  }
};