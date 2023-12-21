const { createUser } = require("../controllers/usersController");

const getUsersHandler = (req, res) => {
  const { name } = req.query;

  if (name) {
    res.send(`Quiero buscar todos los que se llamen ${name}`);
  } else {
    res.send("Quiero enviar todos los usarios");
  }
};

const getUserHandlerById = (req, res) => {
  const { id } = req.params;
  res.send(id);
};

const createUserHandler = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newUser = await createUser(name, email, phone);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsersHandler,
  getUserHandlerById,
  createUserHandler,
};
