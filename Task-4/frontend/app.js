// ✅ USE YOUR DEPLOYED CONTRACT ADDRESS
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const abi = [
  "function setValue(uint256)",
  "function getValue() view returns (uint256)"
];

async function setValue() {
  await window.ethereum.request({ method: "eth_requestAccounts" });

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer);

  const value = document.getElementById("value").value;
  await contract.setValue(value);

  alert("Value stored on blockchain!");
}

async function getValue() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(contractAddress, abi, provider);

  const value = await contract.getValue();
  document.getElementById("result").innerText = value;
}
