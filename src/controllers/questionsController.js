const questions = require('../services/questionsService');

const getFundamentos = async (_req, res) => {
  const result = await questions.getFundamentos();
  return res.status(200).json(result);
 };

 const getFrontEnd = async (_req, res) => {
  const result = await questions.getFrontEnd();
  return res.status(200).json(result);
 };

module.exports = {
  getFundamentos,
  getFrontEnd,
};
