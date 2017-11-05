var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when( '/forRental', {
        templateUrl: 'templates/forRental.html',
        controller: 'RentController as rc'
    }).when( '/forSale', {
        templateUrl: 'templates/forSale.html',
        controller: 'SaleController as sc'
    }).when('/addListing', {
        templateUrl: 'templates/addListing.html',
        controller: 'AddSaleController as asc'
    }).when('/addRental', {
        templateUrl: 'templates/addRental.html',
        controller: 'AddRentController as arc'
    })
})