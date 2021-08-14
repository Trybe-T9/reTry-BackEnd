const paginate = (query) => {
  const { perpage = 10, page = 1 } = query;

  let offset = (perpage * (page - 1));

  if(!offset) offset = 0;

  delete query.perpage;
  delete query.page;

  return { perpage, offset };
};

const separateAnswers = (question) => {
  const answers = question.answers;

  delete question.answers;

  return answers;
};

const insertQuestionsId = (answers, id) => {
  answers.forEach((answer) => {
    answer.question_id = id;
  });

  return answers;
}

module.exports = {
  insertQuestionsId,
  separateAnswers,
  paginate,
};
