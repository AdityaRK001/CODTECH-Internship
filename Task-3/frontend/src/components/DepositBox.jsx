import { useState } from "react";

export default function DepositBox({ deposit }) {
  const [amount, setAmount] = useState("");

  return (
    <div className="box">
      <h3>Deposit ETH</h3>

      <input
        type="number"
        placeholder="Only number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={() => deposit(amount)}>Submit</button>
    </div>
  );
}
