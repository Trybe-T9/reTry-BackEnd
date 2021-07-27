const routes = require('express').Router();
const questions = require('./questions/questionsAdmin');

routes.get('/', (_req, res, _next) => {
  res.status(200).render('index');
});

routes.use('/questions', questions);

module.exports = routes;
