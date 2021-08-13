const routes = require('express').Router();
const questions = require('./questions/questionsAdmin');

const questionsService = require('../api/questions/services/questionService');


routes.get('/', async (_req, res, _next) => {
  const metrics = await questionsService.getIndexMetrics();
  res.status(200).render('index', metrics);
});

routes.use('/questions', questions);

module.exports = routes;
