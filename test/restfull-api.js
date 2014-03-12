var request = require('supertest')
, express = require('express');


describe('GET /api/contacts', function(){
  it('respond with json', function(done){
      request = request('http://localhost:3000');

      request.get('/api/contacts').expect(200, function(err){
	  console.log(err);
      });

      request.get('/api/contacts').expect('heya', function(err){
	  console.log(err);
      });
  })
})

//http://webapplog.com/test-driven-development-in-node-js-with-mocha/
