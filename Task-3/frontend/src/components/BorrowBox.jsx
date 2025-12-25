export default function BorrowBox({ borrow }) {
  return (
    <div className="box">
      <h3>Borrow ETH</h3>
      <input id="borrow" type="number" placeholder="ETH amount" />
      <button onClick={() => borrow(document.getElementById("borrow").value)}>
        Borrow
      </button>
    </div>
  );
}
