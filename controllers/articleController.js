const { Article, User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  const newUser = await User.create({
    firstname: req.body.crearNombre,
    lastname: req.body.crearApellido,
    email: req.body.crearEmail,
  });
  await Article.create({
    title: req.body.crearTitulo,
    content: req.body.crearContenido,
    userId: newUser.id,
  });

  res.redirect("admin");
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const article = await Article.update(
    { title: req.body.modificarTitulo, content: req.body.modificarContenido },
    { where: { id: req.params.id } },
  );
  res.redirect("/admin");
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function eliminar(req, res) {
  const article = await Article.destroy({ where: { id: req.params.id } });
  res.redirect("/admin");
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  eliminar,
};
