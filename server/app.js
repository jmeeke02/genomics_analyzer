var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var app = express();
var testObj = require('../dnaTests.js');

var convertJSON = require('./RawtoJSON.js');

app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

var rootPath = path.join(__dirname, '../');
var indexPath = path.join(rootPath, '/browser/index.html');

app.use(express.static(rootPath));
app.use(express.static(rootPath + 'node_modules'));

app.post('/upload', function (req, res) {
    var textData = req.body.data;
    fs.writeFile(path.join(rootPath, '/data/raw/user-upload.txt'), textData, 'utf8', function (e) {
        if (e) console.error(e);
        else convertJSON();
    });
});

app.get('/data/:key', function (req, res, next) {
	var testingSuite = testObj.tests;
	//check for a test subject
	if(req.params.key) var testSubject = testObj.subjects[Number(req.params.key)];
	else var testSubject = testObj.subjects[0];

	var generalResults = testObj.funcs.runGeneral(testingSuite.general, testSubject);
	var highRiskResults = testObj.funcs.runHighRisk(testingSuite.highrisk, testSubject);
	var highRiskCancerResults = testObj.funcs.runHigRiskCancer(testingSuite.highriskcancer, testSubject);
	var lowRiskResults = testObj.funcs.runLowRisk(testingSuite.lowrisk, testSubject);
	var preventionResults = testObj.funcs.runPrevention(testingSuite.prevent, testSubject);
	var immunityResults = testObj.funcs.runImmunity(testingSuite.immunity, testSubject);

	var totalHealthScore = 0;

	function aggregateTestData (results, factor) {
		var localAccumulator = 0;
		results.forEach(function (result){
			if(result.booleanVal){
				totalHealthScore += (Number(result.healthFactor) * result[factor]);	
				localAccumulator += (Number(result.healthFactor) * result[factor]);
			} 
		})
		console.log("total", totalHealthScore);
		return localAccumulator;
	}
	console.log('totalHealthScore', totalHealthScore);

	var profile = {
		healthScores: {
			highrisk:  aggregateTestData(highRiskResults, "riskMultiplier"),
			highriskcancer: aggregateTestData(highRiskCancerResults, "riskMultiplier"),
			lowrisk: aggregateTestData(lowRiskResults, "riskMultiplier"),
			prevention: aggregateTestData(preventionResults, "magnitude")
		},
		results: {
			general: generalResults,
			highrisk: highRiskResults,
			highriskcancer: highRiskCancerResults,
			lowrisk: lowRiskResults,
			prevent: preventionResults,
			immunity: immunityResults
		}
	}
	res.json(profile);
})





app.get('/', function (req, res) {
    res.sendFile(indexPath);
});

app.listen(3000, function () {
    console.log('Listening on 3000');
});