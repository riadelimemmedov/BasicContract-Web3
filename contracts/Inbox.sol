// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

//!Inbox Contract
contract Inbox{
    string public message;

    constructor(string memory initialMessage){//memory is a keyword used to store data for the execution of a contract. It holds functions argument data and is wiped after execution. 
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public{
        message = newMessage;
    }



}