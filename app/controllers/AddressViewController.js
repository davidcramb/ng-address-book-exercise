main.controller("AddressViewController", function($scope, addressBook){

$scope.contactList = [];
  addressBook.getAddressBook().then(function(contacts){
    console.log("Address Book:", contacts)
    $scope.contactList = contacts;
  })


});