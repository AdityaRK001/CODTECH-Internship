import { useState } from "react";

export default function Borrow({ onSubmit }) {
  const [amount, setAmount] = useState("");

  return (
    <div className="card">
      <h3>Borrow</h3>
      <input
        placeholder="ETH amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="silver" onClick={() => onSubmit(amount)}>
        Borrow ETH
      </button>
    </div>
  );
}
