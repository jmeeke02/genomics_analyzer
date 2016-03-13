// and(rs6277(G;G),
//    rs10989591(T;T))

//better episodic memory with old age
var gql = require('gql')

module.exports = gql.and([
		gql.exact('rs6277', 'G'),
		gql.exact('rs10989591','T')
]);