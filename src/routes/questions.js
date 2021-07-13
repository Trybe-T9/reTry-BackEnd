const rescue = require('express-rescue');
const routes = require('express').Router();

const questions = require('../controllers/questionsController');

routes.get('/fundamentos', rescue(questions.getFundamentos));
routes.get('/frontend', rescue(questions.getFrontEnd));

routes.get('/all', rescue(questions.getFrontEnd));
routes.get('/query', rescue(questions.getFrontEnd));
routes.get('/random', rescue(questions.getFrontEnd));
routes.get('/module', rescue(questions.getFrontEnd));
routes.get('/module/:id', rescue(questions.getFrontEnd));
routes.get('/module/difficulty', rescue(questions.getFrontEnd));
routes.get('/module/theme', rescue(questions.getFrontEnd));
routes.get('/module/block', rescue(questions.getFrontEnd));
routes.get('/module/type', rescue(questions.getFrontEnd));
routes.get('/module/random', rescue(questions.getFrontEnd));

module.exports = routes;
