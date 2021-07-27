const code = require('../../../../utils/statusCode');
const questionsMessages = require('./questionsMessages');
const messages = require('./questionsMessages');

const questionsErrors = {
  queryKeys: { error: true, status: code.badRequest, message: messages.queryKeys },
};

module.exports = questionsErrors;
