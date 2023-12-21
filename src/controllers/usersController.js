const { User } = require("../db"); //modelo

const createUser = async (name, email, phone) => {
  const newUser = await User.create({ name, email, phone });
  return newUser;
};

module.exports = { createUser };
