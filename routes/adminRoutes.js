const express = require("express");
const adminRouter = express.Router();
const pagesController = require("../controllers/pagesController");
const articleController = require("../controllers/articleController");

adminRouter.get("/", pagesController.showAdmin);

adminRouter.get("/crear", pagesController.showCrear);

adminRouter.get("/modificar/:id", pagesController.showModificar);

adminRouter.post("/modificar/:id", articleController.edit);

module.exports = adminRouter;
