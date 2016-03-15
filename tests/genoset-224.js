// and(
//  rs10483639(C;C),rs3783641(A;A),rs8007267(T;T)
// )

//low BH4 test
var gql = require('gql');

module.exports = gql.and([
  gql.exact('rs10483639', 'C'),
  gql.exact('rs3783641', 'A'),
  gql.exact('rs8007267', 'T')
]);