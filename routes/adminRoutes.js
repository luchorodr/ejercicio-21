const express = require("express");
const adminRouter = express.Router();
const pagesController = require("../controllers/pagesController");

adminRouter.get("/admin", pagesController.showAdmin);

module.exports = adminRouter;
