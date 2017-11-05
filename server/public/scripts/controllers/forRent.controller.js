myApp.controller('RentController', function($http){
    console.log('RentController is created');
    var vm = this;
    vm.realestate = {};

    vm.forRent = function (houseToRent) {
        console.log('houseToRent', houseToRent);
        $http.get ('/realestate', houseToRent).then (function (response){
            console.log('success');
            
        }).catch ( function (error){
            console.log('failure');
            
        });
    }
});