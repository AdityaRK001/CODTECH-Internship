require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const SEPOLIA_RPC = process.env.SEPOLIA_RPC;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const GANACHE_PRIVATE_KEY = process.env.GANACHE_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.20",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },

    ganache: {
      url: "http://127.0.0.1:7545",
      chainId: 1337,
      accounts: GANACHE_PRIVATE_KEY ? [GANACHE_PRIVATE_KEY] : [],
    },

    ...(SEPOLIA_RPC && PRIVATE_KEY
      ? {
          sepolia: {
            url: SEPOLIA_RPC,
            accounts: [PRIVATE_KEY],
          },
        }
      : {}),
  },
};
