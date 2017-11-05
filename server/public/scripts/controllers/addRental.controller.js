myApp.controller('AddRentController', function ($http) {
    console.log('AddRentController created');
    var vm = this;
    vm.realestate = {};

    vm.addRental = function (RentToAdd) {
        console.log(RentToAdd);
        $http.post('/realestate/addRental', RentToAdd).then(function (response) {
            console.log('success');

        }).catch(function (error) {
            console.log('Failure');

        });
    }


})