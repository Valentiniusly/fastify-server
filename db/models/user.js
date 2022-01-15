module.exports = async function (fastify, { Sequelize }) {
  const { DataTypes } = Sequelize;
  fastify.db.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
