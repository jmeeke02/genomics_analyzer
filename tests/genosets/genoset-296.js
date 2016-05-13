 // or(
 //     and(rs1108580(A;A),rs1611115(C;C)),
 //     and(rs1108580(A;G),rs1611115(C;T)),
 //     and(rs1108580(G;G),rs1611115(T;T))
 //     )

 //lower heart attack risk 2
var gql = require('gql')

module.exports = gql.or([
	gql.and([ gql.exact('rs1108580', 'A'), gql.exact('rs1611115', 'C')]),
	gql.and([ gql.exact('rs1108580', 'AG'), gql.exact('rs1611115', 'CT')]),
	gql.and([ gql.exact('rs1108580', 'G'), gql.exact('rs1611115', 'T')])
])