const jwt = require('jsonwebtoken');
const path = require('path');
const dotenv = require('dotenv');

const pathEnv = path.join(__dirname, '..', '..', '.env');
dotenv.config({ path: pathEnv });

const { TOKEN_SECRET } = process.env;

const generateToken = (credentials) => {
  const jwtConfig = { expiresIn: '15m', algorithm: 'HS256' };

  const { password, name, ...payload } = credentials;
  const token = jwt.sign(payload, TOKEN_SECRET, jwtConfig);
  return token;
};

const verifyToken = (token) => {
  if (!token) {
    const err = { status: 401, message: 'missing auth token' };
    throw err;
  }

  try {
    jwt.verify(token, TOKEN_SECRET);
  } catch (error) {
    const err = { status: 401, message: error.message };
    throw err;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
