const express = require("express");
const publicRouter = express.Router();
const pagesController = require("../controllers/pagesController");
const commentController = require("../controllers/commentController");
const userController = require("../controllers/userController");

publicRouter.get("/", pagesController.showHome);

publicRouter.get("/articulo/:id", pagesController.showArticulo);

publicRouter.get("/eliminar/:id", commentController.destroy);

publicRouter.post("/articulo/:id", commentController.store);

publicRouter.get("/api/articulos", pagesController.showArticles);

module.exports = publicRouter;
