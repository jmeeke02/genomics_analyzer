//Ginger test
var gql = require('gql')

module.exports = gql.or([
	gql.only('rs1805007', 'T'),
	gql.only('rs1805008', 'T'),
	gql.only('rs1805009', 'C'),
])