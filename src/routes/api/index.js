const routes = require('express').Router();

const usersRoute = require('./usersRoute');
const questionsRoute = require('./questionsRoute');
const loginRoute = require('./loginRoute');

routes.use('/ping', (_req, res) => res.status(200).json({ message: 'pong' }));
routes.use('/questions', questionsRoute);
routes.use('/users', usersRoute);
routes.use('/login', loginRoute);

routes.use((err, _req, res, _next) => {
  console.log(err);
  if (err.status) return res.status(err.status).json({ message: err.message });
  res.status(500).json({ message: `Internal Error: ${err.message}` });
});

module.exports = routes;
