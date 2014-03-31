
describe('my-contacts controllers', function(){
  beforeEach(module('myApp.controller'));
  
  describe('IndexCtrl', function(){
    it('should return all contact', function(){
      var scope = {}, ctrl = new IndexCtrl(scope);
      expect(scope.contacts.length).toBe(3);
    });
  });
});
