const { faker } = require("@faker-js/faker");
const { User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const users = [];

  users.push({
    firstname: "lector",
    lastname: "lector",
    email: "lector@prueba",
    password: "1234",
    role: 1,
    img: "userseeder.jpg",
  });

  users.push({
    firstname: "escritor",
    lastname: "escritor",
    email: "escritor@prueba",
    password: "1234",
    role: 2,
    img: "userseeder.jpg",
  });
  users.push({
    firstname: "editor",
    lastname: "editor",
    email: "editor@prueba",
    password: "1234",
    role: 3,
    img: "userseeder.jpg",
  });
  users.push({
    firstname: "Admin",
    lastname: "Admin",
    email: "admin@prueba",
    password: "1234",
    role: 4,
    img: "userseeder.jpg",
  });

  for (let i = 0; i < 15; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: "1234",
      role: faker.datatype.number({ min: 1, max: 4 }),
      img: "img/userseeder.jpg",
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
