/*
 * Routing & Control
 * App Main File
*/

'use strict';

var expApp = angular.module('expApp', ['ngRoute','expAppCtrl','expServices']);

expApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/expenses', {
            templateUrl: 'templates/main.html',
            controller: 'ExpListCtrl'
        }).
        when('/add', {
            templateUrl: 'templates/form.html',
            controller: 'ExpAdd'
        }).
        when('/category', {
            templateUrl: 'templates/category.html',
            controller: 'ExpCategory'
        }).
        otherwise({
            redirectTo: '/expenses'
        });
    }
]);

