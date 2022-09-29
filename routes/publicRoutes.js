const express = require("express");
const publicRouter = express.Router();
const pagesController = require("../controllers/pagesController")
// Rutas Públicas:
// ...


publicRouter.get("/home", pagesController.showHome )

module.exports = publicRouter;
