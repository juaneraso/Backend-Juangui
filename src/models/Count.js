const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "Count",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        defaultValue: 1,
      },
      value: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
};
