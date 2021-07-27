const question = (sequelize, DataTypes) => {
  const question = sequelize.define('question', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    question: DataTypes.TEXT,
    type: DataTypes.STRING(12),
    difficulty: DataTypes.SMALLINT,
    theme: DataTypes.STRING(70),
    image: DataTypes.STRING(500),
    userId: { type: DataTypes.UUID, foreignKey: true },
  }, {
    tableName: 'question',
    timestamps: false,
    underscored: true,
  });

  question.associate = (models) => {
    question.hasMany(
      models.answer,
      { foreignKey: 'question_id', as: 'answers' },
    );
    question.belongsTo(
      models.module,
      { foreignKey: 'module_id', as: 'module_data' },
    );
  };

  return question;
};

module.exports = question;
