const validate = require('../utils/validateQuestion');
const error = require('../utils/questionsErrors');
const models = require('../models/questionModel');

const paginate = (query) => {
  const { perpage, page } = query;

  let offset = (perpage * (page - 1));

  if(offset < 0) offset = 0;

  delete query.perpage;
  delete query.page;

  return { perpage, offset };
};


const getQuery = async (query) => {
  const pagination = paginate(query);
  const validKeys = validate.queryKeys(query);

  if (!validKeys) throw error.queryKeys;

  const questions = await models.getByQuery(query, pagination);

  return { status: 200, message: questions };
};

const getQuestionById = async (pk) => {
  try {
    const question = await models.getQuestionById(pk);
    return { status: 200, message: question };

  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getQuery,
  getQuestionById,
};
