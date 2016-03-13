// or(
//    rs1799853(T),
//    rs1057910(C),
//    and(rs11572080(A), rs10509681(C)),
//    )

//impaired NSAID drug metabolism
var gql = require('gql')

module.exports = gql.or([
		gql.has('rs1799853', 'T'),
		gql.has('rs1057910','C'),
		gql.and([gql.has('rs11572080', 'A'), gql.has('rs10509681', 'C')])
]);