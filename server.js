require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const session = require("express-session");
const passport = require("passport");

const dbInitialSetup = require("./dbInitialSetup");
const passportConfig = require("./config/passport");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.json());

app.use(
  session({
    secret: "algunTextoSecreto",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.session());

passportConfig(passport);

dbInitialSetup();

routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
