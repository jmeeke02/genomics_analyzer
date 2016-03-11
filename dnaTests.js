
//GENOSET TEST MODULES
//GENERAL INFO
var maleTest = require('genoset-male');
maleTest.key = "gender";
maleTest.desc = "Is Male";
maleTest.healthFactor = 0;
maleTest.interpreter = function(data){
	if(this(data)) return {gender: 'Male'}
	else return {gender: 'Female'}
}


var baldTest = require('genoset-122');
baldTest.key = "bald";
baldTest.desc = "Is likely to go Bald";
baldTest.healthFactor = 0;
baldTest.interpreter = function(data){
	if(this(data)) return {bald: 'Likey to go bald'}
	else return {bald: 'Not likely to go bald'}
}


var alcoholFlushTest = require('genoset-alcohol-flush-reaction');
alcoholFlushTest.key = "flush";
alcoholFlushTest.desc = "Has asian glow?";

var lessCaffineStimulationCYP1A2Test = require('genoset-159');
lessCaffineStimulationCYP1A2Test.key = "caffine";
lessCaffineStimulationCYP1A2Test.desc = "Has less caffine stimulation";
lessCaffineStimulationCYP1A2Test.healthFactor = 0;
lessCaffineStimulationCYP1A2Test.interpreter = function(data){
	if(this(data)) return {caffine: 'Caffine has little effect'}
	else return {caffine: 'Caffine has a normal effect'}
}


var bitterTasteTest = require('genoset-bitter');
bitterTasteTest.key = "bitter";
bitterTasteTest.desc = "Cannot taste bitterness";
bitterTasteTest.healthFactor = 0;

var rapidMetabolismCYP2C19Test = require('genoset-150');
rapidMetabolismCYP2C19Test.key = "metabolismfast";
rapidMetabolismCYP2C19Test.desc = "Has a fast metabolism";
rapidMetabolismCYP2C19Test.healthFactor = 0;

//HIGH RISK
var panicDisorderTest = require('genoset-209');
panicDisorderTest.key = "panic";
panicDisorderTest.desc = "High risk of panic disorders";
panicDisorderTest.healthFactor = Number(-1);

var lactoseIntoleranceTest = require('genoset-101');
lactoseIntoleranceTest.key = "lactose";
lactoseIntoleranceTest.desc = "High risk of lactose intolerance";
lactoseIntoleranceTest.healthFactor = 0;

var parkinsonsDiseaseHighRiskTest = require('genoset-249');
parkinsonsDiseaseHighRiskTest.key = "parkinsonshigh";
parkinsonsDiseaseHighRiskTest.desc = "High risk of Parkinsons disease";
parkinsonsDiseaseHighRiskTest.healthFactor = Number(-1);

var alzheimersHighRiskTest = require('genoset-alzheimer');
alzheimersHighRiskTest.key = "alzheimershigh";
alzheimersHighRiskTest.desc = "High risk of Alzheimers disease";
alzheimersHighRiskTest.healthFactor = Number(-1);

var type1DiabetesTest = require('genoset-117');
type1DiabetesTest.key = "diabetes1";
type1DiabetesTest.desc = "High risk of type 1 Diabetes";
type1DiabetesTest.healthFactor = Number(-1);

//HIGH-RISK CANCERs
var thyroidCancerTest = require('genoset-137');
thyroidCancerTest.key = "thyroid";
thyroidCancerTest.desc = "High risk of thyroid cancer";
thyroidCancerTest.healthFactor = Number(-1);

var basalCellCarcinoma123Test = require('genoset-123');
basalCellCarcinoma123Test.key = "basal123";
basalCellCarcinoma123Test.desc = "High risk of basal cell carcinoma123";
basalCellCarcinoma123Test.healthFactor = Number(-1);

var basalCellCarcinoma126Test = require('genoset-126');
basalCellCarcinoma126Test.key = "basal126";
basalCellCarcinoma126Test.desc = "High risk of basal cell carcinoma126";
basalCellCarcinoma126Test.healthFactor = Number(-1);

var breastCancer65Test = require('genoset-119');
breastCancer65Test.key = "breast";
breastCancer65Test.desc = "High risk of breast cancer";
breastCancer65Test.healthFactor = Number(-1);

var prostateCancerDeathRiskTest = require('genoset-248');
prostateCancerDeathRiskTest.key = "prostate";
prostateCancerDeathRiskTest.desc = "High risk of prostate cancer death";
prostateCancerDeathRiskTest.healthFactor = Number(-1);

//LOW RISK
var parkinsonsDiseaseLowRiskTest = require('genoset-248');
parkinsonsDiseaseLowRiskTest.key = "parkinsonslow";
parkinsonsDiseaseLowRiskTest.desc = "Low risk of parkinsons disease";
parkinsonsDiseaseLowRiskTest.healthFactor = 1;

//PREVENTION
var poorMetabolizerCYP2C19Test = require('genoset-152');
poorMetabolizerCYP2C19Test.key = "metabolismslow19";
poorMetabolizerCYP2C19Test.desc	= "Poor metabolizer of CYP2C19";
poorMetabolizerCYP2C19Test.healthFactor = Number(-0.5);

var poorMetabolizerCYP2C9Test = require('genoset-162');
poorMetabolizerCYP2C9Test.key = "metabolismslowC9";
poorMetabolizerCYP2C9Test.desc = "Poor metabolizer of CYP2C9";
poorMetabolizerCYP2C9Test.healthFactor = Number(-0.5);

//IMMUNITY
var norovirusTest = require('genoset-norovirus');
norovirusTest.key = "norovirus";
norovirusTest.desc = "Immune to norovirus";
norovirusTest.healthFactor = 1;


//TEST LIST
var diagnosticsTestSuite =  [maleTest, baldTest, lessCaffineStimulationCYP1A2Test, bitterTasteTest, rapidMetabolismCYP2C19Test, panicDisorderTest, lactoseIntoleranceTest, parkinsonsDiseaseHighRiskTest, alzheimersHighRiskTest, type1DiabetesTest, thyroidCancerTest, basalCellCarcinoma123Test, basalCellCarcinoma126Test, breastCancer65Test, prostateCancerDeathRiskTest,  poorMetabolizerCYP2C19Test, poorMetabolizerCYP2C9Test, norovirusTest];


//TEST SUBJECTS
var dna = require('./data/json/23andme-male.json');
var dna2 = require('./data/json/ancestry-female.json');

//SUBJECT LIST
var testSubjects = [dna, dna2];



//DIAGNOSTIC TESTS RUNNER
function runDNAJSON (testSuite, subject){
	var testResults = testSuite.map(function(diagnosticTest, i) {
		return {
				key: diagnosticTest.key,
				booleanVal: diagnosticTest(subject),
				description: diagnosticTest.desc,
				healthFactor: diagnosticTest.healthFactor
			} 
	})
	return testResults;
}

var testSuiteObj = {
	DNAJSON: runDNAJSON,
	tests: diagnosticsTestSuite,
	subjects: testSubjects
};

//run diagnostics for each user in list
// runDNAJSON(testSubjects, diagnosticsTestSuite);

module.exports = testSuiteObj