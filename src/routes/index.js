const { Router } = require("express");
const usersRouter = require("./userRouter");
const postsRouter = require("./postsRouter");

const mainRouter = Router();

mainRouter.use("/users", usersRouter);
mainRouter.use("/posts", postsRouter);

module.exports = mainRouter;
