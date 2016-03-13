//Lower Heart Attack Risk test
var gql = require('gql');

module.exports = gql.or([
  gql.exact('rs1108580', 'A'),
  gql.exact('rs1611115', 'T')
]);