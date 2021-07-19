const validate = require('../utils/loginValidate');
const { generateToken } = require('../utils/tokenValidate');

const create = async (credentials) => {
  validate.login(credentials);
  const result = generateToken(credentials);
  return { token: result };
};

module.exports = {
  create,
};