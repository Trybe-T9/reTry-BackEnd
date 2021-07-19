const routes = require('express').Router();

routes.get('/', (_req, res, _next) => {
  res.status(200).render('index');
});

module.exports = routes;
