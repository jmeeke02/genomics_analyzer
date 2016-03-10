var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var rootPath = path.join(__dirname, '../');
var indexPath = path.join(rootPath, './browser/index.html');

app.use(express.static(rootPath));
app.use(express.static(rootPath + '/node_modules'));

app.get('/', function (req, res) {
    res.sendFile(indexPath);
});

app.listen(3000, function () {
    console.log('Listening on 3000');
});