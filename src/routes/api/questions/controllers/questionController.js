const service = require('../services/questionService');
const { dbxUpload } = require('../../../../utils/dropbox');

const search = async (req, res) => {
  const { query } = req;
  const result = await service.getQuery(query);
  res.status(result.status).json(result.message);
};

const image = async (req, res) => {
  const { file } = req;

  const url = await dbxUpload(file);
  res.status(200).json({ url });
};

module.exports = {
  search,
  image,
}
