const validate = require('../utils/validateQuestion');
const error = require('../utils/questionsErrors');
const models = require('../models/questionModel');

const paginate = (query) => {
  const { perpage = 10, page } = query;

  let offset = (perpage * (page - 1));

  if(!offset) offset = 0;

  delete query.perpage;
  delete query.page;

  return { perpage, offset };
};


const getQuery = async (query) => {
  const pagination = paginate(query);

  const random = query.random;
  delete query.random 

  const validKeys = validate.queryKeys(query);

  if (!validKeys) throw error.queryKeys;

  let questions = await models.getByQuery(query, pagination);

  if (random) questions = questions.sort(() => Math.random() - 0.5);

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
