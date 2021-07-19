const users = require('../models/usersModel');
const validate = require('../utils/usersValidate');

const create = async (user) => {
  await validate.user(user);
  const newUser = user;
  newUser.role = 'user';
  const encodedPassword = validate.encodePassword(newUser.password)
  newUser.password = encodedPassword;
  const result = await users.create(newUser);
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
