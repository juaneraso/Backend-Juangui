const { Router } = require("express");

const { createCountHandler } = require("../handlers/countHandler");

const countRouter = Router();

countRouter.post("/", createCountHandler);

countRouter.put("/increase", createCountHandler);

module.exports = countRouter;
