 // atleast(3,
 //  rs16892766(C;C),
 //  rs16892766(C),
 //  rs4779584(T;T),
 //  rs4779584(T),
 //  rs58920878(G;G),
 //  rs58920878(G)
 //  )

//colorectal cancer test
 var gql = require('gql');

module.exports = gql.atLeast(3, [
	gql.exact('rs16892766', 'C'),
	gql.has('rs16892766', 'C'),
	gql.exact('rs4779584', 'T'),
	gql.has('rs4779584', 'T'),
	gql.exact('rs58920878', 'G'),
	gql.has('rs58920878', 'G')
]);