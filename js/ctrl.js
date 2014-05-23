/*
 * Angular Controller & Modal Logics
 * Exp Listing, Month and Total Amount with drill-down linking
*/
'use strict';

var expAppCtrl = angular.module('expAppCtrl', []);



//-------Main Index Page Data
expAppCtrl.controller('ExpListCtrl', ['$scope', 'ExpCall',
    function($scope, ExpCall) {
        $scope.pageTrans = 'page-from-right-to-center';
        ExpCall.get(function (data){
            $scope.month = data.month;
            $scope.year = data.year;
            $scope.list = data.expenses;
            $scope.total = totalCal();


        });

        function totalCal(){
            var totVal = 0;
            for(var i=0; i<$scope.list.length; i++){
                totVal = totVal + parseFloat($scope.list[i].amount);
            }
            return totVal.toFixed(2);
        }




    }//fn
]);


//-------Category Data
expAppCtrl.controller('ExpCategory', ['$scope', 'ExpCatCall',
    function($scope, ExpCatCall) {
        $scope.pageTrans = 'page-from-right-to-center';
        ExpCatCall.get(function (data){
            console.log(data);
            $scope.category = data;
        });
    }
]);

//------Add Form Data
// expTrackAppCtrl.controller('ExpAdd', ['$scope', '$routeParams',
//   function($scope, $routeParams) {
//     $scope.phoneId = $routeParams.phoneId;
//   }]);
