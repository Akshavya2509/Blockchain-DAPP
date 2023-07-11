var contract;

function init() {
  web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
  //smart contract address
  var address = "0x30734EC81e2Cb6A002A47cB8D88623653149b1f8";
  var abi =  [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawal","outputs":[],"stateMutability":"nonpayable","type":"function"}];

  contract = new web3.eth.Contract(abi, address);
  contract.methods.getBalance().call().then(function(balance){
    $("#balance").html(balance);
  });
}

function deposit() {
  var amt = 0;
  amt = parseInt($('#amount').val());
  web3.eth.getAccounts().then(function(accounts)
  {
    var acc = accounts[0];
    console.log("acc: " + accounts[0]);
    return contract.methods.deposit(amt).send({from : acc});
  }).then(function(tx)
  {
    console.log(tx);
  }).catch(function(tx){
    console.log(tx);
  });
}

function withdraw() {
  var amt = 0;
  amt = parseInt($('#amount').val());
  web3.eth.getAccounts().then(function(accounts)
  {
    var acc = accounts[0];
    console.log("acc: " + accounts[0]);
    return contract.methods.withdrawal(amt).send({from : acc});
  }).then(function(tx)
  {
    console.log(tx);
  }).catch(function(tx){
    console.log(tx);
  });
}

$(document).ready(init);
