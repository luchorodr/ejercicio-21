const express = require("express");
const publicRouter = express.Router();
const pagesController = require("../controllers/pagesController");
const articleController = require("../controllers/articleController");

publicRouter.get("/", pagesController.showHome);

publicRouter.get("/articulo/:id", pagesController.showArticulo);

publicRouter.get("/eliminar/:id", articleController.eliminarComentario);

module.exports = publicRouter;
