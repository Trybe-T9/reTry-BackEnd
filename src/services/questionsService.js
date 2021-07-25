const questions = require('../model/questionsModel');

const getFundamentos = async () => {
  return await questions.getFundamentos();
};

const getFrontEnd = async () => {
  return await questions.getFrontEnd();
};

module.exports = {
  getFundamentos,
  getFrontEnd,
};
