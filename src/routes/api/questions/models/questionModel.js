const { question, answer, module: modules } = require('../../../../models');

const getByQuery = async (query, pagination) => {
  const quest = await question.findAll({
    where: query,
    include: [
      { model: modules, as: 'module_data' },
      { model: answer, as: 'answers' },
    ],
    limit: pagination.perpage || 10,
    offset: pagination.offset,
  });
    return quest;
};

const getQuestionById = async (pk) => {
  const quest = await question.findOne({
    where: { id: pk },
    include: [
      { model: modules, as: 'module_data' },
      { model: answer, as: 'answers' },
    ],
  });
  return quest;
};

module.exports = {
  getByQuery,
  getQuestionById,
};
