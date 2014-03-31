var request = require('superagent')
var expect = require('expect.js');

var host = 'http://localhost:3000/'
var contacts = [];
var newly_created_contact_id = 0;
var contacts_after = [];

describe('GRUD test REST API /api/contacts', function(){
  it('first request all contacts should include previous post contact', function(done){
    request.get(host + 'api/contacts')
      .end(function(error, res){
	expect(res.status).to.equal(200);
	contacts = res.body['contacts']
	done();
      });
  });

  it('post one contact', function(done){
    request.post(host + 'api/contact')
      .send({'name': 'whatisthis', 'events': 'idle'})
      .end(function(error, res){
	expect(res.status).to.equal(200);
	newly_created_contact_id = res.body;
	done();
      });
  });

  it('request newly created contact should succeed', function(done){
    request.get(host + 'api/contact/' + newly_created_contact_id)
      .end(function(error, res){
	expect(res.status).to.equal(200);
	expect(res.body['contact']['name']).to.contain('whatisthis');
	done();
      });
  });

  it('second request all contacts should include previous post contact', function(done){
    request.get(host + 'api/contacts')
      .end(function(error, res){
	expect(res.status).to.equal(200);
	contacts_after = res.body['contacts'];
	expect(contacts_after.length - contacts.length).to.equal(1);
	done();
      });
  });

  it('modify the contact just created', function(done){
    request.put(host + 'api/contact/' + newly_created_contact_id)
      .send({'name': 'whatisthat', 'events': 'idle'})
      .end(function(error, res){
	expect(res.status).to.equal(200);
	done();
      });
  });

  it('request modified contact should match', function(done){
    request.get(host + 'api/contact/' + newly_created_contact_id)
      .end(function(error, res){
	expect(res.status).to.equal(200);
	expect(res.body['contact']['name']).to.contain('whatisthat');
	done();
      });
  });

  it('delete the contact just created', function(done){
    request.del(host + 'api/contact/' + newly_created_contact_id)
      .end(function(error, res){
	expect(res.status).to.equal(200);
	done();
      });
  });

  it('secondly request newly created contact should fail', function(done){
    request.get(host + 'api/contact/' + newly_created_contact_id)
      .end(function(error, res){
	expect(res.status).to.equal(200);
	expect(res.body['contact']).to.not.be.ok();
	done();
      });
  });

  it('third request all contacts should exclude previous post contact', function(done){
    request.get(host + 'api/contacts')
      .end(function(error, res){
	expect(res.status).to.equal(200);
	contacts_after = res.body['contacts'];
	expect(contacts_after.length).to.be(contacts.length);
	done();
      });
  });

})
