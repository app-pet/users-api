require('dotenv/config');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Super App Pet",
        version: "1.0.0",
        description:  "O Marketplace de Serviços e Produtos para Pets",
        license: {
          name: "MIT",
          url: "https://choosealicense.com/licenses/mit/"
        },
        contact: {
          name: "Swagger",
          url: "https://swagger.io",
          email: "Info@SmartBear.com"
        }
      },
      servers: [
        {
          url: `${process.env.HOST}:${process.env.PORT}/api/`
        }
      ]
    },
    apis: ['./src/routes.js', './src/app/models/*.js']
  };


module.exports = swaggerJsdoc(options);
