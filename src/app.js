const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/index");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
  console.log("Estoy pasando por un middleware");
  next();
});

app.use(mainRouter);
module.exports = app;

// Modulo responsable de crear el servidor
