// and(atleast(3, rs11066015(A), rs10052657(C), rs2014300(G), rs2074356(T), rs10484761(G), rs2274223(G)),
//  not(atleast(5, rs11066015(A), rs10052657(C), rs2014300(G), rs2074356(T), rs10484761(G), rs2274223(G))))

//esophagal, squamous cell cancer
var gql = require('gql')

module.exports = gql.and([
	gql.atLeast(3, [
		gql.has('rs11066015', 'A'),
		gql.has('rs10052657','C'),
		gql.has('rs2014300', 'G'),
		gql.has('rs2074356', 'T'),
		gql.has('rs10484761', 'G'),
		gql.has('rs2274223', 'G')
		])
	]);