const teste_User = (sequelize, DataTypes) => {
  const teste_User = sequelize.define("teste_User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    freezeTableName: true, 
  });

  return teste_User;
};

module.exports = teste_User;