"use strict";
main.factory("contactDB", function($q, $http, firebaseURL){

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

  var createNewContact = function(newContact){
    return $q(function(resolve, reject) {
      $http.post(
        firebaseURL + "/addresses.json",
          JSON.stringify({
            first_name: newContact.first_name,
            last_name: newContact.last_name,
            address: newContact.address,
            city: newContact.city,
            state: newContact.state,
            zip: newContact.zip,
            phone: newContact.phone,
            secret_police: newContact.secret_police
          })
        )
    .success(
      function(objectFromFirebase) {
        resolve(objectFromFirebase);
      }
    );
    });
  };




return {getAddressBook:getAddressBook, createNewContact:createNewContact}
}); //end