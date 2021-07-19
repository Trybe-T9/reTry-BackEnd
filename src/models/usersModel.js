const { pool } = require('../config/connection');

const create = async (user) => {
  const pg = await pool.connect();
  const result = await pg.query('SELECT NOW()');
  await pg.end();
  return result.rows[0];
}

const findById = async (id) => {
  const pg = await pool.connect();
  const result = await pg.query('SELECT NOW()');
  await pg.end();
  return result.rows[0];
};

const findByEmail = async (email) => {
  const pg = await pool.connect();
  const result = await pg.query('SELECT NOW()');
  await pg.end();
  return result.rows[0];
};

const findByAll = async () => {
  const pg = await pool.connect();
  const result = await pg.query('SELECT NOW()');
  await pg.end();
  return result.rows[0];
};

module.exports = {
  create,
  findById,
  findByEmail,
  findByAll,
};
