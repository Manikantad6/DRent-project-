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

abi_tenant = JSON.parse('[{"constant":true,"inputs":[{"name":"_tAddress","type":"address"}],"name":"GAD_noticeTimeStamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tAddress","type":"address"}],"name":"GAD_tenantAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tAddress","type":"address"}],"name":"getPaymentDetails","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tAddress","type":"address"}],"name":"GAD_pname","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tAddress","type":"address"}],"name":"GAD_landlordAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tAddress","type":"address"}],"name":"withDrawSD","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tAddress","type":"address"}],"name":"GAD_noticePeriod","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tAddress","type":"address"}],"name":"GAD_securityDeposit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_pname","type":"string"},{"name":"_tenant","type":"address"},{"name":"_landlord","type":"address"},{"name":"_sd","type":"uint256"},{"name":"_pt","type":"string"},{"name":"_npDays","type":"uint256"},{"name":"_pa","type":"string"}],"name":"signAgreement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tAddress","type":"address"}],"name":"giveNotice","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tAddress","type":"address"}],"name":"GAD_noticePeriodDays","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tAddress","type":"address"}],"name":"vacate","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"agrement","outputs":[{"name":"pname","type":"string"},{"name":"securityDeposit","type":"uint256"},{"name":"paymentType","type":"string"},{"name":"tenantAddress","type":"address"},{"name":"noticePeriod","type":"bool"},{"name":"noticePeriodDays","type":"uint256"},{"name":"landlordAddress","type":"address"},{"name":"noticeTimeStamp","type":"uint256"},{"name":"propertyAddresss","type":"string"},{"name":"status","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tAddress","type":"address"}],"name":"GAD_status","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tAddress","type":"address"}],"name":"GAD_paymentType","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]');

abi_landlord = JSON.parse('[{"constant":true,"inputs":[{"name":"_ad","type":"address"},{"name":"_id","type":"uint256"}],"name":"GPD_description","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ad","type":"address"},{"name":"_id","type":"uint256"}],"name":"GPD_status","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ad","type":"address"},{"name":"_id","type":"uint256"}],"name":"GPD_paymentType","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_pname","type":"string"},{"name":"_description","type":"string"},{"name":"_sDeposit","type":"uint256"},{"name":"_paymentType","type":"string"},{"name":"_npDays","type":"uint256"},{"name":"_lCity","type":"string"},{"name":"_paddress","type":"string"}],"name":"addProperty","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_ad","type":"address"},{"name":"_id","type":"uint256"}],"name":"GPD_noticePeriodDays","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStatus","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ad","type":"address"},{"name":"_id","type":"uint256"}],"name":"GPD_landlordAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ad","type":"address"},{"name":"_id","type":"uint256"}],"name":"GPD_securityDeposit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ad","type":"address"}],"name":"getPropertyCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_add","type":"address"},{"name":"_id","type":"uint256"},{"name":"_stat","type":"string"}],"name":"changeStatus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAllPropertyCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ad","type":"address"},{"name":"_id","type":"uint256"}],"name":"GPD_noticePeriod","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ad","type":"address"},{"name":"_id","type":"uint256"}],"name":"GPD_pid","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ad","type":"address"},{"name":"_id","type":"uint256"}],"name":"GPD_pname","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ad","type":"address"},{"name":"_id","type":"uint256"}],"name":"GPD_propertyAddress","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ad","type":"address"},{"name":"_id","type":"uint256"}],"name":"GPD_lCity","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]');

var LandlordContract  = web3.eth.contract(abi_landlord);
var TenantContract = web3.eth.contract(abi_tenant);
 Landlord = LandlordContract.at('0x3f9fe1b2c6f9dd35139ef8d40cdbffbb9ebb80f7');
 Tenant = TenantContract.at('0x5a6a8a67dcef478f045a370f84c3037f78fc2b86')
console.log(Tenant);
console.log(Landlord);



function getPropertyCount() {
 Landlord.getPropertyCount(eth,function(err, res) {
    console.log(res['c'][0]);
 otherfunction(res['c'][0]);
});

}





function addProperty() {
  var j_pname = $('#pname').val();
  var description = $('#description').val();
  var securityDeposit = $('#securitydeposit').val();
  var paymentType = $('#ptype').val();
  var noticePeriodDays = $('#noticeperioddays').val();
  var lCity = $('#lcity').val();
  var propertyAddress = $('#propertyaddress').val();

console.log(propertyAddress);

Landlord.addProperty(j_pname, description, securityDeposit, paymentType, noticePeriodDays, lCity, propertyAddress,function(err, res) {
  if(res){
      alert("Property added, transaction id: "+res);
  }
   console.log(res);
  // console.log(res.c[0]);


});
}
