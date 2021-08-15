const routes = require('express').Router();

const questionsService = require('../../api/questions/services/questionService');

routes.get('/', async (_req, res, _next) => {
  const result = await questionsService.getQuery({});
  res.status(200).render('questions/index', { questions: result.message });
});

routes.get('/create', async (_req, res, _next) => {
  res.status(200).render('questions/new', { error: null });
});

routes.post('/create', async (req, res, _next) => {
  const question = req.body;
  try {
    const result = await questionsService.postQuestion(question);
    res.redirect(`${result.insertedQuestion.id}`);
  } catch (error) {
    res.status(400).render('questions/new', { error });
  }
});

routes.post('/:id/update', async (req, res, _next) => {
  console.log(req.body);
  res.end();
});

routes.get('/:id/update', async (req, res, _next) => {
  const { id } = req.params;
  const result = await questionsService.getQuestionById(id);
  res.status(200).render('questions/update', { question: result.message, error: null });
})

routes.get('/:id', async (req, res, _next) => {
  const { id } = req.params;
  const result = await questionsService.getQuestionById(id);
  res.status(200).render('questions/details', { question: result.message });
});


module.exports = routes;
