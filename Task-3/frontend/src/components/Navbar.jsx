export default function Navbar({ connect, account }) {
  return (
    <div className="navbar">
      <h2>DeFi Lending & Borrowing</h2>
      <button onClick={connect}>
        {account ? account.slice(0, 6) + "..." : "Connect"}
      </button>
    </div>
  );
}
