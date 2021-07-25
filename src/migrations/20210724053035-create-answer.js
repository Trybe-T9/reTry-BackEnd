'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('answer', {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      answer: {
        type: DataTypes.STRING
      },
      isRight: {
        type: DataTypes.BOOLEAN,
        field: 'is_right',
      },
      hint: {
        type: DataTypes.TEXT,
      },
      link: {
        type: DataTypes.STRING(500),
      },
      questionId: {
        type: DataTypes.UUID,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'question_id',
        references: {
          model: 'question',
          key: 'id',
        },
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('answer');
  },
};