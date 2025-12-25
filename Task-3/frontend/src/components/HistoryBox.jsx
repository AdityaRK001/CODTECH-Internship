export default function HistoryBox({ history }) {
  return (
    <div className="box">
      <h3>History</h3>
      {history.map((h, i) => (
        <div key={i} className={h.success ? "success" : "failed"}>
          <b>{h.action}</b> – {Number(h.amount) / 1e18} ETH
          <details>
            <summary>👁 Tx ID</summary>
            {h.txId}
          </details>
        </div>
      ))}
    </div>
  );
}
