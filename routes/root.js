'use strict';

module.exports = async function (fastify) {
  fastify.get('/', async function (request, reply) {
    return await fastify.db.models.order.findAll();
  });
};
