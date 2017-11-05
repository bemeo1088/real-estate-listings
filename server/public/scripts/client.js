var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when( '/forRent', {
        templateUrl: 'templates/forRent.html',
        controller: 'RentController as rc'
    }).when( '/forSale', {
        templateUrl: 'templates/forSale.html',
        controller: 'SaleController as sc'
    })
})