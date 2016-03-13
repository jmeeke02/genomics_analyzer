
//GENOSET TEST MODULES
//GENERAL INFO

var maleTest = require('genoset-male');
maleTest.key = "gender";
maleTest.desc = "Is Male";
maleTest.healthFactor = 0;
maleTest.snps = ["rs2032651", "rs9341296", "rs13304168", "rs1118473", "rs150173", "rs1558843", "rs1558843", "rs16980426", "rs17222419"];
maleTest.chromosomes = "Y";
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
gingerTest.chromosomes = "16";
gingerTest.link = "http://www.snpedia.com/index.php/Gs238";

var baldTest = require('genoset-122');
baldTest.key = "bald";
baldTest.desc = "Is likely to go Bald";
baldTest.healthFactor = 0;
baldTest.snps = ["rs6625163", "rs1160312", "rs1160312", "rs201571", "rs6036025"];
baldTest.chromosomes = "X & 20";
baldTest.link = "http://www.snpedia.com/index.php/Gs122";
baldTest.interpreter = function(data){
	if(this(data)) return {bald: 'Likey to go bald'}
	else return {bald: 'Not likely to go bald'}
}

var blueEyesTest = require('./genoset-257');
blueEyesTest.key = 'blue';
blueEyesTest.desc = "Blue eye haplotype #2";
blueEyesTest.healthFactor = 0;
blueEyesTest.snps = ['rs1129038', 'rs12913832'];
blueEyesTest.chromosomes = "15";
blueEyesTest.link = 'http://www.snpedia.com/index.php/Gs257';


// var alcoholFlushTest = require('genoset-alcohol-flush-reaction');
// alcoholFlushTest.key = "flush";
// alcoholFlushTest.desc = "Has asian glow?";

var lessCaffineStimulationCYP1A2Test = require('genoset-159');
lessCaffineStimulationCYP1A2Test.key = "caffine";
lessCaffineStimulationCYP1A2Test.desc = "Has less caffine stimulation";
lessCaffineStimulationCYP1A2Test.healthFactor = 0;
lessCaffineStimulationCYP1A2Test.snps = ["rs762551", "rs12720461", "rs2069526", "rs28399424"];
lessCaffineStimulationCYP1A2Test.chromosomes = "15";
lessCaffineStimulationCYP1A2Test.link = "http://www.snpedia.com/index.php/Gs159";
lessCaffineStimulationCYP1A2Test.interpreter = function(data){
	if(this(data)) return {caffine: 'Caffine has little effect'}
	else return {caffine: 'Caffine has a normal effect'}
}


var bitterTasteTest = require('genoset-bitter');
bitterTasteTest.key = "bitter";
bitterTasteTest.desc = "Cannot taste bitterness";
bitterTasteTest.snps = ["rs10246939", "rs713598", "rs1726866"];
bitterTasteTest.chromosomes = "7";
bitterTasteTest.link = "http://www.snpedia.com/index.php/Gs184";
bitterTasteTest.healthFactor = 0;

var rapidMetabolismCYP2C19Test = require('genoset-150');
rapidMetabolismCYP2C19Test.key = "metabolismfast";
rapidMetabolismCYP2C19Test.desc = "Has a fast metabolism";
rapidMetabolismCYP2C19Test.snps = ["rs4244285", "rs17878459", "rs4986893", "rs28399504", "rs41291556", "rs17884712", "rs6413438", "rs17879685", "rs12248560", "rs5787121"];
rapidMetabolismCYP2C19Test.chromosomes = "10";
rapidMetabolismCYP2C19Test.link = "http://www.snpedia.com/index.php/Gs150";
rapidMetabolismCYP2C19Test.healthFactor = 0;

var lactoseIntoleranceTest = require('genoset-101');
lactoseIntoleranceTest.key = "lactose";
lactoseIntoleranceTest.desc = "Not lactose intolerant";
lactoseIntoleranceTest.snps = ["rs4988235", "rs4988235", "rs182549", "rs182549"];
lactoseIntoleranceTest.chromosomes = "2";
lactoseIntoleranceTest.link = "http://www.snpedia.com/index.php/Gs101";
lactoseIntoleranceTest.riskMultiplier = 0;
lactoseIntoleranceTest.healthFactor = 0;

//HIGH RISK
var panicDisorderTest = require('genoset-209');
panicDisorderTest.key = "panic";
panicDisorderTest.desc = "High risk of panic disorders";
panicDisorderTest.snps = ['rs3794808', 'rs140701', 'rs4583306'];
panicDisorderTest.link = "http://www.snpedia.com/index.php/Gs209";
panicDisorderTest.riskMultiplier = 1.7;
panicDisorderTest.healthFactor = Number(-1);


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
alzheimersHighRiskTest.riskMultiplier = 3.75;
alzheimersHighRiskTest.healthFactor = Number(-1);

var type1DiabetesTest = require('genoset-117');
type1DiabetesTest.key = "diabetes1";
type1DiabetesTest.desc = "High risk of type 1 Diabetes";
type1DiabetesTest.link = "http://www.snpedia.com/index.php/Gs117";
type1DiabetesTest.snps = ["rs7454108", "rs2040410", "rs2040410"];
type1DiabetesTest.riskMultiplier = 4;
type1DiabetesTest.healthFactor = Number(-1);

var venousThrombosisTest = require('./genoset-251');
venousThrombosisTest.key = "venousthrombosis";
venousThrombosisTest.desc = "Associated with a 3-4-fold increased risk of venous thrombosis";
venousThrombosisTest.link = "http://www.snpedia.com/index.php/Gs251";
venousThrombosisTest.snps = ['rs6025', 'rs1800595'];
venousThrombosisTest.riskMultiplier = 4;
venousThrombosisTest.healthFactor = Number(-1);

var macularDegenerationTest = require('./genoset-134')
macularDegenerationTest.key = "maculardegeneration";
macularDegenerationTest.desc = "Increased risk of age related macular degeneration"
macularDegenerationTest.link = "http://www.snpedia.com/index.php/Gs134";
macularDegenerationTest.snps = ["rs380390", "rs3793784"];
macularDegenerationTest.riskMultiplier = 2.5;
macularDegenerationTest.healthFactor = Number(-1);

var rheumatoidArthritisRiskTest = require('./genoset-108');
rheumatoidArthritisRiskTest.key = "arthritis";
rheumatoidArthritisRiskTest.desc = "This genoset may indicate the haplotype CTCC which has been linked to rheumatoid arthritis";
rheumatoidArthritisRiskTest.link = 'http://www.snpedia.com/index.php/Gs108'
rheumatoidArthritisRiskTest.snps = ["rs6311", "rs1328674", "rs6313", "rs6314"];
rheumatoidArthritisRiskTest.riskMultiplier = 2;
rheumatoidArthritisRiskTest.healthFactor = Number (-1);

var bh4RiskTest = require('./genoset-224');
bh4RiskTest.key = "bh4";
bh4RiskTest.desc = "Associated with lower levels of tetrahydrobiopterin (BH4) used in serotonin and dopamine.";
bh4RiskTest.link = "http://www.snpedia.com/index.php/Gs224";
bh4RiskTest.snps = ['rs10483639', 'rs3783641', 'rs8007267'];
bh4RiskTest.riskMultiplier = 3;
bh4RiskTest.healthFactor = 0;

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
breastCancer65Test.key = "breast65";
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

var malignantMelanomaTest = require('./genoset-195');
malignantMelanomaTest.key = "melanoma";
malignantMelanomaTest.desc = "Has a very significant risk factor for malignant melanoma."
malignantMelanomaTest.link = "http://www.snpedia.com/index.php/Gs195"
malignantMelanomaTest.snps = ['rs4516035','rs7139166'];
malignantMelanomaTest.riskMultiplier = 2.5;
malignantMelanomaTest.healthFactor = Number(-1);

var colorectalCancerTest = require('./genoset-298');
colorectalCancerTest.key = 'colorectal';
colorectalCancerTest.desc = 'This genoset detects the ~10% of the population having either 3 or more risk alleles, or 3 at-risk genotypes, at 3 SNPs associated with colorectal cancer.';
colorectalCancerTest.link = 'http://www.snpedia.com/index.php/Gs298';
colorectalCancerTest.snps = ['rs16892766', 'rs16892766', 'rs4779584', 'rs4779584', 'rs58920878', 'rs58920878'];
colorectalCancerTest.riskMultiplier = 3;
colorectalCancerTest.healthFactor = Number(-1);

var ovarianCancerTest = require('./genoset-286');
ovarianCancerTest.key = "ovarian";
ovarianCancerTest.desc = "Haplotype of the progesterone receptor gene PGR which has been linked with  1.98x increased ovarian cancer and endometrial cancer risk for caucasian women."
ovarianCancerTest.link = "http://www.snpedia.com/index.php/Gs286";
ovarianCancerTest.snps =  ['rs568157','rs481775','rs529359','rs565186','rs613120','rs543215','rs516693','rs660541','rs1042838','rs608995','rs1870019']
ovarianCancerTest.riskMultiplier = 1.98;
ovarianCancerTest.healthFactor = Number(-1);

breastCancer120Test = require('./genoset-120');
breastCancer120Test.key = "breast120";
breastCancer120Test.desc = "4x higher breast cancer risk. adiponectin intermediate signaler";
breastCancer120Test.link = "http://www.snpedia.com/index.php/Gs120";
breastCancer120Test.snps = ['rs1501299', 'rs2241766' ];
breastCancer120Test.riskMultiplier = 4;
breastCancer120Test.healthFactor = Number(-1);

var esophagealCancerTest = require('./genoset-244');
esophagealCancerTest.key = 'esophageal';
esophagealCancerTest.desc = "You have a total of 3 or 4 SNP variants (out of 6) associated in Han Chinese with increased risk for esophageal squamous cell cancer.";
esophagealCancerTest.link = "http://www.snpedia.com/index.php/Gs244";
esophagealCancerTest.snps = ['rs11066015', 'rs10052657', 'rs2014300', 'rs2074356', 'rs10484761', 'rs2274223'];
esophagealCancerTest.riskMultiplier = 2;
esophagealCancerTest.healthFactor = Number(-1);

//LOW RISK
var parkinsonsDiseaseLowRiskTest = require('genoset-248');
parkinsonsDiseaseLowRiskTest.key = "parkinsonslow";
parkinsonsDiseaseLowRiskTest.desc = "Low risk of parkinsons disease";
parkinsonsDiseaseLowRiskTest.snps = ["rs34637584", "rs11755699"];
parkinsonsDiseaseLowRiskTest.link = "http://www.snpedia.com/index.php/Gs248";
parkinsonsDiseaseLowRiskTest.riskMultiplier = 0.5;
parkinsonsDiseaseLowRiskTest.healthFactor = 1;

var heartAttackLowRiskTest = require('./genoset-291');
heartAttackLowRiskTest.key = "heartattacklow";
heartAttackLowRiskTest.desc = " This genoset is reported as having 0.35x the risk of a heart attack or cardiovascular incident compared to people who carry zero of the minor alleles for these two SNPs";
heartAttackLowRiskTest.snps = ['rs1108580', 'rs1611115'];
heartAttackLowRiskTest.link = "http://www.snpedia.com/index.php/Gs291";
heartAttackLowRiskTest.riskMultiplier = 0.35;
heartAttackLowRiskTest.healthFactor = 1;

var heartAttackLowRisk295Test = require('./genoset-295');
heartAttackLowRisk295Test.key = "heartattacklow2";
heartAttackLowRisk295Test.desc = "This genoset is reported as having 0.46x the risk of a heart attack or cardiovascular incident."
heartAttackLowRisk295Test.snps = ['rs1108580', 'rs1611115'];
heartAttackLowRisk295Test.link = "http://www.snpedia.com/index.php/Gs295";
heartAttackLowRisk295Test.riskMultiplier = 0.46;
heartAttackLowRisk295Test.healthFactor = 1;

var bloodPressureLowRisk = require('./genoset-265');
bloodPressureLowRisk.key= "bloodpressure";
bloodPressureLowRisk.desc = "Associated with decreased diastolic blood pressure levels";
bloodPressureLowRisk.snps = ['rs6046', 'rs5355'];
bloodPressureLowRisk.link = "http://www.snpedia.com/index.php/Gs265";
bloodPressureLowRisk.riskMultiplier = 0.3;
bloodPressureLowRisk.healthFactor = 1;

var betterEpisodicMemoryTest = require('./genoset-278');
betterEpisodicMemoryTest.key = "bettermemory";
betterEpisodicMemoryTest.desc = "Older adults having this combination of genotypes from the DRD2 (glutamate) and NR3A (aspartate) associated receptors show better episodic memory performance compared to all other genotypes.";
betterEpisodicMemoryTest.snps = ['rs6277', 'rs10989591']
betterEpisodicMemoryTest.link = "http://www.snpedia.com/index.php/Gs278";
betterEpisodicMemoryTest.riskMultiplier = 0.15;
betterEpisodicMemoryTest.healthFactor = 1;

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

var lessMultivitaminResponseTest = require('./genoset-231');
lessMultivitaminResponseTest.key = 'multivitamin';
lessMultivitaminResponseTest.desc = 'You have the genotype which is suspected of not responding to multivitamins.';
lessMultivitaminResponseTest.healthFactor = Number(-1);
lessMultivitaminResponseTest.magnitude = 3;
lessMultivitaminResponseTest.link = 'http://www.snpedia.com/index.php/Gs231';
lessMultivitaminResponseTest.snps = ["rs1801131", "rs1801133"];

var impairedNSAIDMetabolismTest = require('./genoset-191');
impairedNSAIDMetabolismTest.key = 'nsaid';
impairedNSAIDMetabolismTest.desc = 'Impaired NSAID drug metabolism, which is a risk factor for gastrointestinal bleeding when taking certain medications.';
impairedNSAIDMetabolismTest.healthFactor = Number(-1);
impairedNSAIDMetabolismTest.magnitude = 3.1;
impairedNSAIDMetabolismTest.link = 'http://www.snpedia.com/index.php/Gs191';
impairedNSAIDMetabolismTest.snps = ["rs1799853", "rs1057910", "rs11572080"];

//IMMUNITY
var norovirusTest = require('genoset-norovirus');
norovirusTest.key = "norovirus";
norovirusTest.desc = "Immune to norovirus";
norovirusTest.link = "http://www.snpedia.com/index.php/Rs601338";
norovirusTest.snps = ["rs601338"];
norovirusTest.healthFactor = 1;

//TEST LIST
var diagnosticsFullTestSuite =  [maleTest, gingerTest, baldTest, lessCaffineStimulationCYP1A2Test, bitterTasteTest, rapidMetabolismCYP2C19Test, panicDisorderTest, lactoseIntoleranceTest, parkinsonsDiseaseHighRiskTest, alzheimersHighRiskTest, type1DiabetesTest, thyroidCancerTest, basalCellCarcinoma123Test, breastCancer65Test, prostateCancerDeathRiskTest, sickleCellAnemiaTest,  poorMetabolizerCYP2C19Test, poorMetabolizerCYP2C9Test, poorMetabolizerWarfarin, norovirusTest];


var generalTestSuite = [maleTest, gingerTest, baldTest, blueEyesTest, lessCaffineStimulationCYP1A2Test, bitterTasteTest, rapidMetabolismCYP2C19Test, lactoseIntoleranceTest];

var highRiskTestSuite = [panicDisorderTest, parkinsonsDiseaseHighRiskTest, alzheimersHighRiskTest, type1DiabetesTest, venousThrombosisTest, macularDegenerationTest, rheumatoidArthritisRiskTest, bh4RiskTest];

var highRiskCancerTestSuite = [thyroidCancerTest, basalCellCarcinoma123Test, breastCancer65Test, prostateCancerDeathRiskTest, malignantMelanomaTest, colorectalCancerTest, ovarianCancerTest, breastCancer120Test, esophagealCancerTest];

var lowRiskTestSuite = [parkinsonsDiseaseLowRiskTest, heartAttackLowRiskTest, bloodPressureLowRisk, heartAttackLowRisk295Test, betterEpisodicMemoryTest];

var preventativeTestSuite = [sickleCellAnemiaTest, poorMetabolizerCYP2C19Test, impairedNSAIDMetabolismTest, poorMetabolizerCYP2C9Test, poorMetabolizerWarfarin, lessMultivitaminResponseTest];

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
var dna3 = require('./data/json/family-tree-male.json');
var dna4 = require('./data/json/user-upload.json');


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
				link: diagnosticTest.link,
				chromosomes: diagnosticTest.chromosomes
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
				riskMultiplier: diagnosticTest.riskMultiplier,
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