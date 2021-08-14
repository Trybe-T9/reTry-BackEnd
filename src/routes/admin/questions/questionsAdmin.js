const routes = require('express').Router();

const questionsService = require('../../api/questions/services/questionService');

routes.get('/', async (_req, res, _next) => {
  const result = await questionsService.getQuery({});
  res.status(200).render('questions/index', { questions: result.message });
});

routes.get('/create', async (_req, res, _next) => {
  res.status(200).render('questions/new');
});

routes.post('/', async (req, res, next) => {
  const question = req.body;
  console.log(question);
  const result = await questionsService.postQuestion(question);
  res.end();
});

routes.get('/:id', async (req, res, _next) => {
  const { id } = req.params;
  const result = await questionsService.getQuestionById(id);
  res.status(200).render('questions/details', { question: result.message });
});


module.exports = routes;
