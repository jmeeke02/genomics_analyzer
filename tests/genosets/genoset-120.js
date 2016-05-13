// or(and(rs1501299(T;T),rs2241766(T;T)),
//    and(rs1501299(G;T),rs2241766(G;T)),
//    and(rs1501299(G;G),rs2241766(G;G)))

//breast cancer 120
var gql = require('gql');

module.exports = gql.and([
	gql.and([gql.exact('rs1501299', 'T'), gql.exact('rs2241766', 'T')]),
	gql.and([gql.exact('rs1501299', 'GT'), gql.exact('rs2241766', 'GT')]),
	gql.and([gql.exact('rs1501299', 'G'), gql.exact('rs2241766', 'G')])
	])