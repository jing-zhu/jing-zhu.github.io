'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute']).
config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html"
    })
    .when("/home", {
        templateUrl : "views/home.html"
    })
    .when("/publications", {
        templateUrl : "views/publications.html"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});


