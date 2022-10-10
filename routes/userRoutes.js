const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");
const checkIfAuthenticated = require("../middlewares/checkIfAuthenticated");
const checkIfAdmin = require("../middlewares/checkIfAdmin");

userRouter.use(checkIfAuthenticated);

userRouter.get("/users/profile/:id", checkIfAdmin, userController.show);

module.exports = userRouter;
