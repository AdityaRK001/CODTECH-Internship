# for token and key in .env file

    in this format:
    SEPOLIA_URL=https://eth-sepolia.g.alchemy.com/v2/your-api-key
    PRIVATE_KEY=your-metamask-private-key
    
    you can get an API key by signing up on Alchemy and creating a new app for the Sepolia network.

# in cmd prompt, run the following command to deploy the contract:
    npx hardhat run scripts/deploy.js --network sepolia
    Make sure you have enough Sepolia ETH in your wallet to cover the deployment gas fees. You can get Sepolia ETH from a faucet if needed.

# Folder Structure
    Task-2/
    │
    ├─ contracts/
    │   └─ MyToken.sol
    │
    ├─ scripts/
    │   └─ deploy.js
    │
    ├─ test/
    │   └─ MyToken.test.js 
    │
    ├─ hardhat.config.js
    ├─ package.json
    ├─ package-lock.json
    ├─ .env
    ├─ .gitignore
    └─ README.md

# OutPut
    OutPut of ther task-2 is stored in the 'Output' folder.

# Task-2: Smart Contract Deployment on Sepolia Test Network

    # Compile Contract
        -npx hardhat compile
    
    # Start Local Blockchain
        -npx hardhat node

    # Deploy Token                                                     * new tarminel*
        -npx hardhat run scripts/deploy.js --network localhost     * for local blockchain *
        -npx hardhat run scripts/deploy.js --network sepolia     * for sepolia test network *

    # Hardhat Console
        -npx hardhat console --network localhost
        -npx hardhat console --network sepolia

    # console intractions                                        * this is for localhost or sepolia networks*

        # Token info
            await token.name()
            await token.symbol()
            await token.decimals()

        # Check addresses
            owner.address
            user1.address

        # Load accounts
            const [owner, user1, user2] = await ethers.getSigners();

        # Load deployed token
            const Token = await ethers.getContractFactory("MyToken", owner);

        # check balances
            #ganral format
                await token.balanceOf(address); 

            # Owner balance
                await token.balanceOf(owner.address);    or    ethers.utils.formatEther(await token.balanceOf(owner.address));
            
            # User1 balance
                await token.balanceOf(user1.address);    or    ethers.utils.formatEther(await token.balanceOf(user1.address));

        # Transfer tokens
            await token.connect(owner).transfer(user1.address, ethers.utils.parseEther("1000"));




    