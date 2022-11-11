//!.env
require('dotenv').config()

//!web3.js
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const { abi,evm } = require('./compile');


const provider = new HDWalletProvider(//HDWalletProvider == metamask,//The purpose of this module right here is to both connect to some target network and unlock an account,for use on that network.By providing just this pneumonic, we are able to unlock and generate the public key, private key and address of our account.
    process.env.METAMASK_MNEMONIC,
    process.env.INFURA_API//We specified that our provider should connect to an infra node.
)

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(abi)//Create and Deploy contratc,and send Transaction
        .deploy({
            data: evm.bytecode.object,
            arguments: ['Hi there!']
        })
        .send({
            gas: '1000000',
            from: accounts[0]
        });

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
};
deploy()