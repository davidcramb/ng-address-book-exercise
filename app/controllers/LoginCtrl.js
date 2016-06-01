"use strict";
main.controller('LoginCtrl', function($scope,$location, AuthFactory, firebaseURL) {
  let ref = new Firebase(firebaseURL);

  $scope.hasUser = false;

  $scope.account = {
    email: "",
    password: ""
  };

  if ($location.path() === '/logout') {
    ref.unauth();
  };

  $scope.register = () => {
    console.log('Register account');
    ref.createUser({
      email: $scope.account.email,
      password: $scope.account.password
     }, (error, userData) => {
      if(error){
        console.log(`Error creating user: ${error}`)
      }else {
        console.log(`Created user with credentials: ${userData.uid}`)
        $scope.login();
        };
      });
    };

  $scope.login = () => {
    console.log('Logging into the Gibson');
    AuthFactory
            .authenticate($scope.account)
            .then(() => {
              $scope.hasUser = true;
              $location.path("/");
              $scope.$apply()
            });
    };
  

});