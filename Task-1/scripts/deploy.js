async function main() {
  const Token = await ethers.getContractFactory("SimpleToken");
  const token = await Token.deploy(1000);

  await token.deployed();

  console.log("SimpleToken deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
