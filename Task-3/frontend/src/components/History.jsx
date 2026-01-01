import { useState } from "react";

export default function History({ history }) {
  const [showTx, setShowTx] = useState(false);

  return (
    <div className="history">
      <div className="history-header">
        <h3>Transaction History</h3>
        <button className="eye-btn" onClick={() => setShowTx(!showTx)}>
          👁
        </button>
      </div>

      {history.length === 0 && (
        <p className="muted">No transactions yet</p>
      )}

      {history.map((h, i) => (
        <div key={i} className="history-item">
          <div>
            <strong>{h.type}</strong>
            <div className="muted">
              {showTx ? h.tx : "**************"}
            </div>
          </div>

          <div className="right">
            <div>{h.amount} ETH</div>
            <div className={h.status === "SUCCESS" ? "success" : "failed"}>
              {h.status}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
