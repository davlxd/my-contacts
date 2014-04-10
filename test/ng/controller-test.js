var initData = {"contacts":[{"name":"lxd","events":"birthday"},{"name":"xdli","events":"OMG"}]}
var addData = {'name': 'whatisthis', 'events': 'idle'}

describe('my-contacts controllers', function(){
  var $httpBackend, $rootScope, $controller;

  beforeEach(module('myApp.controllers'));
  beforeEach(inject(function($injector) {

    $httpBackend = $injector.get('$httpBackend');
    $rootScope = $injector.get('$rootScope');
    $controller = $injector.get('$controller');
    $location = $injector.get('$location');

  }));

  describe('IndexCtrl', function(){
    it('should return all contact', function(){
      var scope = $rootScope.$new();
      var ctrl = $controller('IndexCtrl', { $scope: scope });

      $httpBackend.whenGET('/api/contacts').respond(initData);
      $httpBackend.flush();

      expect(scope.contacts.length).to.equal(2);
    });
  });

  describe('AddCtrl', function() {
    it('should relocate to /', function(){
      var scope = $rootScope.$new();
      var ctrl = $controller('AddCtrl', { $scope: scope });

      scope.submitContact();
      //$httpBackend.expectPOST('/api/contact', addData).respond(201, '');
      $httpBackend.expectPOST('/api/contact', {}).respond(201, '');

      $httpBackend.flush();
      expect($location.path()).to.be('/');

    });
  });
});
