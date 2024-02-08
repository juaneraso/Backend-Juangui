const { Count } = require("../db");

const createCount = async () => {
  const value = 0;
  const newCount = await Count.create({ value: value });
  return newCount;
};

const increaseCount = async () => {
  const newCount = await Count.increment(
    { value: 1 },
    { where: { id: "03b17156-7d8a-4178-ac6b-21a43d412f10" } }
  );
  return newCount;
};

const updateCount = async () => {
  const value = 0;
  const newCount = await Count.update(
    { value: value },
    { where: { id: "03b17156-7d8a-4178-ac6b-21a43d412f10" } }
  );
  return newCount;
};

module.exports = { createCount, increaseCount, updateCount };
