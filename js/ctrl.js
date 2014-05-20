/*
 * Angular Controller & Modal Logics
 * Exp Listing, Month and Total Amount with drill-down linking
*/
'use strict';

var expAppCtrl = angular.module('expAppCtrl', []);

//-------Main Index Page Data
expAppCtrl.controller('ExpListCtrl', ['$scope', 'ExpCall',
    function($scope, ExpCall) {
            $scope.expense = ExpCall.query();
            $scope.expense = "month";
            // $scope.year = expCall.query();
            // $scope.total = expCall.query();
             $scope.list = "expenses";

    }
]);


//------Add Form Data
// expTrackAppCtrl.controller('ExpAdd', ['$scope', '$routeParams',
//   function($scope, $routeParams) {
//     $scope.phoneId = $routeParams.phoneId;
//   }]);
