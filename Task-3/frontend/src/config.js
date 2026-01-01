export const CONTRACTS = {
  local: {
    chainId: 31337,
    address: import.meta.env.VITE_LOCAL_CONTRACT,
  },
  sepolia: {
    chainId: 11155111,
    address: import.meta.env.VITE_SEPOLIA_CONTRACT,
  },
};
