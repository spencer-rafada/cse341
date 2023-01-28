const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts Backend Project',
    description:
      'This web service allows you to get, add, update, and delete contacts. The purpose of this web service is to develop a well-documented REST API available in production.'
  },
  host: 'contacts-project.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
