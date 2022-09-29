const { Article } = require("../models");

async function showHome(req, res) {
  const articles = await Article.findAll();
  res.render("home", { articles });
}

async function showAdmin(req, res) {
  res.render("admin");
}

async function showCrear(req, res) {
  res.render("crearArticulo");
}

async function showModificar(req, res) {
  res.render("modificarArticulo");
}

// Otros handlers...
// ...

module.exports = {
  showHome,
  showAdmin,
  showCrear,
  showModificar,
};
