const Web3 = require('web3');
const Tx = require('ethereumjs-tx').Transaction;

// const web3 = new Web3 ('https://rinkeby.infura.io/v3/5f60567db33c43b59667487ecb68ea1a');
const web3 = new Web3 ('wss://rinkeby.infura.io/ws/v3/5f60567db33c43b59667487ecb68ea1a');




const contractAddress = '0x78727481E1C334EC3694409512A4191E3ac925CB';

const abi = 

[{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]




const contract= new web3.eth.Contract(abi,contractAddress);

contract.methods.name().call((err,result)=>{
  console.log(result);
})


const account1 = '0x000D09bCD4224CE847750B4C8cC8d4FbF39e33df';
const privateKey1 = Buffer.from('d63b3483b688e95ecd97af0fea3ace1b386bb5268d517fc84ad7423ab97ac3d6','hex');

const account2 = '0xF48C993dea34AFbe3e0Bb28b36A23675e28ec52a';
const privateKey2 = '5ea0e0d5e51b35cb79e52cc4eda03d2f0acabead34e7d3c268da1051aadcbfc9';



// web3.eth.getTransactionCount(account1, (err, txCount) => {
  

//   const txObject = {
//     nonce:web3.utils.toHex(txCount),
//     to: contractAddress,
//     gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
//     gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
//     data: contract.methods.transfer(account2,2).encodeABI(),
//   }
  

  
//   const tx = new Tx(txObject,{chain:'rinkeby'})
//   tx.sign(privateKey1)

//   const serializedTx = tx.serialize()
//   const raw = '0x' + serializedTx.toString('hex')
  

//   web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//     console.log('err:ye ha!', err, 'txHash:', txHash)
//     // Use this txHash to find the contract on Etherscan!
//   })
// })





function handler (event) {
  console.log('Alerting!!!..Transfer Event Emitting',event.returnValues);
}

function errorCallback (err) {
  console.error(err);
}

let transferSubscription = contract.events.Transfer();
transferSubscription.on('data', handler).on('error', errorCallback);

function handler1 (event) {
  console.log('Alerting!!!..Approval Event Emitting',event.returnValues);
}

function errorCallback1 (err) {
  console.error(err);
}



let approvalSubscription = contract.events.Approval();
approvalSubscription.on('data',handler1).on('error',errorCallback1);



// contract.events.Transfer()
// .on("connected", function(subscriptionId){ console.log(subscriptionId);})
// .on('data', function(event){ console.log(event);})


// console.log(subscription);



// contract.getPastEvents('Transfer',{
//   fromBlock:0,
//   toBlock:'latest'
// },(err,result)=>{
//   console.log(result);
// })



// contract.events.Transfer({
//   fromBlock:'pending'
// }, (err,result)=>{
//   console.log( result);
// })






// web3.subscribe('Transfer', {
// }, function(error, event){ console.log(event ,'transfer Event emiting!'); });


// web3.eth.subscribe('Transfer', {
//   address: contractAddress,

  
// }, function(error, result){
//   if (!error)
//       console.log(result,'Transfer Subscribe');
// });












