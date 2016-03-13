// and(rs1801131(C;C),
//     rs1801133(T;T))

//dont respond to multivitamins
var gql = require('gql')

module.exports = gql.and([
		gql.exact('rs1801131', 'C'),
		gql.exact('rs1801133','T')
]);