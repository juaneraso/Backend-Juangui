const { Count } = require("../db");

const createCount = async () => {
  const newCount = await Count.increment({ value: 1 }, { where: { id: 1 } });
  return newCount;
};

module.exports = { createCount };
