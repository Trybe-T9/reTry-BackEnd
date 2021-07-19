const { pool } = require('../config/connection');

const createUUID = async () => {
  const pg = await pool.connect();
  const result = await pg.query('SELECT uuid_generate_v4()');
  await pg.end();
  return result.rows[0].uuid_generate_v4;
};

module.exports = {
  createUUID,
};
