/*
 * Serve JSON to our AngularJS client
 */

var data = {
    'contacts': [
	{
	    'name': 'lxd',
	    'events': 'birthday'
	},
	{
	    'name': 'mei',
	    'events': 'birthday birthday'
	},
    ]
};

exports.name = function (req, res) {
  res.json({
    name: 'Bob'
  });
};

//GET
exports.contacts = function (req, res) {
    var contacts = [];
    data.contacts.forEach(function (contact, i) {
	contacts.push({
	    id: i,
	    name: contact.name,
	    events: contact.events.substr(0, 10) + '...'
	});
    });
    res.json({
	contacts: contacts
    });
};

//GET
exports.contact = function (req, res) {
    var id = req.params.id;
    if (id >= 0 && id < data.contacts.length) {
	res.json({
	    post: data.contacts[id]
	});

    } else {
	res.json(false);
    }
};

//POST
exports.addContact = function(req, res) {
    data.contacts.push(req.body);
    res.json(req.body);
};

//PUT
exports.editContact = function(req, res) {
    var id = req.params.id;
    if (id >= 0 && id < data.contacts.length) {
	data.contacts[i] = req.body;
	res.json(true);

    } else {
	res.json(false);
    }
};


//DELETE
exports.deleteContact = function (req, res) {
    var id = req.params.id;
    if (id >=0 && id < data.posts.length) {
	data.posts.splice(id, 1)
	res.json(true);
    } else {
	res.json(false);
    }
};
