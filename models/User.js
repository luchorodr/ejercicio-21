const bcrypt = require("bcryptjs");

module.exports = (sequelize, Model, DataTypes) => {
  class User extends Model {
    async passwordCheck(password) {
      return await bcrypt.compare(password, this.password);
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      img: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "user",
    },
  );

  User.beforeCreate(async (user, options) => {
    const passwordhasheada = await bcrypt.hash(user.password, 10);

    user.password = passwordhasheada;
  });

  User.beforeBulkCreate(async (users, options) => {
    for (const user of users) {
      const passwordHasheada = await bcrypt.hash(user.password, 10);
      user.password = passwordHasheada;
    }
  });

  return User;
};
