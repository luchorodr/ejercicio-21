const express = require("express");
const publicRouter = express.Router();
const pagesController = require("../controllers/pagesController");

publicRouter.get("/", pagesController.showHome);

publicRouter.get("/articulo/:id", pagesController.showArticulo);

module.exports = publicRouter;
