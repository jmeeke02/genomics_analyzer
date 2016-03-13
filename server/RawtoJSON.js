var dna = require('dna2json');
var JSONStream = require('JSONStream');
var fs = require('fs');
 

 //turns the raw text data into a JSON file that can be interpreted by SNPs
module.exports = function(){
  fs.createReadStream("../data/user-upload.txt")
  .pipe(dna.createParser())
  .pipe(JSONStream.stringify())
  .pipe(fs.createWriteStream("../data/user-upload.json"));
}