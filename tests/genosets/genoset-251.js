//venous thrombosis
var gql = require('gql')

module.exports = gql.or([
	gql.exact('rs6025', 'A'),
	gql.exact('rs1800595', 'C')
])