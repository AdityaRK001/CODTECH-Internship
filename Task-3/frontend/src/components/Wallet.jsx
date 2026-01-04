import { ethers } from "ethers";
import LendingBorrowingArtifact from "../abi/LendingBorrowing.json"; // ✅ import full artifact
import { CONTRACTS } from "../config";

const ABI = LendingBorrowingArtifact.abi; // ✅ extract only ABI

/* --------------------------------------------------
   CONNECT WALLET
-------------------------------------------------- */
export async function connectWallet(setAccount, setProvider, network = "ganache") {
  try {
    if (!window.ethereum) {
      alert("MetaMask not found");
      return;
    }

    const netConfig = CONTRACTS[network];
    if (!netConfig) {
      alert("Unsupported network selected");
      return;
    }

    const chainHex = "0x" + netConfig.chainId.toString(16);

    // 🔁 Switch / Add Network
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chainHex }],
      });
    } catch (switchErr) {
      // If network not added
      if (switchErr.code === 4902) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: chainHex,
              chainName:
                network === "ganache"
                  ? "Ganache"
                  : network === "hardhat"
                  ? "Hardhat Localhost"
                  : "Sepolia",
              rpcUrls: [netConfig.rpc || ""],
              nativeCurrency: {
                name: "ETH",
                symbol: "ETH",
                decimals: 18,
              },
            },
          ],
        });
      } else {
        throw switchErr;
      }
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);

    setAccount(accounts[0]);
    setProvider(provider);
  } catch (err) {
    console.error("Connect error:", err);
    alert(err.message);
  }
}

/* --------------------------------------------------
   DISCONNECT WALLET
-------------------------------------------------- */
export function disconnectWallet(setAccount, setProvider) {
  setAccount(null);
  setProvider(null);
}

/* --------------------------------------------------
   EXECUTE TRANSACTION
-------------------------------------------------- */
export async function executeTx(type, amount, provider, network, log) {
  try {
    if (!provider) throw new Error("Wallet not connected");
    if (!amount || Number(amount) <= 0)
      throw new Error("Invalid amount");

    const netConfig = CONTRACTS[network];
    if (!netConfig?.address)
      throw new Error("Contract not deployed on this network");

    // 🔍 Verify network
    const currentNet = await provider.getNetwork();
    if (Number(currentNet.chainId) !== netConfig.chainId) {
      throw new Error("Wrong network selected in MetaMask");
    }

    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
      netConfig.address,
      ABI,   // ✅ pass only ABI array
      signer
    );

    let tx;

    switch (type) {
      case "Deposit":
        tx = await contract.deposit({
          value: ethers.parseEther(amount),
        });
        break;

      case "Borrow":
        tx = await contract.borrow(
          ethers.parseEther(amount)
        );
        break;

      case "Repay":
        tx = await contract.repay({
          value: ethers.parseEther(amount),
        });
        break;

      case "Withdraw":
        tx = await contract.withdraw(
          ethers.parseEther(amount)
        );
        break;

      default:
        throw new Error("Unknown transaction type");
    }

    // ⏳ WAIT FOR CONFIRMATION
    const receipt = await tx.wait();

    log(type, amount, "SUCCESS", receipt.hash);
  } catch (err) {
    console.error("TX Error:", err);
    log(
      type,
      amount,
      "FAILED",
      err.reason || err.message
    );
  }
}
