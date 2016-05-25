main.controller("NavBarController", function($scope, $http){
  $scope.navItems = [
  
  {
    name: "List Addresses",
    url: '#/book/list'
  },
  {
    name: "New Address",
    url: '#/book/new'
  }
  ];
});