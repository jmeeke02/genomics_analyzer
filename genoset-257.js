//Blue Eyes test
var gql = require('gql')

module.exports = gql.or([
  gql.exact('rs1129038', 'A'),
  gql.exact('rs12913832', 'C')
]);

