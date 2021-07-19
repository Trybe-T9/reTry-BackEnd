const { Pool } = require('pg');
const path = require('path');
const dotenv = require('dotenv');

const pathEnv = path.join(__dirname, '..', '..', '.env');
dotenv.config({ path: pathEnv });

const { DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD, DB_PORT } = process.env;

const pool = new Pool({
  host: DB_HOST,
  database: DB_DATABASE,
  ssl: { rejectUnauthorized: false },
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
});

module.exports = {
  pool,
};  
