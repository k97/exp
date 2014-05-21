/*
 * ng Services
 *
*/
//http://stackoverflow.com/questions/13849902/reading-in-json-through-angular-resources-service

'use strict';

var expServices = angular.module('expServices', ['ngResource']);

expServices.factory('ExpCall', ['$resource',
    function($resource){
        return $resource('data/explist.json',{}, {
            get: {method:'GET', isArray: false}
        });
    }
]);

expServices.factory('ExpCatCall', ['$resource',
    function($resource){
        return $resource('data/category.json', {}, {
        get: {method: 'GET', isArray: false},
        });
  }]);


// expServices.factory('ExpCatCall', ['$resource',
//     function($resource){
//         return $resource('data/category.json',{}, {
//             getData: {method:'GET', isArray: true}
//         });
//     }
// ]);
