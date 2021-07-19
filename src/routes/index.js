const routes = require('express').Router();

const api = require('./api');
const admin = require('./admin');

routes.use('/api/v1', api);
routes.use('/admin', admin);

module.exports = routes;
