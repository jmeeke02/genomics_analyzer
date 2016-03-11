var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var app = express();
var data = require('../dnaTests.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var rootPath = path.join(__dirname, '../');
var indexPath = path.join(rootPath, '/browser/index.html');

app.use(express.static(rootPath));
app.use(express.static(rootPath + 'node_modules'));



app.get('/data', function (req, res, next) {
	console.log('getting data');
	var testingSuite = data.tests;
	var testSubject = data.subjects[0];
	var results = data.DNAJSON(testingSuite, testSubject);
	var totalHealthScore = 0;
	results.forEach(function (result){
		if(result.booleanVal) totalHealthScore += Number(result.healthFactor);
		console.log('results', result, totalHealthScore);
	})
	var profile = {
		keyResults: results,
		healthScore: totalHealthScore
	}
	res.json(profile);
})

app.get('/', function (req, res) {
    res.sendFile(indexPath);
});

app.listen(3000, function () {
    console.log('Listening on 3000');
});