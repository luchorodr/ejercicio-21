const { Comment, Article, User } = require("../models");

async function store(req, res) {
  let user = await User.findOne({ where: { email: `${req.body.ingresarEmail}` } });
  if (!user) {
    user = await User.create({
      firstname: req.body.ingresarNombre,
      lastname: req.body.ingresarApellido,
      email: req.body.ingresarEmail,
    });
  }

  await Comment.create({
    content: req.body.ingresarComentario,
    articleId: req.params.id,
    userId: user.id,
  });
  res.redirect(`/articulo/${req.params.id}`);
}

async function destroy(req, res) {
  const comment = await Comment.findOne({ where: { id: req.params.id } });

  await Comment.destroy({ where: { id: req.params.id } });
  res.redirect(`/articulo/${comment.articleId}`);
}

module.exports = {
  destroy,
  store,
};
