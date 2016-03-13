var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var app = express();
var testObj = require('../dnaTests.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var rootPath = path.join(__dirname, '../');
var indexPath = path.join(rootPath, '/browser/index.html');

app.use(express.static(rootPath));
app.use(express.static(rootPath + 'node_modules'));



app.get('/data', function (req, res, next) {
	console.log('getting data');
	var testingSuite = testObj.tests;
	var testSubject = testObj.subjects[1];

	var generalResults = testObj.funcs.runGeneral(testingSuite.general, testSubject);
	var highRiskResults = testObj.funcs.runHighRisk(testingSuite.highrisk, testSubject);
	var highRiskCancerResults = testObj.funcs.runHigRiskCancer(testingSuite.highriskcancer, testSubject);
	var lowRiskResults = testObj.funcs.runLowRisk(testingSuite.lowrisk, testSubject);
	var preventionResults = testObj.funcs.runPrevention(testingSuite.prevent, testSubject);
	var immunityResults = testObj.funcs.runImmunity(testingSuite.immunity, testSubject);
	var totalHealthScore = 0;
	var totalRiskHealthScore = 0;
	highRiskResults.forEach(function (result){
		if(result.booleanVal){
			totalHealthScore += (Number(result.healthFactor) * result.riskMultiplier);
			totalRiskHealthScore += (Number(result.healthFactor) * result.riskMultiplier);
		} 
	})
	var totalCancerRiskHealthScore = 0;
	highRiskCancerResults.forEach(function (result){
		if(result.booleanVal) {
			totalHealthScore += (Number(result.healthFactor) * result.riskMultiplier);
			totalCancerRiskHealthScore += (Number(result.healthFactor) * result.riskMultiplier);
		} 
	})
	var totalLowRiskHealthScore = 0;
	lowRiskResults.forEach(function (result){
		if(result.booleanVal) {
			totalHealthScore += (Number(result.healthFactor) * result.riskMultiplier);
			totalLowRiskHealthScore += (Number(result.healthFactor) * result.riskMultiplier);
		} 
	})
	var totalPreventionHealthScore = 0;
	preventionResults.forEach(function (result){
		if(result.booleanVal){
			totalHealthScore += (Number(result.healthFactor) * result.magnitude);	
			totalPreventionHealthScore += (Number(result.healthFactor) * result.magnitude);
		} 
	})
	
	var profile = {
		healthScores: {
			total:  totalHealthScore,
			highrisk: totalRiskHealthScore,
			highriskcancer: totalCancerRiskHealthScore,
			lowrisk: totalLowRiskHealthScore,
			prevention: totalPreventionHealthScore
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