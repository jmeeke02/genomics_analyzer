var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var app = express();
var testObj = require('../tests/dnaTests.js');

var convertJSON = require('./RawtoJSON.js');

app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

var rootPath = path.join(__dirname, '../');
var indexPath = path.join(rootPath, '/browser/index.html');

app.use(express.static(rootPath));
app.use(express.static(rootPath + 'node_modules'));

app.post('/upload', function (req, res, next) {
    var textData = req.body.data;
    fs.writeFile(path.join(rootPath, '/data/raw/user-upload.txt'), textData, 'utf8', function (e) {
        if (e) console.error(e);
        else{
        	convertJSON();
        	res.sendStatus(201);
        } 
    });
});

app.get('/data/:key', function (req, res, next) {
	var testingSuite = testObj.tests;
	//check for a test subject
	if(req.params.key) var testSubject = testObj.subjects[Number(req.params.key)];
	else var testSubject = testObj.subjects[0];

	//sending back a json object with the agreggated scores and the results of each test
	var profile = {};
	profile.results = {
			general: testObj.funcs.testrunner(testingSuite.general, testSubject),
			highrisk: testObj.funcs.testrunner(testingSuite.highrisk, testSubject, 'risk'),
			highriskcancer: testObj.funcs.testrunner(testingSuite.highriskcancer, testSubject, 'risk'),
			lowrisk: testObj.funcs.testrunner(testingSuite.lowrisk, testSubject, 'risk'),
			prevent: testObj.funcs.testrunner(testingSuite.prevent, testSubject, 'prevention'),
			immunity: testObj.funcs.testrunner(testingSuite.immunity, testSubject),
		};

	profile.healthScores = {
			highrisk:  testObj.funcs.aggregateTestData(profile.results.highrisk, "riskMultiplier"),
			highriskcancer: testObj.funcs.aggregateTestData(profile.results.highriskcancer, "riskMultiplier"),
			lowrisk: testObj.funcs.aggregateTestData(profile.results.lowrisk, "riskMultiplier"),
			prevention: testObj.funcs.aggregateTestData(profile.results.prevent, "magnitude")
		};
	res.json(profile);
})


app.get('/', function (req, res) {
    res.sendFile(indexPath);
});

app.listen(3000, function () {
    console.log('Listening on 3000');
});