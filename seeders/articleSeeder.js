const { faker } = require("@faker-js/faker");
const { Article } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const articles = [];

  for (let i = 0; i < 15; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      userId: faker.datatype.number({
        min: 2,
        max: 3,
      }),
      // Cambio aqui de img: "/img/uploads/seeder-img.jpg" //
      img: "seeder-img.jpg",
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};
