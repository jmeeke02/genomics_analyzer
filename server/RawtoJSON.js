var dna = require('dna2json');
var JSONStream = require('JSONStream');
var fs = require('fs');
var path = require('path');
var rootPath = path.join(__dirname, '../');

 //turns the raw text data into a JSON file that can be interpreted by SNPs
module.exports = function(){
	//this is a synchronous operation, no need to promisify https://github.com/petkaantonov/bluebird/issues/225
  var text = fs.readFileSync(path.join(rootPath, "data/user-upload.txt"));
  dna.parse(text, function(err, snps){
  	fs.writeFileSync(path.join(rootPath, "data/user-upload.json"), JSON.stringify(snps));
  })
};