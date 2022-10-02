const express = require("express");
const publicRouter = express.Router();
const pagesController = require("../controllers/pagesController");
const commentController = require("../controllers/commentController");
const userController = require("../controllers/userController");

publicRouter.get("/", pagesController.showHome);

publicRouter.get("/articulo/:id", pagesController.showArticulo);

publicRouter.get("/eliminar/:id", commentController.eliminarComentario);

publicRouter.get("/comentar/:id", pagesController.showComentar);

publicRouter.post("/articulo/:id", [userController.create, commentController.comentar]);

module.exports = publicRouter;
