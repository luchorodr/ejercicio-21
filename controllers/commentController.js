const { Comment, Article, User } = require("../models");

async function create(req, res) {
  await Comment.create({
    content: req.body.ingresarComentario,
    articleId: req.params.articleId,
    userId: req.user.id,
  });
  res.redirect(`/articles/${req.params.articleId}`);
}

async function destroy(req, res) {
  await Comment.destroy({ where: { id: req.params.commentId } });
  res.redirect(`/articles/${req.params.articleId}`);
}

module.exports = {
  destroy,
  create,
};
