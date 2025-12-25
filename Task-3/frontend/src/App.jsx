import { useState } from "react";
import { ethers } from "ethers";
import abi from "./abi/DeFiLending.json";
import { CONTRACT_ADDRESS } from "./config";

import Navbar from "./components/Navbar";
import LendBox from "./components/LendBox";
import BorrowBox from "./components/BorrowBox";
import HistoryBox from "./components/HistoryBox";

export default function App() {
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  async function connect() {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }
    const prov = new ethers.BrowserProvider(window.ethereum);
    const sign = await prov.getSigner();
    const cont = new ethers.Contract(CONTRACT_ADDRESS, abi.abi, sign);

    setProvider(prov);
    setSigner(sign);
    setContract(cont);
    alert("Wallet connected!");
  }

  async function lend(val) {
    if (!contract) return alert("Connect wallet first!");
    const tx = await contract.lend({ value: ethers.parseEther(val) });
    await tx.wait();
    alert("Lend successful!");
  }

  async function borrow(val) {
    if (!contract) return alert("Connect wallet first!");
    const tx = await contract.borrow(ethers.parseEther(val));
    await tx.wait();
    alert("Borrow successful!");
  }

  return (
    <>
      <Navbar connect={connect} />
      <LendBox lend={lend} />
      <BorrowBox borrow={borrow} />
      <HistoryBox history={[]} />
    </>
  );
}
