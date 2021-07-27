const service = require('../services/questionService');

const search = async (req, res) => {
  const { query } = req;
  const result = await service.getQuery(query);
  res.status(result.status).json(result.message);
};

module.exports = {
  search,
}
