
describe('my-contacts controllers', function(){
  beforeEach(module('myApp.controllers'));
  
  describe('IndexCtrl', function(){
    it('should return all contact', function(){
      var scope = {},
      ctrl = $controller('IndexCtrl', { $scope: scope });

      expect(scope.contacts.length).toBe(3);
    });
  });
});
