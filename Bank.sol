pragma solidity ^0.6.4;

contract bank{
    uint256 public balance;
    constructor ()public {
        balance = 0;
    }

    function getBalance() public returns (uint256){
        return balance;
    }
    function withdrawal(uint256 amount) public {
        balance = balance - amount;
    }
    function deposit(uint256 amount) public {
        balance = balance + amount;
    }
}