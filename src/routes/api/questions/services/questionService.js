const Validate = require('../utils/validateQuestion');
const Error = require('../utils/questionsErrors');
const Models = require('../models/questionModel');
const Utils = require('../utils/questionsUtils');
const { dbxUpload } = require('../../../../utils/dropbox');

const getQuery = async (query) => {
  const pagination = Utils.paginate(query);

  const random = query.random;
  delete query.random 

  const validKeys = Validate.queryKeys(query);

  if (!validKeys) throw Error.queryKeys;

  Object.keys(query).forEach((key) => {
    if(!query[key]) delete query[key];
  });

  let questions = await Models.getByQuery(query, pagination);

  if (random) questions = questions.sort(() => Math.random() - 0.5);

  return { status: 200, message: questions };
};

const getQuestionById = async (pk) => {
  try {
    const question = await Models.getQuestionById(pk);
    return { status: 200, message: question };

  } catch (error) {
    console.log(error);
  }
};

const getIndexMetrics = async () => {
  const metrics = await Models.getIndexMetrics();

  return metrics;
};

const postQuestion = async (question, image) => {
  let answers = Utils.separateAnswers(question);

  //gambiarra até ter a tabela 'Users' completa :)
  question.userId = '911cac15-2492-400e-9d86-b4fca881de8e';

  question.image = await dbxUpload(image);

  const insertedQuestion = await Models.postQuestion(question);

  answers = Utils.insertQuestionsId(answers, insertedQuestion.id);
  
  const insertedAnswers = await Models.postAnswers(answers);

  return { insertedQuestion, insertedAnswers };
};

const putQuestion = async (question, id) => {
  let answers = Utils.separateAnswers(question);

  const updatedQuestion = await Models.putQuestion(question, id);
  
  const answersPromise = answers.map((answer) => Models.putAnswer(answer));

  const resolvedAnswers = await Promise.all(answersPromise);

  return { updatedQuestion, resolvedAnswers };
};

const deleteQuestion = (id) => {
  return Models.deleteQuestion(id);
};

module.exports = {
  getQuestionById,
  getIndexMetrics,
  deleteQuestion,
  postQuestion,
  putQuestion,
  getQuery,
};
