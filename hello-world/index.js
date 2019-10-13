var express = require('Express');
var app = express();

var things = require('./things.js');
var notFound = require('./notFound.js');

// app.get('/hello', function(req, res){
//     res.send("Hello World");
// });

// app.post('/hello', function(req, res){
//     res.send("You just called the post method at '/hello' !\n ");
// });

app.use('/things', things);
app.use('/notFound', notFound);

app.listen(3000);

