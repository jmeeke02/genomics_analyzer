var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/node_modules'));

app.use('/tests', require())

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/browser/index.html');
});

app.listen(3000, function () {
    console.log('Listening on 3000');
});