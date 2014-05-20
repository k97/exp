/*
 * ng Services
 *
*/

'use strict';

var expServices = angular.module('expServices', ['ngResource']);

expServices.factory('ExpCall', ['$resource',
  function($resource){
        return $resource('data/explist.json');
  }]);

