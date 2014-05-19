/*
 * Index File Angular
 * Exp Listing, Month and Total Amount with drill-down linking
*/

'use strict';

/* Controllers */
var expTrackAppCtrl = angular.module('expTrackAppCtrl', []);

//-------Main Index Page Data
expTrackAppCtrl.controller('ExpListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('data/explist.json').success(function(data) {
            $scope.month = data.month;
            $scope.year = data.year;
            $scope.total = data.total;
            $scope.list = data.expenses;
        });
    }
]);


//------Add Form Data

// expTrackAppCtrl.controller('ExpAdd', ['$scope', '$routeParams',
//   function($scope, $routeParams) {
//     $scope.phoneId = $routeParams.phoneId;
//   }]);
