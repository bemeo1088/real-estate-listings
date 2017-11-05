myApp.controller('AddSaleController', function ($http) {
    console.log('AddSaleController created');
    var vm = this;
    vm.realestate = {};

    vm.addListing = function (saleToAdd) {
        console.log(saleToAdd);
        $http.post('/realestate/addListing', saleToAdd).then(function (response) {
            console.log('success');

        }).catch(function (error) {
            console.log('Failure');

        });
    }


})