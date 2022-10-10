const { faker } = require("@faker-js/faker");
const { Role } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const role = [];
  const roles = [];

  role.push({
    name: WRITER,
    code: 10,
    userId: faker.datatype.number({
      min: 1,
      max: 15,
    }),
    // Cambio aqui de img: "/img/uploads/seeder-img.jpg" //
  });

  await Role.bulkCreate(roles);
  console.log("[Database] Se corrió el seeder de Roles.");
};
