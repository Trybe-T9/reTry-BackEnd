const filters = ['id', 'module_id', 'difficulty', 'theme', 'type', 'block', 'userId'];

const queryKeys = (query) => Object.keys(query).every((key) => filters.includes(key));

module.exports = {
  queryKeys,
};
