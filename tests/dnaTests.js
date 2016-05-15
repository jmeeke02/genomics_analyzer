var path = require('path');
var diagnosticsTestSuite = require('./genosets/meta-data');
var testSubjects = require('./subjects/cluster');

//DIAGNOSTIC TESTS RUNNER
function runDNAJSON (testSuite, subject){
	var testResults = testSuite.map(function(singleSuite, i) {
		return singleSuite.map(function(diagnosticTest ){
			return {
				key: diagnosticTest.key,
				booleanVal: diagnosticTest(subject),
				description: diagnosticTest.desc,
				healthFactor: diagnosticTest.healthFactor
			};
		});
	});
	return testResults;
}


//INDIVIDUAL TESTING SUITE RUNNER
function testRunner (tests, subject, testingType){
	return tests.map(function(diagnosticTest){
		var testObject = {
				key: diagnosticTest.key,
				booleanVal: diagnosticTest(subject),
				description: diagnosticTest.desc,
				healthFactor: diagnosticTest.healthFactor,
				snps: diagnosticTest.snps,
				link: diagnosticTest.link,
				chromosomes: diagnosticTest.chromosomes
			}
		if(testingType === 'risk') testObject.riskMultiplier = diagnosticTest.riskMultiplier;
		if(testingType === 'prevention') testObject.magnitude = diagnosticTest.magnitude;
		return testObject;
	})
}

function aggregateTestData (results, factor) {
	var localAccumulator = 0;
	results.forEach(function (result){
		if(result.booleanVal){
			//take the result.healthFactor (either +1 || -1) * the result[factor] either riskMultiplier or magnitue for prevention tests
			//just letting us sub in the factor depending on the testing suite
			localAccumulator += (Number(result.healthFactor) * result[factor]);
		} 
	})
	return localAccumulator;
}

//TEST SUITE CONSTRUCTION
var testSuiteObj = {
	funcs: {
		runAll: runDNAJSON,
		testrunner: testRunner,
		aggregateTestData: aggregateTestData,
	},
	tests: diagnosticsTestSuite,
	subjects: testSubjects
};


module.exports = testSuiteObj;