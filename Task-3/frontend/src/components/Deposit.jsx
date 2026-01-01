import { useState } from "react";

export default function Deposit({ onSubmit }) {
  const [amount, setAmount] = useState("");

  return (
    <div className="card">
      <h3>Deposit</h3>
      <input
        placeholder="ETH amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="gold" onClick={() => onSubmit(amount)}>
        Deposit ETH
      </button>
    </div>
  );
}
