//Sickle Cell test
var gql = require('gql')

module.exports = gql.or([
	gql.only('rs334', 'T'),
	gql.only('i3003137', 'A')
])