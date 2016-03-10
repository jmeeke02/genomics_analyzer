var isMale = require('genoset-male');
var dna = require('./data/23andme-male.json');
var dna2 = require('./data/ancestry-female.json');
 
console.log("Is male genome male?", isMale(dna));
console.log("Is female genome male?", isMale(dna2));

// var male = require('genoset-male');
// var fs = require('fs');
// var path = require('path');
// var es = require('event-stream');
// var JSONStream = require('JSONStream');
 
// var jsonStream = fs.createReadStream(path.join(__dirname, "./data/23andme-male.json"));
 
// var query = male();
// var genoStream = query.stream();
 
// jsonStream
//   .pipe(JSONStream.parse('*'))
//   .pipe(genoStream);
 
// var count = 0;
// genoStream.on('data', function(snp) {
//   console.log('Analyzed', ++count, 'SNPs');
// });
 
// genoStream.on('end', function() {
//   console.log("There are", query.matches().length, "matches for genoset 144");
//   console.log("There is a", query.percentage(), "percent chance that genoset matches");
// });