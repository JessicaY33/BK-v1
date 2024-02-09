//Jessica You, Mr Irimina, Period 9 & 10 Even Day
const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(index, timestamp, data, previousHash = "")
    {
        this.index = indexl
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = preivousHash;
        this.hash = calculateHash();
    }

    //type "npm install --save crypto-js" in the terminal

    calculateHash()
    {
        return SHA246(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain
{
    constructor()
    {
        this.chain = [];
    }
    createGenesisBlock()
    {
        return new Block(0, "03/01/2009", "Genesis Block", "0");
    }
}