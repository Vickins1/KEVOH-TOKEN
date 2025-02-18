require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

if (!PRIVATE_KEY) {
  console.error("Private key not set in .env file!");
  process.exit(1); 
}


module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.28" },
      { version: "0.8.20" },
      { version: "0.8.19" }
    ]
  },
  networks: {
    hardhat: {},
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [PRIVATE_KEY],
      chainId: 97,
      timeout: 30000,
    },
    bscMainnet: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: [PRIVATE_KEY],
      chainId: 56,
      timeout: 30000,
    }
  }
};
