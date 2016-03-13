//Macular Degeneration test
var gql = require('gql')

module.exports = gql.and([
  gql.exact('rs380390', 'C'),
  gql.exact('rs3793784', 'G')
]);

