const routes = require('express').Router();

const usersRoute = require('./users');
const questionsRoute = require('./questions');

routes.use('/questions', questionsRoute);
routes.use('/users', usersRoute);

module.exports = routes;
