/*
 * Serve JSON to our AngularJS client
 */
var fs = require('fs');
var path = require('path');


var data = {};
exports.inspect_data = function() {
  return data;
}

var data_file_name = function() {
  return __dirname + '/../data/my-contacts.json';
}
var load = function() {
  data = JSON.parse(fs.readFileSync(data_file_name(), 'utf8'));
}
var save = function() {
  fs.writeFile(data_file_name(), JSON.stringify(data), 'utf8');
}
var sync = function() {
  Object.keys(data).length === 0 ? load() : save();
}

exports.name = function (req, res) {
  res.json({
    name: 'Bob'
  });
};

//GET
exports.contacts = function (req, res) {
  //sync();
  load();
  var contacts = [];
  data.contacts.forEach(function (contact, i) {
    contact.id = i;
    contacts.push(contact);
  });
  res.json({
    contacts: contacts
  });
};

//GET
exports.contact = function (req, res) {
  sync();
  var id = req.params.id;
  if (id >= 0 && id < data.contacts.length) {
    res.json({
      contact: data.contacts[id]
    });

  } else {
    res.json(false);
  }
};

//POST
exports.addContact = function(req, res) {
  sync();
  data.contacts.push(req.body);
  res.json(data.contacts.length - 1);
  sync();
};

//PUT
exports.editContact = function(req, res) {
  sync();
  var id = req.params.id;
  if (id >= 0 && id < data.contacts.length) {
    data.contacts[id] = req.body;
    res.json(true);

  } else {
    res.json(false);
  }
  sync();
};


//DELETE
exports.deleteContact = function (req, res) {
  sync();
  var id = req.params.id;
  if (id >=0 && id < data.contacts.length) {
    data.contacts.splice(id, 1)
    res.json(true);
  } else {
    res.json(false);
  }
  sync();
};
