import { useState } from "react";
import Navbar from "./components/Navbar";
import NetworkSelector from "./components/NetworkSelector";
import Deposit from "./components/Deposit";
import Borrow from "./components/Borrow";
import Repay from "./components/Repay";
import Withdraw from "./components/Withdraw";
import History from "./components/History";
import { connectWallet, disconnectWallet, executeTx } from "./components/Wallet";
import "./App.css";

export default function App() {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [network, setNetwork] = useState("local");
  const [history, setHistory] = useState([]);

  const log = (type, amount, status, tx) =>
    setHistory((h) => [{ type, amount, status, tx }, ...h]);

  return (
    <>
      <Navbar
        account={account}
        onConnect={() => connectWallet(setAccount, setProvider)}
        onDisconnect={() => disconnectWallet(setAccount, setProvider)}
      >
        <NetworkSelector value={network} onChange={setNetwork} />
      </Navbar>

      <div className="dashboard">
        <Deposit onSubmit={(a) => executeTx("Deposit", a, provider, network, log)} />
        <Borrow onSubmit={(a) => executeTx("Borrow", a, provider, network, log)} />
        <Repay onSubmit={(a) => executeTx("Repay", a, provider, network, log)} />
        <Withdraw onSubmit={(a) => executeTx("Withdraw", a, provider, network, log)} />
      </div>

      <History history={history} />
    </>
  );
}
