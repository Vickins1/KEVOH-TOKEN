// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract KEVOH is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("KEVOH", "KVH") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply);
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }

    // Allows contract to receive ETH
    receive() external payable {}

    // Fallback function
    fallback() external payable {}
}