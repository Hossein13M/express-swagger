const express = require("express");
const router = require("./routes");
const swaggerConfig = require("./config/swagger-config");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

const specs = swaggerJsdoc(swaggerConfig);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.use("/country", router);

app.listen(3000, () => {
  console.log("hello world!");
});
