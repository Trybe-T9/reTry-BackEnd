const router = require('express').Router();

const data = require('../services/exercisesData.js');

router.get('/questions', (req, res, next) => {
  res.status(200).json({ data });
 });

module.exports = router;
