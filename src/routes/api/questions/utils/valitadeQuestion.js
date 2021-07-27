const filters = ['id', 'module_id', 'difficulty', 'theme', 'type'];

const queryKeys = (query) => Object.keys(query).every((key) => filters.includes(key));

module.exports = {
  queryKeys,
};
