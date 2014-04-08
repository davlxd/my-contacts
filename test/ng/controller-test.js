var initData = {"contacts":[{"name":"lxd","events":"birthday"},{"name":"xdli","events":"OMG"}]}

describe('my-contacts controllers', function(){
  var $httpBackend, $rootScope, $controller;

  beforeEach(module('myApp.controllers'));
  beforeEach(inject(function($injector) {

    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.when('GET', '/api/contacts').respond(initData);

    $rootScope = $injector.get('$rootScope');
    $controller = $injector.get('$controller');

  }));

  describe('IndexCtrl', function(){

    it('should return all contact', function(){
      var scope = $rootScope.$new();
      var ctrl = $controller('IndexCtrl', { $scope: scope });
      $httpBackend.flush();

      expect(scope.contacts.length).to.equal(2);
    });
  });

});
