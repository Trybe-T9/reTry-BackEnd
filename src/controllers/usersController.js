const users = require('../services/usersService');

const create = async (req, res) => {
  const { email, password } = req.body;
  const result = await users.create({ email, password });
  return res.status(201).json(result);
 };

module.exports = {
  create,
};
