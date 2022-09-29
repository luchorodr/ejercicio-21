require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const app = express();

app.listen(
  process.env.APP_PORT,
  console.log(`Servidor corriendo en el puerto ${process.env.APP_PORT} `)
);
