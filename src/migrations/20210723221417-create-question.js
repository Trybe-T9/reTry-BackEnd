'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('question', {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      question: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING(12)
      },
      difficulty: {
        type: DataTypes.SMALLINT,
      },
      theme: {
        type: DataTypes.STRING(70),
      },
      image: {
        type: DataTypes.STRING(500),
      },
      block: {
        type: DataTypes.SMALLINT,
      },
      moduleId: {
        type: DataTypes.UUID,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'module_id',
        references: {
          model: 'module',
          key: 'id',
        },
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'user_id',
        references: {
          model: 'user',
          key: 'id',
        },
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('question');
  }
};