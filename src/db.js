const { Sequelize } = require("sequelize");
const UserModel = require("./models/User");
const PostModel = require("./models/Post");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_BDD } = process.env;

const database = new Sequelize(
  `
postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_BDD}
`,
  { logging: false }
);

UserModel(database);
PostModel(database);

const { User, Post } = database.models;

User.hasMany(Post);
Post.belongsTo(User);

module.exports = {
  database,
  ...database.models,
};
