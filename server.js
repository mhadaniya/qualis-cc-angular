var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');

http.createServer(app).listen(app.get('port'), function() {
    console.log('Server listening... : ' + this.address().port);
});
