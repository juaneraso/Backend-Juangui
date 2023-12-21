const { Router } = require("express");

const postsRouter = Router();

postsRouter.get("/", (req, res) => {
  res.send("Estoy en posts get");
});

module.exports = postsRouter;
