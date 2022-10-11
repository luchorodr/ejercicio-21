const { faker } = require("@faker-js/faker");
const { Role } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const roles = [];

  roles.push({
    name: "READER",
    accesLevel: 10,
    userId: faker.datatype.number({
      min: 1,
      max: 15,
    }),
  });

  roles.push({
    name: "WRITER",
    accesLevel: 20,
    userId: faker.datatype.number({
      min: 1,
      max: 15,
    }),
  }),
    roles.push({
      name: "EDITOR",
      accesLevel: 30,
      userId: faker.datatype.number({
        min: 1,
        max: 15,
      }),
    }),
    roles.push({
      name: "ADMIN",
      accesLevel: 40,
      userId: faker.datatype.number({
        min: 1,
        max: 15,
      }),
    }),
    await Role.bulkCreate(roles);
  console.log("[Database] Se corrió el seeder de Roles.");
};
