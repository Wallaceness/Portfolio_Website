'use strict';
/* eslint-disable global-require */

var bodyparser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/", express.static(__dirname+"/dist/portfolio"));

var port = app.listen(process.env.PORT || 8080);
app.listen(port, function() {
    console.log("Server working!");
})

app.get('*', function(request, response) {
    console.log(request.body);
    response.sendFile('/index.html');
})
