const routes = require('express').Router();

const usersRoute = require('./users');
const questionsRoute = require('./questions');

routes.use('/ping', (_req, res) => res.status(200).json({ message: 'pong' }));

routes.use('/questions', questionsRoute);
routes.use('/users', usersRoute);

module.exports = routes;
