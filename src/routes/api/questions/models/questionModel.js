const { question, answer, module: modules } = require('../../../../models');

const getByQuery = async (query, pagination) => {
  const quest = await question.findAll({
    where: query,
    include: [
      { model: modules, as: 'module_data' },
      { model: answer, as: 'answers' },
    ],
    limit: pagination.perpage,
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

const getIndexMetrics = async () => {
  const questions = await question.count();

  return { questions };
};

const postQuestion = (newQuestion) => {
  return question.create(newQuestion);
};

const postAnswers = (newAnswers) => {
  return answer.bulkCreate(newAnswers);
};

const putQuestion = (updatedQuestion, id) => {
  return question.update(
    updatedQuestion,
    { where: { id } },
  );
};

const putAnswer = (updatedAnswer) => {
  return answer.update(
    updatedAnswer,
    { where: { id: updatedAnswer.id } },
  );
};

const deleteQuestion = (id) => {
  return question.destroy({ where: { id } });
}

module.exports = {
  getQuestionById,
  getIndexMetrics,
  deleteQuestion,
  postQuestion,
  postAnswers,
  putQuestion,
  getByQuery,
  putAnswer,
};
