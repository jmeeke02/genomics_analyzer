
//GENOSET TEST MODULES
//GENERAL INFO
var maleTest = require('genoset-male');
maleTest.desc = "Is Male";

var baldTest = require('genoset-122');
baldTest.desc = "Is likely to go Bald";

var alcoholFlushTest = require('genoset-alcohol-flush-reaction');
alcoholFlushTest.desc = "Has asian glow?";

var lessCaffineStimulationCYP1A2Test = require('genoset-159');
lessCaffineStimulationCYP1A2Test.desc = "Has less caffine stimulation";

var bitterTasteTest = require('genoset-bitter');
bitterTasteTest.desc = "Won't taste bitterness";

var rapidMetabolismCYP2C19Test = require('genoset-150');
rapidMetabolismCYP2C19Test.desc = "Has a fast metabolism";

//HIGH RISK
var panicDisorderTest = require('genoset-209');
panicDisorderTest.desc = "High risk of panic disorders";

var lactoseIntoleranceTest = require('genoset-101');
lactoseIntoleranceTest.desc = "High risk of lactose intolerance";

var parkinsonsDiseaseHighRiskTest = require('genoset-249');
parkinsonsDiseaseHighRiskTest.desc = "High risk of Parkinsons disease";

var alzheimersHighRiskTest = require('genoset-alzheimer');
alzheimersHighRiskTest.desc = "High risk of Alzheimers disease";

var type1DiabetesTest = require('genoset-117');
type1DiabetesTest.desc = "High risk of type 1 Diabetes";

//HIGH-RISK CANCERs
var thyroidCancerTest = require('genoset-137');
thyroidCancerTest.desc = "High risk of thyroid cancer";

var basalCellCarcinoma123Test = require('genoset-123');
basalCellCarcinoma123Test.desc = "High risk of basal cell carcinoma123";

var basalCellCarcinoma126Test = require('genoset-126');
basalCellCarcinoma126Test.desc = "High risk of basal cell carcinoma126";

var breastCancer65Test = require('genoset-119');
breastCancer65Test.desc = "High risk of breast cancer";

var prostateCancerDeathRiskTest = require('genoset-248');
prostateCancerDeathRiskTest.desc = "High risk of prostate cancer death";

//LOW RISK
var parkinsonsDiseaseLowRiskTest = require('genoset-248');
parkinsonsDiseaseLowRiskTest.desc = "Low risk of parkinsons disease";

//PREVENTION
var poorMetabolizerCYP2C19Test = require('genoset-152');
poorMetabolizerCYP2C19Test.desc	= "Poor metabolizer of CYP2C19";

var poorMetabolizerCYP2C9Test = require('genoset-162');
poorMetabolizerCYP2C9Test.desc = "Poor metabolizer of CYP2C9";

//IMMUNITY
var norovirusTest = require('genoset-norovirus')
norovirusTest.desc = "Immune to norovirus";


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
		return diagnosticTest.desc + " : " + diagnosticTest(subject);
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