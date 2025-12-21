this Projrct is made in hardhat 2 

# CODTECH-Internship Task-1
This repository contains a simple smart contract project developed using Hardhat. The project includes a basic smart contract, deployment scripts, and test cases.

# Output
OutPut of ther task-1 is stored in the 'output' folder.

# HOW TO RUN THE PROJECT
This project is not has any keys so you can directly run the project in github codespace or you can clone the repository and run it in your local machine.

    -npx hardhat compile
        Compiles the smart contracts

    -npx hardhat node 
        Starts local blockchain
        Creates 20 test accounts
        Each account has 10,000 ETH (fake)
    after start local blockchain don't close the terminal and open another terminal and run the below command to deploy the contract

    -npx hardhat run scripts/deploy.js --network localhost
        Deploys the contract to the local blockchain

    -npx hardhat npx hardhat console --network localhost
        Opens Hardhat console to interact with the deployed contract

        # Load accounts
            const [owner, user1] = await ethers.getSigners();

        # Check owner address
            owner.address

        # Load deployed token
            const token = await ethers.getContractAt(
              "SimpleToken",
              "0x5FbDB2315678afecb367f032d93F642f64180aa3");
        
        # Read token name
            await token.name();

        # Read token symbol
            await token.symbol();

        # Check owner balance
            await token.balanceOf(owner.address);
            for converting readable format
                ethers.utils.formatEther(
                await token.balanceOf(owner.address));


    