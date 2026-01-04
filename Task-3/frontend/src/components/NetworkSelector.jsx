export default function NetworkSelector({ value, onChange }) {
  return (
    <select
      className="network-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="ganache">Ganache</option>
      <option value="hardhat">Hardhat (Localhost)</option>
      <option value="sepolia" disabled>
        Sepolia (Coming Soon)
      </option>
    </select>
  );
}
