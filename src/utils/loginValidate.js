const fields = (credentials) => {
  if (!credentials.email || !credentials.password) {
    const err = { status: 401, message: 'All fields must be filled' };
    throw err;
  }
  return null;
};

const login = async (credentials) => {
  fields(credentials);
};

module.exports = {
  login,
};
