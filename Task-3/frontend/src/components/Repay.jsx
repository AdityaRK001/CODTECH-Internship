import { useState } from "react";

export default function Repay({ onSubmit }) {
  const [amount, setAmount] = useState("");

  return (
    <div className="card">
      <h3>Repay</h3>
      <input
        placeholder="ETH amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => onSubmit(amount)}>
        Repay ETH
      </button>
    </div>
  );
}
