// and(rs6046(A;A), rs5355(T;T) )

//Lower Risk high blood pressure
var gql = require('gql');

module.exports = gql.and([
  gql.exact('rs6046', 'A'),
  gql.exact('rs5355', 'T')
]);