const express = require("express");
const adminRouter = express.Router();
const pagesController = require("../controllers/pagesController");

adminRouter.get("/", pagesController.showAdmin);

adminRouter.get("/crear", pagesController.showCrear);

adminRouter.get("/modificar/:id", pagesController.showModificar);

module.exports = adminRouter;
