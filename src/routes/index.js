const routes = require('express').Router();

const usersRoute = require('./usersRoute');
const questionsRoute = require('./questionsRoute');
const loginRoute = require('./loginRoute');

routes.use('/ping', (_req, res) => res.status(200).json({ message: 'pong' }));
routes.use('/questions', questionsRoute);
routes.use('/users', usersRoute);
routes.use('/login', loginRoute);

module.exports = routes;
