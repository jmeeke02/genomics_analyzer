// and(rs568157(A),rs481775(G),rs529359(A),rs565186(T),rs613120(C),rs543215(A),rs516693(A),rs660541(G),rs1042838(C),rs608995(T),rs1870019(A))

//ovarian endometrial cancer test
 var gql = require('gql');

module.exports = gql.and([
	gql.has('rs568157', 'A'),
	gql.has('rs481775','G'),
	gql.has('rs529359','A'),
	gql.has('rs565186','T'),
	gql.has('rs613120','C'),
	gql.has('rs543215','A'),
	gql.has('rs516693','A'),
	gql.has('rs660541','G'),
	gql.has('rs1042838','C'),
	gql.has('rs608995','T'),
	gql.has('rs1870019','A')
]);