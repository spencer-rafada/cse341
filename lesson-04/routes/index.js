const routes = require('express').Router();
const swaggerUi = require(`swagger-ui-express`);
const swaggerDocument = require(`../swagger.json`);

routes.get('/', (req, res, next) => {
  // #swagger.description = 'Root endpoint describing what endpoints are available'
  res.json('Navigate to /api-docs for API documentation');
});

routes.use('/contacts', require('./contacts'));
// Swagger Documentation
routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = routes;
