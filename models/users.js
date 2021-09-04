const { getDbConnection } = require('../config/database');

/**
  * Gets all users.
  *
  * @protected
  * @returns {Promise}
  */
module.exports.getUsers = async () => {
    const db = await getDbConnection();
    const users = await db.query('SELECT username, uuid, balance, rank, last_seen, banned, bulldoge_wins, brackets_wins, juggernaut_wins, koth_wins, ffa_wins FROM users');
    await db.end();
    return users;
}

/**
  * Gets user by UUID.
  *
  * @protected
  * @param {UUID} uuid
  * @returns {Promise}
  */
module.exports.getUser = async (uuid) => {
    const db = await getDbConnection();
    const users = await db.query(`SELECT username, uuid, balance, rank, last_seen, banned, bulldoge_wins, brackets_wins, juggernaut_wins, koth_wins, ffa_wins FROM users WHERE uuid = ${uuid}`);
    await db.end()
    return users;
}