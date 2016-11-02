var db = require('../../config/database');

var api = {}

api.lista = function(req, res) {
    db.find({}).sort({estrato: 1}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

module.exports = api;
