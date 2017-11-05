myApp.controller('SaleController', function ($http) {
    console.log('SaleController is created');

    var vm = this;
    vm.realestate = {};

    vm.forSale = function (houseToSell) {
        console.log('houseToSell', houseToSell);
        $http.get('/realestate', houseToSell).then(function (response) {
            console.log('success');

        }).catch(function (error) {
            console.log('failure');

        });
    }
});