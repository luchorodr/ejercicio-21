const { User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res, next) {
  const user = await User.findOne({ where: { email: `${req.body.ingresarEmail}` } });
  if (user === null) {
    await User.create({
      firstname: req.body.ingresarNombre,
      lastname: req.body.ingresarApellido,
      email: req.body.ingresarEmail,
    });
  }
  next();
}

// Store a newly created resource in storage.
async function store(req, res, next) {
  await User.create({
    firstname: req.body.crearNombre,
    lastname: req.body.crearApellido,
    email: req.body.crearEmail,
  });
  next();
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
