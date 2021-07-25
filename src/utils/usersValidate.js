const md5 = require('md5');

const users = require('../model/usersModel');

const fields = (user) => {
  if (!user.user_name || !user.email || !user.password) {
    const err = { status: 400, message: 'Invalid entries. Try again.' };
    throw err;
  }
  return null;
};

const validEmailFormat = (email) => {
  const isValidEmailFormat = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email);
  if (!isValidEmailFormat) {
    const err = { status: 400, message: 'Invalid entries. Try again.' };
    throw err;
  }
  return null;
};

const existUserName = async (userName) => {
  const result = await users.findByUserName(userName);
  if (result) {
    const err = { status: 409, message: 'user_name already registered' }; 
    throw err;
  }
  return null;
};

const existEmail = async (email) => {
  const result = await users.findByEmail(email);
  if (result) {
    const err = { status: 409, message: 'Email already registered' }; 
    throw err;
  }
  return null;
};

const encodePassword = (password) => {
  return md5(password);
};

const user = async (userFields) => {
  fields(userFields);
  validEmailFormat(userFields.email);
  await existUserName(userFields.user_name)
  await existEmail(userFields.email);
};

module.exports = {
  user,
  encodePassword,
};