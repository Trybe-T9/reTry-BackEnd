const { question, answer, module: modules } = require('../../../../models');

const getByQuery = async (query) => {
  const quest = await question.findAll({
    where: query,
    include: [
      { model: modules, as: 'module_data' },
      { model: answer, as: 'answers' },
    ],
  });
  return quest;
};

const getByPk = async (pk) => {
  console.log(pk);
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
  getByPk,
};
