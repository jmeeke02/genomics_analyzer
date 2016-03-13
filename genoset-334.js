//Sickle Cell test
var gql = require('gql')

module.exports = gql.or([
  gql.exact('rs334', 'TT'),
  gql.exact('i3003137', 'AA')
]);