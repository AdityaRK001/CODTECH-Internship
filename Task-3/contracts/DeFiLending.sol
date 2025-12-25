// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DeFiLending {
    uint256 public interestRate = 5;

    struct Tx {
        address user;
        string action;
        uint256 amount;
        uint256 interest;
        bool success;
        bytes32 txId;
        uint256 time;
    }

    mapping(address => uint256) public deposits;
    Tx[] public history;

    event Action(address user, string action, uint256 amount, bytes32 txId);

    function lend() external payable {
        require(msg.value > 0, "Zero amount");
        uint256 interest = (msg.value * interestRate) / 100;
        deposits[msg.sender] += msg.value + interest;

        bytes32 txId = keccak256(abi.encodePacked(msg.sender, block.timestamp));

        history.push(
            Tx(msg.sender, "LEND", msg.value, interest, true, txId, block.timestamp)
        );

        emit Action(msg.sender, "LEND", msg.value, txId);
    }

    function borrow(uint256 amount) external {
        require(deposits[msg.sender] >= amount, "Insufficient collateral");

        deposits[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);

        bytes32 txId = keccak256(abi.encodePacked(amount, block.timestamp));

        history.push(
            Tx(msg.sender, "BORROW", amount, 0, true, txId, block.timestamp)
        );

        emit Action(msg.sender, "BORROW", amount, txId);
    }

    function getHistory() external view returns (Tx[] memory) {
        return history;
    }

    receive() external payable {}
}
