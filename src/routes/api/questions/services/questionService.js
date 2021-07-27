const validate = require('../utils/valitadeQuestion');
const error = require('../utils/questionsErrors');
const models = require('../models/questionModel');

const getQuery = async (query) => {
  const validKeys = validate.queryKeys(query);
  if (!validKeys) throw error.queryKeys;
  const questions = await models.getByQuery(query);
  return { status: 200, message: questions };
};

const getByPk = async (pk) => {
  try {
    const question = await models.getByPk(pk);
    return { status: 200, message: question };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getQuery,
  getByPk,
};
