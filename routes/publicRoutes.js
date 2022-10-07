const express = require("express");
const passport = require("passport");
const publicRouter = express.Router();
const pagesController = require("../controllers/pagesController");
const commentController = require("../controllers/commentController");

publicRouter.get("/", pagesController.showHome);

publicRouter.get("/login", pagesController.showLogin);

publicRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/login",
  }),
);

publicRouter.get("/register", pagesController.showRegister);
publicRouter.post("/register", pagesController.postRegister);

publicRouter.get("/logout", pagesController.logOut);

publicRouter.get("/articles/:id", pagesController.showArticulo);

publicRouter.post("/articles/:articleId/comments", commentController.store);

publicRouter.get("/api/articulos", pagesController.showArticles);

module.exports = publicRouter;
