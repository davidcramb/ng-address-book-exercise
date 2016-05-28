main.controller("AddressViewController", function($scope, contactDB){

$scope.contactList = [];
  contactDB.getAddressBook().then(function(contacts){
    $scope.contactList = contacts;
    console.log("Address Book:", contacts)
    console.log(contacts[0])
  })


});