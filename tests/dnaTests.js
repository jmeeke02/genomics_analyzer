var path = require('path');
var diagnosticsTestSuite = require('./genosets/meta-data');

//TEST SUBJECTS
var rootPath = path.join(__dirname, '../');
var dna = require(path.join(rootPath,'data/json/23andme-male.json'));
var dna2 = require(path.join(rootPath,'data/json/ancestry-female.json'));
var dna3 = require(path.join(rootPath, 'data/json/family-tree-male.json'));
var dna4 = require(path.join(rootPath, 'data/json/user-upload.json'));

//SUBJECT LIST
var testSubjects = [dna, dna2, dna3, dna4];

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


//INDIVIDUAL TESTING SUITE TYPE RUNNERS

//ABSTRACT THESE TESTS so they all run the same with just small differences
//ex:
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

			//Calculate health score totals
			//localAccumulator is the result of score combos for a specific test suite (highrisk, lowrisk, prevention, immunity etc);

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