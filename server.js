require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const app = express();

app.listen(process.env.APP_PORT);
