const routes = require('express').Router();
const rescue = require('express-rescue');

const users = require('../controllers/usersController');

routes.post('/', rescue(users.create));
routes.get('/:id', rescue(users.findById));

module.exports = routes;
