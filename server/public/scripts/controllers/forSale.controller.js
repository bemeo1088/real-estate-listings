myApp.controller('SaleController', function ($http) {
    console.log('SaleController is created');

    var vm = this;
    vm.realestate = [];

    vm.forSale = function () {
        //console.log('realEstateToSell', realEstateToSell);
        $http.get('/realestate/forSale').then(function (response) {
            console.log('success');
            vm.realestate = response.data;
        }).catch(function (error) {
            console.log('failure');

        });
    }

    vm.forSale();
});