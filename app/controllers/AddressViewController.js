main.controller("AddressViewController", function($scope, contactDB){

$scope.contactList = [];
  contactDB.getAddressBook().then(function(contacts){
    console.log("Address Book:", contacts)
    console.log(contacts)
    $scope.contactList = contacts;
  })


});