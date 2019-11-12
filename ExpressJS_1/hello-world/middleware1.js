const express = require('express');
const app = express();

app.use(function(req, res, next){
console.log("Today is" + Date.now());

//function/route handler
next();
})

app.listen('3000');