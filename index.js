const swaggerConfig = require('./config/swagger-config');
const express = require("express"),
  bodyParser = require("body-parser"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");

const router = require('./routes');

const app = express();

const specs = swaggerJsdoc(swaggerConfig);

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, {explorer: true})
  );

app.use('', router)

app.listen(3000, ()=>{
    console.log('test!')
  });