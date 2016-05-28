main.controller("AddressViewController", function($scope, $routeParams, contactDB){

$scope.contactList = [];

  contactDB.getAddressBook().then(function(contacts){
    $scope.contactList = contacts;
    console.log("Address Book:", contacts)
    console.log(contacts[0])
  });

    contactDB.getAddressBook().then(function(addresses){
    $scope.contactList = addresses;
    $scope.selectedContact = $scope.contactList.filter(function(contact) {
      return contact.id === $routeParams.contactId;
    })[0]
  })

    contactDB.deleteContact()


});