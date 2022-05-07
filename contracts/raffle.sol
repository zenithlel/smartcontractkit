//SPDX-License Identifier: MIT

pragma solidity ^0.8.0;

contract Raffle{

    uint256 public personId;
    //mapping(address => uint256) public num

    function setID(uint256 id) public{
        personId = id;

    }

    function getId() public view returns (uint256){
        return personId;
    }
}
