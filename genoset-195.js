// and(rs4516035(C),rs7139166(A))

//Malignant Melanoma test
var gql = require('gql')

module.exports = gql.and([
  gql.has('rs4516035', 'C'),
  gql.has('rs7139166', 'A')
]);