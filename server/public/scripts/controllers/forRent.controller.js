myApp.controller('RentController', function($http){
    console.log('RentController is created');
    var vm = this;
    vm.realestate = [];

    vm.forRent = function () {
        $http.get('/realestate/forRental/').then (function (response){
            console.log('success');
            vm.realestate = response.data;
            // vm.refreshRent();
        }).catch ( function (error){
            console.log('failure');
            
        });
    }
    // codes below are added for sorting table
    vm.sortColumn = "rent";
    vm.reverseSort = false;
    vm.sortData = function(column){
        vm.reverseSort = (vm.sortColumn == column) ? !vm.reverseSort : false;
        vm.sortColumn = column;
    }
    vm.getSortClass = function (column) {
        if (vm.sortColumn == column) {
            return vm.reverseSort ? 'arrow-down' : 'arrow-up'
        }
        return "";
    }
    vm.deleteRent = function (RentId) {
        $http.delete('/realestate/forRental/' + RentId).then(function (response) {
            console.log('Success!');
            vm.refreshRent();
        }).catch(function (error) {
            console.log('Failure!');
        });
    }

    vm.refreshRent = function () {
        $http.get('/realestate/forRental/').then(function (response) {
            console.log('Success!');
            vm.realestate = response.data;
        }).catch(function (error) {
            console.log('Failure!', error);
        });
    }
    vm.refreshRent();

    vm.forRent();
});