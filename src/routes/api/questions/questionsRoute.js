const rescue = require('express-rescue');
const multer = require('multer');

const routes = require('express').Router();
const multerConfig = require('../../../config/multer');
const { dbxGet } = require('../../../utils/dropbox');

const questions = require('./controllers/questionController');


// routes.get('/all', rescue(questions.getFrontEnd));
routes.get('/search', rescue(questions.search));

routes.post('/image', multer(multerConfig).single('image'), rescue(questions.image));

routes.get('/image', rescue(async (req, res) => {
  const { link } = req.query;

  const file = await dbxGet(link);

  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': file.result.fileBinary.length
  });
 
  res.end(file.result.fileBinary);
}));

module.exports = routes;
