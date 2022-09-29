const express = require("express");
const publicRouter = express.Router();
const pagesController = require("../controllers/pagesController");
// Rutas Públicas:
// ...
publicRouter.get("/", pagesController.showHome);

publicRouter.get("/contact", pagesController.showContact);

publicRouter.get("/aboutUs", pagesController.showAboutUs);

module.exports = publicRouter;
