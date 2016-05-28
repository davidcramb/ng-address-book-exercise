var main = angular.module("AddressBook", ['ngRoute'])
          .constant("firebaseURL", "https://dcc-addressbook.firebaseio.com/");

main.config(function($routeProvider) {
  $routeProvider.
    when('/book/list',{
      templateUrl: 'partials/address-list.html',
      controller: 'AddressViewController'
    }).
    when('/book/new', {
      templateUrl: 'partials/address-new.html',
      controller: 'AddressNewController'
    }).
    otherwise('/book/list');
    // to do, add :itemID path for editing / adding
});