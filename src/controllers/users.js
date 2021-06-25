const router = require('express').Router();

router.get('/users', (req, res, next) => {
  res.status(200).json({ user: 'usuário' });
 });

module.exports = router;
