const rescue = require('express-rescue');
const routes = require('express').Router();

const questions = require('../controllers/questionsController');

routes.get('/fundamentos', rescue(questions.getFundamentos));
routes.get('/frontend', rescue(questions.getFrontEnd));

module.exports = routes;