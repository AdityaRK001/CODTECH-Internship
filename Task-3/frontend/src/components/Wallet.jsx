import { ethers } from "ethers";
import ABI from "../abi/LendingBorrowing.json";
import { CONTRACTS } from "../config";

/* ---------------- CONNECT WALLET ---------------- */
export async function connectWallet(setAccount, setProvider) {
  if (!window.ethereum) {
    alert("MetaMask not found");
    return;
  }

  const provider = new ethers.BrowserProvider(window.ethereum);

  // 🔥 FORCE NETWORK SWITCH
  await window.ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: "0x7A69" }], // 31337
  });

  const accounts = await provider.send("eth_requestAccounts", []);
  setAccount(accounts[0]);
  setProvider(provider);
}

/* ---------------- DISCONNECT ---------------- */
export function disconnectWallet(setAccount, setProvider) {
  setAccount(null);
  setProvider(null);
}

/* ---------------- EXECUTE TRANSACTION ---------------- */
export async function executeTx(type, amount, provider, network, log) {
  try {
    if (!provider) throw new Error("Wallet not connected");

    const signer = await provider.getSigner();
    const address = CONTRACTS[network].address;

    const contract = new ethers.Contract(address, ABI, signer);

    let tx;

    if (type === "Deposit") {
      tx = await contract.deposit({
        value: ethers.parseEther(amount),
      });
    }

    if (type === "Borrow") {
      tx = await contract.borrow(ethers.parseEther(amount));
    }

    if (type === "Repay") {
      tx = await contract.repay({
        value: ethers.parseEther(amount),
      });
    }

    if (type === "Withdraw") {
      tx = await contract.withdraw(ethers.parseEther(amount));
    }

    await tx.wait();
    log(type, amount, "SUCCESS", tx.hash);
  } catch (err) {
    console.error(err);
    log(type, amount, "FAILED", err.reason || err.message);
  }
}
