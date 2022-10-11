const apiRoutes = require("./apiRoutes");
const publicRoutes = require("./publicRoutes");
const adminRoutes = require("./adminRoutes");
const userRoutes = require("./userRoutes");
const makeUserAvailableInViews = require("../middlewares/makeUserAvailableInViews");

module.exports = (app) => {
  app.use(apiRoutes);
  app.use(makeUserAvailableInViews);
  app.use(publicRoutes);
  app.use("/admin", adminRoutes);
  app.use(userRoutes);
};
