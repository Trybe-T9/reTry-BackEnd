const answer = (sequelize, DataTypes) => {
  const answer = sequelize.define('answer', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    answer: DataTypes.STRING,
    isRight: DataTypes.BOOLEAN,
    hint: DataTypes.TEXT,
    link: DataTypes.STRING(500),
  }, {
    tableName: 'answer',
    timestamps: false,
    underscored: true,
  });

  answer.associate = (models) => {
    answer.belongsTo(
      models.question,
      { foreignKey: 'question_id', as: 'answers' },
    );
  };

  return answer;
};

module.exports = answer;