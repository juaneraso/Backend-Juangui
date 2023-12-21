const { Router } = require("express");
const {
  getUsersHandler,
  getUserHandlerById,
  createUserHandler,
} = require("../handlers/usersHandlers");

const usersRouter = Router();

usersRouter.get("/", getUsersHandler);

usersRouter.get("/:id", getUserHandlerById);

usersRouter.post("/", createUserHandler);

module.exports = usersRouter;
