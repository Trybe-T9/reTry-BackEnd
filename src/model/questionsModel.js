const data = require('../model/exercisesData.js');

const getFundamentos = async () => {
  return await data.filter(({ modulo }) => modulo === 'fundamentos');
};

const getFrontEnd = async () => {
  return await data.filter(({ modulo }) => modulo === 'front-end');
};

module.exports = {
  getFundamentos,
  getFrontEnd,
};
