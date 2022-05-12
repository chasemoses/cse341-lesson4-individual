const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'cse-341-lesson4.herokuapp.com/',
  schemes: ['http'],
  tags: [
      {
          name: 'Contacts',
          description: 'API info for interacting with contacts in mongodb.'
      }
  ]
};

const outputFile = './swagger/swagger-output.json';
const endpointsFiles = ['./routes/contacts.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

   swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('../server.js'); // Your project's root file
  });