const { Router } = require("express");

const {
  createCountHandler,
  increaseCountHandler,
  updateCountHandler,
} = require("../handlers/countHandler");

const countRouter = Router();

countRouter.post("/", createCountHandler);

countRouter.put("/increase", increaseCountHandler);
countRouter.put("/reset", updateCountHandler);

module.exports = countRouter;
