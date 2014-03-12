'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/index',
      controller: 'IndexCtrl'
    }).
    when('/add', {
      templateUrl: 'partials/add',
      controller: 'AddCtrl'
    }).
    when('/detail', {
      templateUrl: 'partials/detail',
      controller: 'DetailCtrl'
    }).
    when('/edit', {
      templateUrl: 'partials/edit',
      controller: 'EditCtrl'
    }).
    when('/delete', {
      templateUrl: 'partials/delete',
      controller: 'DeleteCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
