const express = require('express');
const bodyParser  = require('body-parser');

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.use((err, _req, res, _next) => {
  if (err.status) return res.status(err.status).json(err.message);
  res.status(500).json({ message: `Erro interno: ${err.message}` });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
