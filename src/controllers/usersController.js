const users = require('../services/usersService');

const create = async (req, res) => {
  const result = await users.create()
  return res.status(200).json(result);
 };

module.exports = {
  create,
};
