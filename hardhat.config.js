require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
  networks: {
    sepolia: {
      url: process.env.INFURA_SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
