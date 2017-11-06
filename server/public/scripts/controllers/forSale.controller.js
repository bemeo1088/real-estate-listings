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

    vm.sortColumn = "cost";
    vm.reverseSort = false;
    vm.sortData = function (column) {
        vm.reverseSort = (vm.sortColumn == column) ? !vm.reverseSort : false;
        vm.sortColumn = column;
    }
    vm.getSortClass = function (column) {
        if (vm.sortColumn == column) {
            return vm.reverseSort ? 'arrow-down' : 'arrow-up'
        }
        return "";
    }

    vm.deleteSale = function (saleId) {
        $http.delete('/realestate/forSale/' + saleId).then(function (response) {
            console.log('Success!');
            vm.refreshSale();
        }).catch(function (error) {
            console.log('Failure!');
        });
    }

    vm.refreshSale = function () {
        $http.get('/realestate/forSale/').then(function (response) {
            console.log('Success!');
            vm.realestate = response.data;
        }).catch(function (error) {
            console.log('Failure!', error);
        });
    }
    vm.refreshSale();    
    vm.forSale();
});