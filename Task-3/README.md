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
        - npm install --save-dev hardhat            # to install hardhat
        
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


# How to Run 

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
                
            
