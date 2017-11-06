myApp.controller('AddRentController', function ($http) {
    console.log('AddRentController created');
    var vm = this;
    vm.realestate = {};

    vm.addRental = function (RentToAdd) {
        console.log(RentToAdd);
        $http.post('/realestate/addRental', RentToAdd).then(function (response) {
            console.log('success');
            //vm.refreshRent();
        }).catch(function (error) {
            console.log('Failure');

        });
    }

    // vm.refreshRent = function () {
    //     $http.get('/realestate/forRental/').then(function (response) {
    //         console.log('Success!');
    //         vm.realestate = response.data;
    //     }).catch(function (error) {
    //         console.log('Failure!', error);
    //     });
    // }
    // vm.refreshRent();

})