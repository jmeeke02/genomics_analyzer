
//GENOSET TEST MODULES
//GENERAL INFO

var maleTest = require('genoset-male');
maleTest.key = "gender";
maleTest.desc = "Is Male";
maleTest.healthFactor = 0;
maleTest.snps = ["rs2032651", "rs2032651", "rs9341296", "rs9341296", "rs13304168", "rs13304168", "rs1118473", "rs150173", "rs1558843", "rs1558843", "rs16980426", "rs17222419"];
maleTest.link = "http://www.snpedia.com/index.php/Gs144";
maleTest.interpreter = function(data){
	if(this(data)) return {gender: 'Male'}
	else return {gender: 'Female'}
}

var gingerTest = require('./genoset-238');
gingerTest.key = "ginger";
gingerTest.desc = "Is Ginger";
gingerTest.healthFactor = 0;
gingerTest.snps = ["rs1805007", "rs1805008", "rs1805009"];
gingerTest.link = "http://www.snpedia.com/index.php/Gs238";

var baldTest = require('genoset-122');
baldTest.key = "bald";
baldTest.desc = "Is likely to go Bald";
baldTest.healthFactor = 0;
baldTest.snps = ["rs6625163", "rs1160312", "rs1160312", "rs201571", "rs6036025"];
baldTest.link = "http://www.snpedia.com/index.php/Gs122";
baldTest.interpreter = function(data){
	if(this(data)) return {bald: 'Likey to go bald'}
	else return {bald: 'Not likely to go bald'}
}


// var alcoholFlushTest = require('genoset-alcohol-flush-reaction');
// alcoholFlushTest.key = "flush";
// alcoholFlushTest.desc = "Has asian glow?";

var lessCaffineStimulationCYP1A2Test = require('genoset-159');
lessCaffineStimulationCYP1A2Test.key = "caffine";
lessCaffineStimulationCYP1A2Test.desc = "Has less caffine stimulation";
lessCaffineStimulationCYP1A2Test.healthFactor = 0;
lessCaffineStimulationCYP1A2Test.snps = ["rs762551", "rs12720461", "rs2069526", "rs28399424"];
lessCaffineStimulationCYP1A2Test.link = "http://www.snpedia.com/index.php/Gs159";
lessCaffineStimulationCYP1A2Test.interpreter = function(data){
	if(this(data)) return {caffine: 'Caffine has little effect'}
	else return {caffine: 'Caffine has a normal effect'}
}


var bitterTasteTest = require('genoset-bitter');
bitterTasteTest.key = "bitter";
bitterTasteTest.desc = "Cannot taste bitterness";
bitterTasteTest.snps = ["rs10246939", "rs713598", "rs1726866"];
bitterTasteTest.link = "http://www.snpedia.com/index.php/Gs184";
bitterTasteTest.healthFactor = 0;

var rapidMetabolismCYP2C19Test = require('genoset-150');
rapidMetabolismCYP2C19Test.key = "metabolismfast";
rapidMetabolismCYP2C19Test.desc = "Has a fast metabolism";
rapidMetabolismCYP2C19Test.snps = ["rs4244285", "rs17878459", "rs4986893", "rs28399504", "rs41291556", "rs17884712", "rs6413438", "rs17879685", "rs12248560", "rs5787121", "rs5787121"];
rapidMetabolismCYP2C19Test.link = "http://www.snpedia.com/index.php/Gs150";
rapidMetabolismCYP2C19Test.healthFactor = 0;

//HIGH RISK
var panicDisorderTest = require('genoset-209');
panicDisorderTest.key = "panic";
panicDisorderTest.desc = "High risk of panic disorders";
panicDisorderTest.snps = ['rs3794808', 'rs140701', 'rs4583306'];
panicDisorderTest.link = "http://www.snpedia.com/index.php/Gs209";
panicDisorderTest.riskMultiplier = 1.7;
panicDisorderTest.healthFactor = Number(-1);

var lactoseIntoleranceTest = require('genoset-101');
lactoseIntoleranceTest.key = "lactose";
lactoseIntoleranceTest.desc = "Not lactose intolerant";
lactoseIntoleranceTest.snps = ["rs4988235", "rs4988235", "rs182549", "rs182549"];
lactoseIntoleranceTest.link = "http://www.snpedia.com/index.php/Gs101";
lactoseIntoleranceTest.riskMultiplier = 0;
lactoseIntoleranceTest.healthFactor = 0;

var parkinsonsDiseaseHighRiskTest = require('genoset-249');
parkinsonsDiseaseHighRiskTest.key = "parkinsonshigh";
parkinsonsDiseaseHighRiskTest.desc = "High risk of Parkinsons disease";
parkinsonsDiseaseHighRiskTest.link = "http://www.snpedia.com/index.php/Gs249";
parkinsonsDiseaseHighRiskTest.snps = ["rs10513789", "rs10513789"];
parkinsonsDiseaseHighRiskTest.riskMultiplier = 2;
parkinsonsDiseaseHighRiskTest.healthFactor = Number(-1);

var alzheimersHighRiskTest = require('genoset-alzheimer');
alzheimersHighRiskTest.key = "alzheimershigh";
alzheimersHighRiskTest.desc = "High risk of Alzheimers disease";
alzheimersHighRiskTest.link = "http://www.snpedia.com/index.php/Gs293";
alzheimersHighRiskTest.snps = ["rs1049296", "rs1800562", "rs1049296", "rs1800562", "rs429358", "rs7412"];
alzheimersHighRiskTest.riskMultiplier = 37.5;
alzheimersHighRiskTest.healthFactor = Number(-1);

var type1DiabetesTest = require('genoset-117');
type1DiabetesTest.key = "diabetes1";
type1DiabetesTest.desc = "High risk of type 1 Diabetes";
type1DiabetesTest.link = "http://www.snpedia.com/index.php/Gs117";
type1DiabetesTest.snps = ["rs7454108", "rs2040410", "rs2040410"];
type1DiabetesTest.riskMultiplier = 4;
type1DiabetesTest.healthFactor = Number(-1);

//HIGH-RISK CANCERs
var thyroidCancerTest = require('genoset-137');
thyroidCancerTest.key = "thyroid";
thyroidCancerTest.desc = "High risk of thyroid cancer";
thyroidCancerTest.snps = ["rs965513", "rs944289"];
thyroidCancerTest.riskMultiplier = 5.7;
thyroidCancerTest.link = "http://www.snpedia.com/index.php/Gs137";
thyroidCancerTest.healthFactor = Number(-1);

var basalCellCarcinoma123Test = require('genoset-123');
basalCellCarcinoma123Test.key = "basal123";
basalCellCarcinoma123Test.desc = "High risk of basal cell carcinoma123";
basalCellCarcinoma123Test.snps = ["rs7538876", "rs801114 "];
basalCellCarcinoma123Test.link = "http://www.snpedia.com/index.php/Gs123";
basalCellCarcinoma123Test.riskMultiplier = 2.7;
basalCellCarcinoma123Test.healthFactor = Number(-1);

var breastCancer65Test = require('genoset-119');
breastCancer65Test.key = "breast";
breastCancer65Test.desc = "High risk of breast cancer";
breastCancer65Test.riskMultiplier = 6.5
breastCancer65Test.snps = ["rs1501299","rs2241766"];
breastCancer65Test.link = "http://www.snpedia.com/index.php/Gs119";
breastCancer65Test.healthFactor = Number(-1);

var prostateCancerDeathRiskTest = require('genoset-243');
prostateCancerDeathRiskTest.key = "prostate";
prostateCancerDeathRiskTest.desc = "High risk of prostate cancer death";
prostateCancerDeathRiskTest.link = "";
prostateCancerDeathRiskTest.snps = ["rs1137100", "rs627839", "rs2070874", "rs10778534", "rs5993891"];
prostateCancerDeathRiskTest.riskMultiplier = 2;
prostateCancerDeathRiskTest.healthFactor = Number(-1);

//LOW RISK
var parkinsonsDiseaseLowRiskTest = require('genoset-248');
parkinsonsDiseaseLowRiskTest.key = "parkinsonslow";
parkinsonsDiseaseLowRiskTest.desc = "Low risk of parkinsons disease";
parkinsonsDiseaseLowRiskTest.snps = ["rs34637584", "rs11755699"];
parkinsonsDiseaseLowRiskTest.link = "http://www.snpedia.com/index.php/Gs248";
parkinsonsDiseaseLowRiskTest.healthFactor = 1;

//PREVENTION
var sickleCellAnemiaTest =  require('./genoset-228');
sickleCellAnemiaTest.key = "sicklecell";
sickleCellAnemiaTest.desc = "Has sickle cell anemia";
sickleCellAnemiaTest.healthFactor = Number(-1);
sickleCellAnemiaTest.link = "http://www.snpedia.com/index.php/Gs228";
sickleCellAnemiaTest.snps = ["rs344", "i3003137"];
sickleCellAnemiaTest.magnitude = 6;

var poorMetabolizerCYP2C19Test = require('genoset-152');
poorMetabolizerCYP2C19Test.key = "metabolismslow19";
poorMetabolizerCYP2C19Test.desc	= "Poor metabolizer of CYP2C19";
poorMetabolizerCYP2C19Test.link = "http://www.snpedia.com/index.php/Gs152";
poorMetabolizerCYP2C19Test.snps = ["rs4244285", "rs17878459", "rs4986893", "rs57081121", "rs28399504", "rs41291556", "rs17884712", "rs6413438", "rs17879685", "rs4244285", "rs17878459"];
poorMetabolizerCYP2C19Test.magnitude = 3.5;
poorMetabolizerCYP2C19Test.healthFactor = Number(-1);

var poorMetabolizerCYP2C9Test = require('genoset-162');
poorMetabolizerCYP2C9Test.key = "metabolismslowC9";
poorMetabolizerCYP2C9Test.desc = "Poor metabolizer of CYP2C9 require different dosages for drugs such as tamoxifen, warfarin, fluvastin, and many nonsteroidal anti-inflammatory agents such as aspirin, ibuprofen and naproxen.";
poorMetabolizerCYP2C9Test.link = "http://www.snpedia.com/index.php/Gs162";
poorMetabolizerCYP2C9Test.snps = ["rs1799853", "rs1057910", "rs56165452", "rs28371686", "rs9332131", "rs7900194", "rs2256871", "rs9332130", "rs28371685", "rs9332239", "rs1057909", "rs2017319",  "rs1799853", "rs1057910", "rs56165452", "rs28371686"];
poorMetabolizerCYP2C9Test.magnitude = 3.3;
poorMetabolizerCYP2C9Test.healthFactor = Number(-1);

var poorMetabolizerWarfarin = require('./genoset-126.js');
poorMetabolizerWarfarin.key = "warfarin";
poorMetabolizerWarfarin.desc = "Poor metabolizer of the anticoagulan Warfarin";
poorMetabolizerWarfarin.healthFactor = Number(-1);
poorMetabolizerWarfarin.link =  "http://www.snpedia.com/index.php/Gs126";
poorMetabolizerWarfarin.magnitude = 3.5;
poorMetabolizerWarfarin.snps = ['rs1799853', 'rs1057910', 'rs1799853', 'rs1057910'];

//IMMUNITY
var norovirusTest = require('genoset-norovirus');
norovirusTest.key = "norovirus";
norovirusTest.desc = "Immune to norovirus";
norovirusTest.link = "http://www.snpedia.com/index.php/Rs601338";
norovirusTest.snps = ["rs601338"];
norovirusTest.healthFactor = 1;

//TEST LIST
var diagnosticsFullTestSuite =  [maleTest, gingerTest, baldTest, lessCaffineStimulationCYP1A2Test, bitterTasteTest, rapidMetabolismCYP2C19Test, panicDisorderTest, lactoseIntoleranceTest, parkinsonsDiseaseHighRiskTest, alzheimersHighRiskTest, type1DiabetesTest, thyroidCancerTest, basalCellCarcinoma123Test, breastCancer65Test, prostateCancerDeathRiskTest, sickleCellAnemiaTest,  poorMetabolizerCYP2C19Test, poorMetabolizerCYP2C9Test, poorMetabolizerWarfarin, norovirusTest];


var generalTestSuite = [maleTest, gingerTest, baldTest, lessCaffineStimulationCYP1A2Test, bitterTasteTest, rapidMetabolismCYP2C19Test];

var highRiskTestSuite = [panicDisorderTest, parkinsonsDiseaseHighRiskTest, alzheimersHighRiskTest, type1DiabetesTest];

var highRiskCancerTestSuite = [thyroidCancerTest, basalCellCarcinoma123Test, breastCancer65Test, prostateCancerDeathRiskTest];

var lowRiskTestSuite = [parkinsonsDiseaseLowRiskTest];

var preventativeTestSuite = [sickleCellAnemiaTest, poorMetabolizerCYP2C19Test, poorMetabolizerCYP2C9Test, poorMetabolizerWarfarin];

var immunityTestSuite = [norovirusTest];


var diagnosticsTestSuite = {
	general: generalTestSuite,
	highrisk: highRiskTestSuite,
	highriskcancer: highRiskCancerTestSuite,
	lowrisk: lowRiskTestSuite,
	prevent: preventativeTestSuite,
	immunity: immunityTestSuite
};


//TEST SUBJECTS
var dna = require('./data/json/23andme-male.json');
var dna2 = require('./data/json/ancestry-female.json');

//SUBJECT LIST
var testSubjects = [dna, dna2];

//DIAGNOSTIC TESTS RUNNER
function runDNAJSON (testSuite, subject){
	var testResults = testSuite.map(function(singleSuite, i) {
		return singleSuite.map(function(diagnosticTest ){
			return {
				key: diagnosticTest.key,
				booleanVal: diagnosticTest(subject),
				description: diagnosticTest.desc,
				healthFactor: diagnosticTest.healthFactor
			} 
		})	
	})
	return testResults;
}

function runGeneralTestSuite (tests, subject){
	return tests.map(function(diagnosticTest){
		return {
				key: diagnosticTest.key,
				booleanVal: diagnosticTest(subject),
				description: diagnosticTest.desc,
				healthFactor: diagnosticTest.healthFactor,
				snps: diagnosticTest.snps,
				link: diagnosticTest.link
			} 
	})
}

function runHighRiskTestSuite (tests, subject){
	return tests.map(function(diagnosticTest){
		return {
				key: diagnosticTest.key,
				booleanVal: diagnosticTest(subject),
				description: diagnosticTest.desc,
				healthFactor: diagnosticTest.healthFactor,
				riskMultiplier: diagnosticTest.riskMultiplier,
				snps: diagnosticTest.snps,
				link: diagnosticTest.link
			} 
	})
}

function runHighRiskCancerTestSuite (tests, subject){
	return tests.map(function(diagnosticTest){
		return {
				key: diagnosticTest.key,
				booleanVal: diagnosticTest(subject),
				description: diagnosticTest.desc,
				healthFactor: diagnosticTest.healthFactor,
				riskMultiplier: diagnosticTest.riskMultiplier,
				snps: diagnosticTest.snps,
				link: diagnosticTest.link
			} 
	})
}

function runLowRiskTestSuite (tests, subject){
	return tests.map(function(diagnosticTest){
		return {
				key: diagnosticTest.key,
				booleanVal: diagnosticTest(subject),
				description: diagnosticTest.desc,
				healthFactor: diagnosticTest.healthFactor,
				snps: diagnosticTest.snps,
				link: diagnosticTest.link
			} 
	})
}

function runPreventionTestSuite (tests, subject){
	return tests.map(function(diagnosticTest){
		return {
				key: diagnosticTest.key,
				booleanVal: diagnosticTest(subject),
				description: diagnosticTest.desc,
				healthFactor: diagnosticTest.healthFactor,
				magnitude: diagnosticTest.magnitude,
				snps: diagnosticTest.snps,
				link: diagnosticTest.link
			} 
	})
}

function runImmunityTestSuite (tests, subject){
	return tests.map(function(diagnosticTest){
		return {
				key: diagnosticTest.key,
				booleanVal: diagnosticTest(subject),
				description: diagnosticTest.desc,
				healthFactor: diagnosticTest.healthFactor,
				snps: diagnosticTest.snps,
				link: diagnosticTest.link
			} 
	})
}

var testSuiteObj = {
	funcs: {
		runAll: runDNAJSON,
		runGeneral: runGeneralTestSuite,
		runHighRisk: runHighRiskTestSuite,
		runHigRiskCancer: runHighRiskCancerTestSuite,
		runLowRisk: runLowRiskTestSuite,
		runPrevention: runPreventionTestSuite,
		runImmunity: runImmunityTestSuite
	},
	tests: diagnosticsTestSuite,
	subjects: testSubjects
};


module.exports = testSuiteObj