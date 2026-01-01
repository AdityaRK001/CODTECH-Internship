import { useState } from "react";

export default function Withdraw({ onSubmit }) {
  const [amount, setAmount] = useState("");

  return (
    <div className="card">
      <h3>Withdraw</h3>
      <input
        placeholder="ETH amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => onSubmit(amount)}>
        Withdraw ETH
      </button>
    </div>
  );
}
