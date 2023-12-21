const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("Estoy pasando por un middleware");
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("ok");
});

module.exports = app;

// Modulo responsable de crear el servidor
