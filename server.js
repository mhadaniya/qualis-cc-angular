var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');

http.createServer(app).listen(3001, function() {
    console.log('Server listening... : ' + this.address().port);
});
