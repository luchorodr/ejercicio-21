const express = require("express");
const publicRouter = express.Router();
const pagesController = require("../controllers/pagesController");

publicRouter.get("/", pagesController.showHome);

module.exports = publicRouter;
