const users = require('../models/usersModel');

const create = async (user) => {
  const result = await users.create(user);
  return result;
};

const findById = async (id) => {
  const result = await users.findById(id);
  return result;
};

const findByAll = async () => {
  const result = await users.findByAll();
  return result;
};

module.exports = {
  create,
  findById,
  findByAll,
};
