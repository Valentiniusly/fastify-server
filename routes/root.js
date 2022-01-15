'use strict';

module.exports = async function (fastify) {
  fastify.get('/users', async function (request, reply) {
    return await fastify.db.models.user.findAll();
  });
  fastify.get('/orders', async function (request, reply) {
    return await fastify.db.models.order.findAll();
  });
};
