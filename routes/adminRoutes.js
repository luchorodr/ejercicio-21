const express = require("express");
const adminRouter = express.Router();
const pagesController = require("../controllers/pagesController");
const articleController = require("../controllers/articleController");
const commentController = require("../controllers/commentController");
const userController = require("../controllers/userController");
const checkIfAuthenticated = require("../middlewares/checkIfAuthenticated");
const checkIfAdmin = require("../middlewares/checkIfAdmin");

adminRouter.use(checkIfAuthenticated);

adminRouter.get("/", pagesController.showAdmin);

adminRouter.get("/articles/create", pagesController.showCrear);

adminRouter.post("/articles", articleController.store);

adminRouter.get("/articles/:id/edit", pagesController.showModificar);

adminRouter.post("/articles/:id/edit", articleController.edit);

adminRouter.get("/articles/:id/delete", articleController.destroy);

adminRouter.get("/articles/:articleId/comments/:commentId/delete", commentController.destroy);

adminRouter.get("/users", checkIfAdmin, userController.index);

module.exports = adminRouter;
