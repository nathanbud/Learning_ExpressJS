var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('GET router on things');
});

router.post('/', function(req, res){
    res.send('POST route on things');
});

//export this router to use in our index.js
module.exports = router;