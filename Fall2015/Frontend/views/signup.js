'use strict';
 
angular.module('RouteMakerApp.signup', ['ngRoute'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupControl'
    });
}])
 
// Register controller
.controller('SignupControl', [function() {
 
}]);