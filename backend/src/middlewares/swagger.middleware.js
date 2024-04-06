const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0", // Specify the version of OpenAPI
    info: {
      title: "Backend Assesment",
      version: "1.0.0",
      description: "This apis are used for assesment",
    },
  },
  // Paths to files containing OpenAPI specs
  apis: ["./src/routes/*.js"], // Path to the API routes files
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
