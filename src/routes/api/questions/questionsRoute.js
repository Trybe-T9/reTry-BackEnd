const rescue = require('express-rescue');
const routes = require('express').Router();

const questions = require('./controllers/questionController');


// routes.get('/all', rescue(questions.getFrontEnd));
routes.get('/search', rescue(questions.search));

routes.post('/', (req, res, next) => {
  console.log(req.body);
  res.end();
});

module.exports = routes;
