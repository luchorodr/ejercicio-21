const { User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  let users = await User.findAll();
  res.render("users", { users });
}

// Display the specified resource.
async function show(req, res) {
  res.render("profile");
}

// Show the form for creating a new resource
async function create(req, res, next) {}

// Store a newly created resource in storage.
async function store(req, res, next) {}

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
