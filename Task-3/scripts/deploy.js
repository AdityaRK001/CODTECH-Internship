const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.deployContract("LendingBorrowing");
  await Contract.waitForDeployment();
  console.log("Deployed to:", await Contract.getAddress());
}

main();
