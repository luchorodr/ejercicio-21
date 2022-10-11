require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const session = require("express-session");
const passport = require("passport");

const dbInitialSetup = require("./dbInitialSetup");
const passportConfig = require("./config/passport");
const { show } = require("./controllers/articleController");
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
// Api routes

app.get("/api/articles", async function index(req, res) {
  res.send("hola");
});

app.get("/api/articles/:id", async function show(req, res) {});

app.get("/api/articles/:keyword", async function show(req, res) {});

app.post("/api/articles", async function store(req, res) {});

app.delete("/api/articles/:id", async function destroy(req, res) {});

app.patch("/api/articles/:id/editar", async function update(req, res) {});

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
