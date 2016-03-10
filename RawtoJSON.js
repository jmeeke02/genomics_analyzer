var dna = require('dna2json');
var JSONStream = require('JSONStream');
var fs = require('fs');
 

 //turns the raw text data into a JSON file that can be interpreted by SNPs
fs.createReadStream("./data/23andme-male.txt")
  .pipe(dna.createParser())
  .pipe(JSONStream.stringify())
  .pipe(fs.createWriteStream("./data/23andme-male_converted.json"));