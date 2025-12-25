const main = async () => {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  const balance = await deployer.getBalance();
  console.log("Deployer balance:", balance.toString());

  const DeFi = await ethers.getContractFactory("DeFiLending");
  console.log("Deploying DeFiLending contract...");
  
  const contract = await DeFi.deploy();
  await contract.waitForDeployment();

  console.log("DeFi Contract deployed at:", await contract.getAddress());
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error deploying contract:", error);
    process.exit(1);
  });
