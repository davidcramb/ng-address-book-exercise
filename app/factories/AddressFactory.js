"use strict";
main.factory("addressBook", function($q, $http){

  var getAddressBook = function() {
    let contacts = [];
    return $q(function(resolve, reject) {
      $http.get('https://dcc-addressbook.firebaseio.com/addresses.json')
        .success(function(object) {
          console.log(object)
          var addressObject = object;
          Object.keys(addressObject).forEach(function(key){
            addressObject[key].id = key;
            contacts.push(addressObject[key]);
          });
          resolve(contacts);
          console.log(contacts)
        })
          .error(function(error){
            reject(error);
          });
    });
  };





return {getAddressBook:getAddressBook}
}); //end