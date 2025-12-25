export default function LendBox({ lend }) {
  return (
    <div className="box">
      <h3>Lend ETH</h3>
      <input id="lend" type="number" placeholder="ETH amount" />
      <button onClick={() => lend(document.getElementById("lend").value)}>
        Submit
      </button>
    </div>
  );
}
