const express = require("express");
const adminRouter = express.Router();
const pagesController = require("../controllers/pagesController");

adminRouter.get("/", pagesController.showAdmin);

adminRouter.get("/crear", pagesController.showCrear);

module.exports = adminRouter;
