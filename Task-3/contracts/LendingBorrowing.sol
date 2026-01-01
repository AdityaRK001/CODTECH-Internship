// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LendingBorrowing {
    mapping(address => uint256) public balances;
    mapping(address => uint256) public borrowed;

    function deposit() external payable {
        balances[msg.sender] += msg.value;
    }

    function borrow(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Not enough collateral");
        borrowed[msg.sender] += amount;
        payable(msg.sender).transfer(amount);
    }

    function repay() external payable {
        borrowed[msg.sender] -= msg.value;
    }

    function withdraw(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
    }
}
