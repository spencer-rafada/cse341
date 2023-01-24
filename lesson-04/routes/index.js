const routes = require('express').Router();
const swaggerUi = require(`swagger-ui-express`);
const swaggerDocument = require(`../swagger.json`);

routes.get('/', (req, res, next) => {
  res.json('Navigate to /contacts, then /contacts/{_id}, and /contacts/search?id={_id}');
});

routes.use('/contacts', require('./contacts'));
// Swagger Documentation
routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = routes;
