const users = require('../models/usersModel');

const create = async (user) => {
  const result = await users.create(user);
  return result;
};

module.exports = {
  create,
};
