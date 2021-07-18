const routes = require('express').Router();

const usersRoute = require('./usersRoute');
const questionsRoute = require('./questionsRoute');

routes.use('/ping', (_req, res) => res.status(200).json({ message: 'pong' }));
routes.use('/questions', questionsRoute);
routes.use('/users', usersRoute);

module.exports = routes;
