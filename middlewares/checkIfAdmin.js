function checkIfAdmin(req, res, next) {
  if (req.user.role.accesLevel > 3) return next();
  return res.redirect("/");
}

module.exports = checkIfAdmin;
