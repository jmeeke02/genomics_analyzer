// and(or(rs6311(C;C),rs6311(C;T)),
//     or(rs1328674(A;A),rs1328674(A;G)),
//     or(rs6313(C;C),rs6313(C;T)),
//     or(rs6314(G;G),rs6314(A;G)))

//arthritis test
var gql = require('gql');

module.exports = gql.and([
	gql.or([gql.exact('rs6311', 'C'), gql.exact('rs6311', 'CT')]),
	gql.or([gql.exact('rs1328674', 'A'), gql.exact('rs1328674', 'AG')]),
	gql.or([gql.exact('rs6313', 'C'), gql.exact('rs6313', 'CT')]),
	gql.or([gql.exact('rs6314', 'G'), gql.exact('rs6314', 'AG')])
])
