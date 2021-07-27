const modules = (sequelize, DataTypes) => {
  const module = sequelize.define('module', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    module: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    tableName: 'module',
    timestamps: false,
    underscored: true,
  });

  module.associate = (models) => {
    module.hasMany(
      models.question,
      { foreignKey: 'module_id', as: 'module_data' },
    );
  };

  return module;
};

module.exports = modules;
