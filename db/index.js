const { readdirSync } = require('fs');
const path = require('path');
const fsequelize = require('fastify-sequelize');
const fastifyPlugin = require('fastify-plugin');
const Sequelize = require('sequelize');

const db = async function (fastify) {
  fastify
    .register(fsequelize, {
      username: 'root',
      password: 'zxczxczxc',
      port: 3306,
      database: 'test_db',
      dialect: 'mysql',
      instance: 'db',
    })
    .ready(() => {
      fastify.db
        .authenticate()
        .then(() => {
          console.log('Connection has been established successfully.');
          readdirSync(path.join(__dirname, 'models')).forEach((file) => {
            require('./models/' + file)(fastify, { Sequelize });
          });
        })
        .catch((err) => {
          console.error('Unable to connect to the database:', err);
        });
    });
};

module.exports = fastifyPlugin(db);
