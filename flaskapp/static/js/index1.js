window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3 = new Web3(web3.currentProvider);
  console.log(web3.currentProvider);

  } else {
    alert("Please Install Metamask for using this Application. If you have installed then make sure you are logged in");
  }

  // Now you can start your app & access web3 freely:
})

web3.eth.defaultAccount = web3.eth.accounts[0];

abi_tenant = JSON.parse('[{"constant":true,"inputs":[{"name":"_tAddress","type":"address"}],"name":"getPaymentDetails","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tAddress","type":"address"}],"name":"getAgreementDetails","outputs":[{"components":[{"name":"pname","type":"string"},{"name":"description","type":"string"},{"name":"securityDeposit","type":"uint256"},{"name":"paymentType","type":"string"},{"name":"tenantAddress","type":"address"},{"name":"noticePeriod","type":"bool"},{"name":"noticePeriodDays","type":"uint256"},{"name":"landlordAddress","type":"address"},{"name":"noticeTimeStamp","type":"uint256"},{"name":"lCity","type":"string"},{"name":"propertyAddresss","type":"string"},{"name":"status","type":"string"}],"name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tAddress","type":"address"}],"name":"withDrawSD","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tAddress","type":"address"}],"name":"giveNotice","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_pname","type":"string"},{"name":"_description","type":"string"},{"name":"_tenant","type":"address"},{"name":"_landlord","type":"address"},{"name":"_sd","type":"uint256"},{"name":"_pt","type":"string"},{"name":"_npDays","type":"uint256"},{"name":"_lcity","type":"string"},{"name":"_pa","type":"string"}],"name":"signAgreement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tAddress","type":"address"}],"name":"vacate","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"agrement","outputs":[{"name":"pname","type":"string"},{"name":"description","type":"string"},{"name":"securityDeposit","type":"uint256"},{"name":"paymentType","type":"string"},{"name":"tenantAddress","type":"address"},{"name":"noticePeriod","type":"bool"},{"name":"noticePeriodDays","type":"uint256"},{"name":"landlordAddress","type":"address"},{"name":"noticeTimeStamp","type":"uint256"},{"name":"lCity","type":"string"},{"name":"propertyAddresss","type":"string"},{"name":"status","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]');

abi_landlord = JSON.parse('[{"constant":false,"inputs":[{"name":"_pname","type":"string"},{"name":"_description","type":"string"},{"name":"_sDeposit","type":"uint256"},{"name":"_paymentType","type":"string"},{"name":"_npDays","type":"uint256"},{"name":"_lCity","type":"string"},{"name":"_paddress","type":"string"}],"name":"addProperty","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_ad","type":"address"},{"name":"_id","type":"uint256"}],"name":"getPropertyDetails","outputs":[{"components":[{"name":"pname","type":"string"},{"name":"description","type":"string"},{"name":"pid","type":"uint256"},{"name":"securityDeposit","type":"uint256"},{"name":"paymentType","type":"string"},{"name":"noticePeriod","type":"bool"},{"name":"landlordAddress","type":"address"},{"name":"noticePeriodDays","type":"uint256"},{"name":"lCity","type":"string"},{"name":"propertyAddresss","type":"string"},{"name":"status","type":"string"}],"name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStatus","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ad","type":"address"}],"name":"getProperityCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_add","type":"address"},{"name":"_id","type":"uint256"},{"name":"_stat","type":"string"}],"name":"changeStatus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAllPropertyCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]');

var LandlordContract  = web3.eth.contract(abi_landlord);
var TenantContract = web3.eth.contract(abi_tenant);
 Landlord = LandlordContract.at('0x222ada14983b0ea8374b3d37150ac0f1d54c8571');
 Tenant = TenantContract.at('0x28816a1c2e66fdb976a05db16f0dcdcfb0bc95bc')
console.log(Tenant);
console.log(Landlord);


function getPropertyCount() {

  Landlord.getAllPropertyCount(function() {
    Landlord.getAllPropertyCount(function(err, res) {
       console.log(res);
      // console.log(res.c[0]);
      alert(res);

  });


});

}
function getPropertyDetails1() {
//  console.log(Landlord);
  var add = 0xb65C9e197D6ca7f1a52d66f9E6CB425C63F5F903;
  Landlord.getPropertyDetails(add,2,function(err, res) {
     console.log(res);
    // console.log(res.c[0]);
    alert(res);

});
}
