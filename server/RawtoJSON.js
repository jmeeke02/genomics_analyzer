var dna = require('dna2json');
var JSONStream = require('JSONStream');
var fs = require('fs');
var path = require('path');
var rootPath = path.join(__dirname, '../');

 //turns the raw text data into a JSON file that can be interpreted by SNPs
module.exports = function(){
	//this is a synchronous operation, no need to promisify https://github.com/petkaantonov/bluebird/issues/225
  var text = fs.readFileSync(path.join(rootPath, "data/raw/user-upload.txt"));
  text = JSON.stringify(text);
  console.log(typeof text);
  dna.parse(text, function(err, snps){
  	if(err) console.log(err);
  	fs.writeFileSync(path.join(rootPath, "data/json/user-upload.json"), JSON.stringify(snps));
  })
};