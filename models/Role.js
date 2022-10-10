module.exports = (sequelize, Model, DataTypes) => {
  class Role extends Model {}

  Role.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: DataTypes.STRING },
      accesLevel: { type: DataTypes.BIGINT },
    },
    {
      sequelize,
      modelName: "role",
    },
  );

  return Role;
};
