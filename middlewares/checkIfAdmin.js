function checkIfAdmin(req, res, next) {
  if (req.user.role.accesLevel > 30 || req.user.id === req.params.articleId) return next();
  return res.redirect("/");
}

module.exports = checkIfAdmin;
