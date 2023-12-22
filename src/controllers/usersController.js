const axios = require("axios");
const { User, Post } = require("../db"); //modelo

cleanArray = (apiUsers) => {
  const clean = apiUsers.map((element) => {
    return {
      id: element.id,
      name: element.name,
      email: element.email,
      phone: element.phone,
      created: false,
    };
  });
  return clean;
};

const createUser = async (name, email, phone) => {
  const newUser = await User.create({ name, email, phone });
  return newUser;
};

const getUserByid = async (id, source) => {
  const user =
    source === "JsonPlace"
      ? (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`))
          .data
      : await User.findByPk(id, {
          include: {
            model: Post,
            attributes: ["title", "body"],
          },
        });
  return user;
};

const getALLUsers = async () => {
  // Buscar en BDD y en API
  const databaseUsers = await User.findAll();
  const apiUsersRaw = (
    await axios.get("https://jsonplaceholder.typicode.com/users")
  ).data;

  const apiUsers = cleanArray(apiUsersRaw);

  const results = [...databaseUsers, ...apiUsers];

  return results;
};

const searchUserByName = async (name) => {
  const databaseUsers = await User.findAll({ where: { name: name } });
  const apiUsersRaw = (
    await axios.get("https://jsonplaceholder.typicode.com/users")
  ).data;

  const apiUsers = cleanArray(apiUsersRaw);
  const filteredApi = apiUsers.filter((user) => {
    return user.name === name;
  });

  const results = [...filteredApi, ...databaseUsers];

  return results;
};

module.exports = { createUser, getUserByid, getALLUsers, searchUserByName };
