// Api routes
const express = require("express");
const router = express.Router();
const { Article, User, Comment } = require("../models");
var jwt = require("jsonwebtoken");
var { expressjwt: checkJwt } = require("express-jwt");

router.get("/api/articles", async function index(req, res) {
  let articles = await Article.findAll();

  res.json({ articles });
});

router.get("/api/articles/search", async function showSearch(req, res) {
  console.log(req.query);
  let articles = await Article.findAll({ where: req.query });

  res.json({ articles });
});

router.post(
  "/api/articles",
  checkJwt({ secret: process.env.API_TOKEN_SECRETSTRING, algorithms: ["HS256"] }),
  async function store(req, res) {
    const newArticle = await Article.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.body.userId,
      img: req.body.img,
    });
    res.json(newArticle);
  },
);

router.delete(
  "/api/articles/:id",
  checkJwt({ secret: process.env.API_TOKEN_SECRETSTRING, algorithms: ["HS256"] }),
  async function destroy(req, res) {
    let articles = await Article.destroy({ where: { id: req.params.id } });

    res.send("Usuario Borrado");
  },
);

router.patch(
  "/api/articles/:id/edit",
  checkJwt({ secret: process.env.API_TOKEN_SECRETSTRING, algorithms: ["HS256"] }),
  async function update(req, res) {
    let articleModifcationSubmit = await Article.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      { where: { id: req.params.id } },
    );

    res.send("Articulo modificado satisfactoriamente");
  },
);

router.post("/tokens", async function (req, res) {
  let user;

  try {
    user = await User.findOne({ where: { email: req.body.email } }, { include: "role" });
    console.log(user.roleId.accesLevel);
  } catch (error) {
    return done(error);
  }
  if (!user) return res.send("Usuario no encontrado");

  if (user.roleId.accesLevel < 30) {
    return res.send("Credenciales Incorrectas Acces-level =" + user.roleId.accesLevel);
  }
  console.log(req.body.password);
  const checkPassword = await user.passwordCheck(req.body.password);

  if (!checkPassword) {
    return res.json("Credenciales Incorrectas");
  }
  let payload = { email: req.body.email, role: user.roleId.accesLevel };
  const token = jwt.sign(payload, process.env.API_TOKEN_SECRETSTRING);
  return res.json({ token });
});

module.exports = router;
