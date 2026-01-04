export const CONTRACTS = {
  hardhat: {
    chainId: 31337,
    address: import.meta.env.VITE_HARDHAT_CONTRACT,
    rpc: "http://127.0.0.1:8545",
  },

  ganache: {
    chainId: 1337,
    address: import.meta.env.VITE_GANACHE_CONTRACT,
    rpc: "http://127.0.0.1:7545",
  },

  sepolia: {
    chainId: 11155111,
    address: import.meta.env.VITE_SEPOLIA_CONTRACT,
  },
};
