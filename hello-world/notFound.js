var express = require('express');
var app = express.Router();

app.get('/', function(req, res){
    res.send("Sorry the file is not found");
});

app.post('/', function(req, res){
    res.send('POST route on things');
});

module.exports = router;