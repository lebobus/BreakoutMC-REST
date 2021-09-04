const mysql = require('promise-mysql');
const { credentials } = require('./credentials');

/**
  * MySQL connection instance.
  *
  * @protected
  * @returns {Promise}
  */
module.exports.getDbConnection = async () => {
  return await mysql.createConnection(credentials);
}