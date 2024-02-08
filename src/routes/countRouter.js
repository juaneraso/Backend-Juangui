const { Router } = require("express");

const {
  createCountHandler,
  increaseCountHandler,
} = require("../handlers/countHandler");

const countRouter = Router();

countRouter.post("/", createCountHandler);

countRouter.put("/increase", increaseCountHandler);

module.exports = countRouter;
