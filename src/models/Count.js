const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("Count", {
    id: {
      type: DataTypes.DATE,
      primaryKey: true,
      defaultValue: DataTypes.DATE,
    },
    value: {
      type: DataTypes.INTEGER,
    },
  });
};
