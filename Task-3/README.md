# CODTECH-Task-3 Structure
    Task-3/
    │
    ├──artifacts/
    ├── cache/
    ├── contracts/
    │   └── LendingBorrowing.sol
    │
    ├── modules/
    ├── node_modules/
    ├── scripts/
    │   └── deploy.js
    │
    ├── test/   
    │
    ├── .env
    ├── .gitignore
    ├── hardhat.config.js
    ├── package-lock.json
    ├── package.json
    ├── README.md
    │   
    └── frontend/
        │
        ├── node_modules/
        ├── public/
        │   └── vite.svg
        │
        ├── src/
        │   │
        │   ├── abi/
        │   │   └── LendingBorrowing.json
        │   │
        │   ├── assets/ 
        │   │   └── logo.png
        │   │
        │   ├── components/
        │   │   ├── Borrow.jsx
        │   │   ├── Deposit.jsx
        │   │   ├── History.jsx
        │   │   ├── Navbar.jsx
        │   │   ├── NetworkSelector.jsx
        │   │   ├── Repay.jsx
        │   │   └── Wallat.jsx
        │   │   └── Withdraw.jsx
        │   │
        │   ├── .env 
        │   ├── App.css
        │   ├── App.jsx
        │   ├── config.js
        │   ├── index.css
        │   └── main.jsx
        │
        ├── .gitignore
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── README.md 
        └── vite.config.js

# How to create this Project Structure

    # Create Project Folder
        - Task-3
        - Task-3/frontend

    # Initialize Node and Hardhat
        - npm init -y                               # to initialize node project
        - npm install --save-dev hardhat            # to install hardhat (this)
        
        - npm install --save-dev hardhat@2.22.1
        - npm install --save-dev @nomicfoundation/hardhat-toolbox
        - npm install @openzeppelin/contracts dotenv

        - npx hardhat
            - create a basic sample project
            - press enter to all questions
            
        - npx hardhat compile

    # create frontend using Vite
        - node -v                   # to check node is installed        Node.js v18+ recommended
        - npm -v                    # to check npm is installed         NPM v9+ recommended

        - cd frontend
        - npm create vite@latest         # to initialize vite project
            - select react                # select react framework

        # Install Frontend Dependencies
            - npm install
            - npm install ethers
        
        - npm run dev
            - to run the frontend application on vite
            - Local: http://localhost:5173/

    # install additional tools
        - Install Metamask Extension in your Browser
        - Install Ganache GUI Application

# How to run With LocalHost

    Tarminal 1: Deploy Smart Contract               * don't close Terminal nor cammand when you want to run program *
        
        cd CODTECH-Internship/Task-3
            -npx hardhat node                     # it's make a local blockchain user (20 users)    (when you whant to run)
                Network: http://127.0.0.1:8545

    Terminal 2: Deploy Frontend Application          * don't close Terminal nor cammand when you want to run program *

        cd CODTECH-Internship/Task-3/frontend
            -npm install                          # to install all dependencies                         (only first time)
            -npm run dev                         # to run the frontend application on vite           (when you whant to run)
                
    Terminal 3: Deploy Smart Contract on Local Blockchain  * don't close Terminal nor cammand when you want to run program *

        cd CODTECH-Internship/Task-3
            -npx hardhat run scripts/deploy.js --network localhost   # to deploy smart contract on local blockchain
                Output example:
                    Deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
            
            -npx hardhat run scripts/deploy.js --network sepolia     # to deploy smart contract on sepolia testnet
                Output example:
                    Deployed to: 0xYourDeployedContractAddress

    # Note: use same account private key in .env localhost private key and metamask account impoert private key (use same account for both)

         metamask network setting for Hardhat Localhost:
                    Network Name: Hardhat Local 
                    New RPC URL: http://127.0.0.1:8545
                    Chain ID: 31337
                    Currency Symbol: ETH
                    Block Explorer URL: (leave blank)

        importing account in metamask from localhost private key, you will see same balance in metamask as in localhost account 10000 ETH           (go to top left cornner dropdownlist in metamask sidepannal > add wallet > import account > paste private key from localhost terminal(same key that you used in .env file))

# How to run With Ganache

    Run Ganache GUI Application         * don't close Ganache when you want to run program *

        - also cahnge .env GANACHE_PRIVATE_KEY to any one private key from ganache accounts (it will cahnge every time you restart ganache)

    Terminal 1: Deploy Frontend Application          * don't close Terminal nor cammand when you want to run program *

        cd CODTECH-Internship/Task-3/frontend
            -npm install                          # to install all dependencies                         (only first time)
            -npm run dev                         # to run the frontend application on vite           (when you whant to run)
    
    Terminal 2: Deploy Smart Contract on Ganache Blockchain  * don't close Terminal nor cammand when you want to run program *

        cd CODTECH-Internship/Task-3
            -npx hardhat run scripts/deploy.js --network ganache      # to deploy smart contract on ganache testnet
                Output example:
                    Deployed to: 0xYourDeployedContractAddress

                    - Then copy the deployed contract address and paste it in the .env file in frontend folder
                        VITE_GANACHE_CONTRACT=0xYourDeployedContractAddress

    # Note: Ganache is cahnge deploted address every time you run npx hardhat run scripts/deploy.js --network ganache, so after running it same until you run again. so copy that and use that address in frontend .env file

        use same account private key in .env ganache private key and metamask account impoert private key (use same account for both) 

        metamask network setting for ganache:
                    Network Name: Ganache
                    New RPC URL: http://127.0.0.1:7545
                    Chain ID: 1337
                    Currency Symbol: ETH
                    Block Explorer URL: (leave blank)

        importing account in metamask from ganache private key, you will see same balance in metamask as in ganache account 100 ETH                 (go to top left cornner dropdownlist in metamask sidepannal > add wallet > import account > paste private key from ganache account(same key that you used in .env file))
