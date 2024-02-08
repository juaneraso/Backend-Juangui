const { createCount } = require("../controllers/countController");

const createCountHandler = async () => {
  try {
    const newCount = await createCount();
    res.status(201).json(newCount);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCountHandler,
};
