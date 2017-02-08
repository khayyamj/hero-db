// Connect Massive
var massive = require("massive");
var connectionString = "postgres://username:password@localhost/dbToConnectTo";
var massiveInstance = massive.connectSync({connectionString : connectionString})
// Make DB available to export
module.exports = massiveInstance;
