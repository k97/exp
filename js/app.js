/*
 * Index File Angular
 * Exp Listing, Month and Total Amount with drill-down linking
*/

'use strict';

    var expTrackApp = angular.module('expTrackApp', ['ngRoute','expTrackAppCtrl']);

    expTrackApp.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
          when('/expenses', {
            templateUrl: 'templates/main.html',
            controller: 'ExpListCtrl'
          }).
          when('/add', {
            templateUrl: 'templates/form',
            controller: 'ExpAdd'
          }).
          otherwise({
            redirectTo: '/expenses'
          });
        }]);

