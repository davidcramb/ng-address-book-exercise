var main = angular.module("AddressBook", ['ngRoute'])
          .constant("firebaseURL", "https://dcc-addressbook.firebaseio.com/");

let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if (AuthFactory.isAuthenticated()) {
    console.log('User Authed');
    resolve();
  } else {
    console.log('Not Authenticated');
    reject();
  }
})

main.config(function($routeProvider) {
  $routeProvider.
    when('/book/list',{
      templateUrl: 'partials/address-list.html',
      controller: 'AddressViewController',
      resolve: {isAuth}
    }).
    when('/book/new', {
      templateUrl: 'partials/address-new.html',
      controller: 'AddressNewController',
      resolve: {isAuth}
    }).when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    }).when('/logout', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    }).
    otherwise('/book/list');
    // to do, add :itemID path for editing / adding
});

main.run(($location) => {
  let addressRef = new Firebase("https://dcc-addressbook.firebaseio.com/");
  addressRef.onAuth(authData => {
    if(!authData){
      $location.path("/login");
    }
  })
});