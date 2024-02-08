const { Count } = require("../db");

const createCount = async () => {
  const value = 0;
  const newCount = await Count.create({ value });
  return newCount;
};

module.exports = { createCount };
