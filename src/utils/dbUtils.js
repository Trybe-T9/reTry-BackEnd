const uuidPrimaryKey = (DataTypes) => ({
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true,
});

module.exports = {
  uuidPrimaryKey,
};
