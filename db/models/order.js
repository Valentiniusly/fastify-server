module.exports = async function (fastify, { Sequelize }) {
  const { DataTypes } = Sequelize;
  fastify.db.define(
    'order',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: fastify.db.models.user,
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
