const { pool } = require('../config/connection');

const { createUUID } = require('./utils');

const create = async (user) => {
  const { password, user_name, email, role } = user;
  const id = await createUUID();
  const pg = await pool.connect();
  const insert = {
    text: 'INSERT INTO public."user"(id, password, user_name, email, role) VALUES ($1, $2, $3, $4, $5)',
    values:	[`${id}`, `${password}`, `${user_name}`, `${email}`, `${role}`],
  }
  await pg.query(insert);
  await pg.end();
  return { message: 'create user successfully' };
}

const findById = async (id) => {
  const pg = await pool.connect();
  const result = await pg.query('SELECT NOW()');
  await pg.end();
  return result.rows[0];
};

const findByEmail = async (email) => {
  const query = {
    text: 'SELECT email FROM public."user" WHERE email = $1',
    values:	[email],
  }
  const pg = await pool.connect();
  const result = await pg.query(query);
  await pg.end();
  return result.rows[0];
};

const findByUserName = async (userName) => {
  const query = {
    text: 'SELECT user_name FROM public."user" WHERE user_name = $1',
    values:	[userName],
  }
  const pg = await pool.connect();
  const result = await pg.query(query);
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
  findByUserName,
  findByAll,
};
