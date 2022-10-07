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
    articleId: req.params.articleId,
    userId: user.id,
  });
  res.redirect(`/articles/${req.params.articleId}`);
}

async function destroy(req, res) {
  await Comment.destroy({ where: { id: req.params.commentId } });
  res.redirect(`/articles/${req.params.articleId}`);
}

module.exports = {
  destroy,
  store,
};
