'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('IndexCtrl', function ($scope, $http) {
      $http.get('/api/contacts').
	  success(function(data, status, headers, config) {
	      $scope.contacts = data.contacts;
	  });
  }).
  controller('AddCtrl', function ($scope, $http, $location) {
      $scope.form = {};
      $scope.submitContact = function () {
	  $http.post('/api/contact', $scope.form).
	      success(function(data) {
		  $location.path('/');
	      });
      };
  }).
  controller('DetailCtrl', function ($scope, $http, $routeParams) {
      $http.get('/api/contact/' + $routeParams.id).
	  success(function(data) {
	      $scope.contact = data.contact;
	  });
  }).
  controller('EditCtrl', function ($scope, $http, $location, $routeParams) {
      $scope.form = {};
      $http.get('/api/contact/' + $routeParams.id).
	  success(function(data) {
	      $scope.form = data.contact;
	  });
      
      $scope.editContact = function () {
	  $http.put('/api/contact/' + $routeParams.id, $scope.form).
	      success(function(data) {
		  $location.url('/detail/' + $routeParams.id);
	      });
      };
  }).
  controller('DeleteCtrl', function ($scope, $http, $location, $routeParams) {
      $http.get('/api/contact/' + $routeParams.id).
	  success(function(data) {
	      $scope.contact = data.contact;
	  });

      $scope.deleteContact = function () {
	  $http.delete('/api/contact/' + $routeParams.id).
	      success(function(data) {
		  $location.url('/');
	      });
      };

      $scope.home = function () {
	  $location.url('/');
      };
  });
