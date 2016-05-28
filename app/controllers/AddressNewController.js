main.controller("AddressNewController", function($scope, $location, contactDB){
  $scope.pageTitle = "Add Contact";
  $scope.submitButtonText = "Add New Item";
  $scope.makeContactObject = {};

  $scope.addNewContact = function(){
    contactDB.createNewContact($scope.makeContactObject)
      .then(function successCallback(response) {
        console.log(response);
          $location.url("/book/list");
      });
  };
});