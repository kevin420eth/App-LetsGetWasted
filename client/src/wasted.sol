// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Wasted is ERC721, Ownable{
    
    constructor() ERC721("Wasted", "WSTD") {}

    uint256 constant maxSupply = 6969; //Max amount of this collection is 6969
    uint256 constant mintPrice = 0.00369 ether; //Each wasted shit will cost you 0.00369ETH
    uint256 constant startTimeStamp = 1677258000; //Set the sales start timestamp (Fri. Feb. 24th 2023 17:00:00 GMT+0000)
    uint256 public totalSupply = 0; //Initialize the total supply of this collection
    string public baseURI="https://wastednft.s3.ap-northeast-1.amazonaws.com/json/";
    address wastedFounder = 0x9B6F1B06bCEAEF7C896Beb50BB4943ece50e722f; //Donate some ETH to founder, thank you!
    

    //Pay 0.00369 ETH to join this wasted party
    function mint() external payable{
        require(block.timestamp >= startTimeStamp,"Not yet!");
        require(msg.value >= mintPrice, "No enough money to be wasted!");
        require(totalSupply < maxSupply,"No more wasted!");
        totalSupply += 1;
        _mint(msg.sender,totalSupply-1);
    }

    //Let poor founder join this wasted party
    function founderMint() external onlyOwner{
        require(totalSupply < maxSupply,"No more wasted!");
        totalSupply += 1;
        _mint(msg.sender,totalSupply-1);
    }

    //Set baseURI
    function setBaseURI(string memory newbaseURI) public onlyOwner {
        baseURI = newbaseURI;
    }

    //Founder is going to waste these ETH
    function withdraw() external onlyOwner{
        uint256 wastedMoney = address(this).balance;
        payable(wastedFounder).transfer(wastedMoney);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }
}