const users = require('../models/usersModel');

const create = async (user) => {
  return await users.create();
};

module.exports = {
  create,
};