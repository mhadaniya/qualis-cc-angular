var Datastore = require('nedb')
    ,dbName = 'qualis-cc.db'
    ,db;

if(!db) {
    db = new Datastore({
        filename: dbName,
        autoload: true
    });
    console.log('Banco ' + dbName + ' pronto para uso')
}

module.exports = db;
