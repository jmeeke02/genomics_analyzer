//TEST SUBJECTS
var path = require('path');

var rootPath = path.join(__dirname, '../../');
var dna = require(path.join(rootPath,'data/json/23andme-male.json'));
var dna2 = require(path.join(rootPath,'data/json/ancestry-female.json'));
var dna3 = require(path.join(rootPath, 'data/json/family-tree-male.json'));
var dna4 = require(path.join(rootPath, 'data/json/user-upload.json'));

//SUBJECT LIST
var testSubjects = [dna, dna2, dna3, dna4];

module.exports = testSubjects;