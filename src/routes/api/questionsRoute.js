const rescue = require('express-rescue');
const routes = require('express').Router();
const { question, answer, module: modules } = require('../../models/index');

const questions = require('../../controllers/questionsController');

routes.get('/fundamentos', rescue(questions.getFundamentos));
routes.get('/frontend', rescue(questions.getFrontEnd));
routes.get('/teste', rescue(async (req, res, _next) => {
  const quest = await question.findAll({
    where: { type: 'mult-choice' },
    include: [
      { model: modules, as: 'module_name' },
      { model: answer, as: 'answers' },
    ],
  });

  res.status(200).json(quest);
}));

routes.get('/all', rescue(questions.getFrontEnd));
routes.get('/search', rescue(questions.getFrontEnd));
routes.get('/random', rescue(questions.getFrontEnd));

// routes.get('/module', rescue(questions.getFrontEnd));
// routes.get('/module/:id', rescue(questions.getFrontEnd));
// routes.get('/module/difficulty', rescue(questions.getFrontEnd));
// routes.get('/module/theme', rescue(questions.getFrontEnd));
// routes.get('/module/block', rescue(questions.getFrontEnd));
// routes.get('/module/type', rescue(questions.getFrontEnd));
// routes.get('/module/random', rescue(questions.getFrontEnd));

module.exports = routes;
