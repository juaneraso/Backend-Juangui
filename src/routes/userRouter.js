const { Router } = require("express");

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.send("NIY: ESTA RUTA TRAE TODOS LOS USARIOS");
});

usersRouter.get("/:id", (req, res) => {
  // Endpoint
  res.send("NIY: ESTA RUTA TRAE UN USARIO POR ID");
});

usersRouter.post("/", (req, res) => {
  res.send("NIY: ESTA RUTA CREA UN USUARIO");
});

module.exports = usersRouter;
