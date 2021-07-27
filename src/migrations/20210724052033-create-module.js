'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('module', {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      module: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('module');
  }
};