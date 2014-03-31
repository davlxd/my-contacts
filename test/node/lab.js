var request = require('superagent')
var expect = require('expect.js');

var host = 'http://localhost:3000/'
var contacts = [];
var newly_created_contact_id = 0;
var contacts_after = [];

var api = require('../routes/api.js')

describe('DESCRIBE', function(){
  it('IT', function(done){
    api.load();
    done();
  });
  it('IT', function(done){
    api.save();
    done();
  });
})
