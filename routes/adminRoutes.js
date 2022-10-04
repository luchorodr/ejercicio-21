const express = require("express");
const adminRouter = express.Router();
const pagesController = require("../controllers/pagesController");
const articleController = require("../controllers/articleController");
const userController = require("../controllers/userController");

adminRouter.get("/", pagesController.showAdmin);

adminRouter.get("/crear", pagesController.showCrear);

adminRouter.get("/modificar/:id", pagesController.showModificar);

adminRouter.post("/modificar/:id", articleController.edit);

adminRouter.get("/eliminar/:id", articleController.eliminar);

adminRouter.post("/",  articleController.store);

module.exports = adminRouter;
