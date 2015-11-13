'use strict';
 
angular.module('RouteMaker', [
    'ngRoute',
    'RouteMaker.home'           // Newly added home module
]).
config(['$routeProvider', function($routeProvider) {
    // Set defualt view of our app to home
     
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}]);