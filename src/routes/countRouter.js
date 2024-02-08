const { Router } = require("express");

const { createCountHandler } = require("../handlers/countHandler");

const countRouter = Router();

countRouter.post("/", createCountHandler);

module.exports = countRouter;
