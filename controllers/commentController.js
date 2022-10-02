const { Comment, Article, User } = require("../models");

async function comentar(req, res) {
  const user = await User.findOne({
    where: { email: `${req.body.ingresarEmail}` },
  });
  const comment = await Comment.create({
    content: req.body.ingresarComentario,
    articleId: req.params.id,
    userId: user.id,
  });
  res.redirect(`/articulo/${req.params.id}`);
}

async function eliminarComentario(req, res) {
  await Comment.destroy({ where: { id: req.params.id } });
  res.redirect("/");
}

module.exports = {
  eliminarComentario,
  comentar,
};
