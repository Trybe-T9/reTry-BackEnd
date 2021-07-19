const users = require('../services/usersService');

const create = async (req, res) => {
  const { email, password } = req.body;
  const result = await users.create({ email, password });
  return res.status(201).json(result);
 };

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await users.findById(id);
  return res.status(200).json(result);
};

const findByAll = async (req, res) => {
  const result = await users.findByAll();
  return res.status(200).json(result);
};

module.exports = {
  create,
  findById,
  findByAll,
};
