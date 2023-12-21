const { Router } = require("express");

const postsRouter = Router();

postsRouter.get("/", (req, res) => {
  res.send("Estoy en posts get");
});

postsRouter.post("/", (req, res) => {
  res.send("NIY: CREACION DE POST");
});

module.exports = postsRouter;
