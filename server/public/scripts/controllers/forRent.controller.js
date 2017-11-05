myApp.controller('RentController', function($http){
    console.log('RentController is created');
    var vm = this;
    vm.realestate = [];

    vm.forRent = function () {
        //console.log('realEstateToRent', realEstateToRent);
        $http.get('/realestate/forRental/').then (function (response){
            console.log('success');
            vm.realestate = response.data;
        }).catch ( function (error){
            console.log('failure');
            
        });
    }
    vm.forRent();
});