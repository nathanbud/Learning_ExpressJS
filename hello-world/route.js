var express = require('express');
var app = express();

app.get('/:id', function(req, res){
    res.send('This id you specified is' + req.params.id);
});

app.listen(3001);