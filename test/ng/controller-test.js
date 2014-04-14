var initData = {"contacts":[{"name":"lxd","events":"birthday"},{"name":"xdli","events":"OMG"}]}
var headData = {"contacts":[{"name":"lxd","events":"birthday"}]}
var addData = {'name': 'whatisthis', 'events': 'idle'}

describe('my-contacts controllers', function() {
  var $httpBackend, $rootScope, $controller;

  beforeEach(module('myApp'));

  beforeEach(inject(function($injector) {

    $httpBackend = $injector.get('$httpBackend');
    $rootScope = $injector.get('$rootScope');
    $controller = $injector.get('$controller');
    $location = $injector.get('$location');
    $routeParams = $injector.get('$routeParams');

  }));

  describe('IndexCtrl', function(){
    it('should return all contact', function(){
      var scope = $rootScope.$new();
      var ctrl = $controller('IndexCtrl', { $scope: scope });

      $httpBackend.expectGET('/api/contacts').respond(initData);
      $httpBackend.flush();

      expect(scope.contacts.length).to.equal(2);
    });
  });

  describe('AddCtrl', function() {
    it('should relocate to /', function(){
      var scope = $rootScope.$new();
      var ctrl = $controller('AddCtrl', { $scope: scope });

      scope.form = addData;
      scope.submitContact();
      $httpBackend.expectPOST('/api/contact', addData).respond(201, '');

      $httpBackend.flush();
      expect($location.path()).to.be('/');

    });
  });

  describe('DetailCtrl', function() {
    it('should get 1st contact', function(){
      var scope = $rootScope.$new();
      $routeParams.id = 0;
      var ctrl = $controller('DetailCtrl', { $scope: scope });

      $httpBackend.expectGET('/api/contact/0').respond(200, headData);

      $httpBackend.flush();
      expect(scope.contacts.length).to.be(1);
      expect(scope.contacts[0].name).to.be('lxd');

    });
  });

});
