const express = require("express");
const countries = require("./config/countries.json");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * @swagger
 * /country:
 *   get:
 *     summary: get all countries
 *     description: Fetch List Of Countries!
 *     tags:
 *      - Country
 *     responses:
 *       200:
 *         description: Returns an array of country name and their code.
 */
app.get("", (req, res) => {
  return res.json({ countries: countries });
});

/**
 * @swagger
 * /country/{code}:
 *  get:
 *    summary: Get an specific country
 *    tags:
 *      - Country
 *    parameters:
 *    - in: path
 *      name: code
 *      schema:
 *        type: number
 *      required: true
 *    description: Get an specific country
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get("/:code", async function (req, res) {
  const countryCode = req.params.code;
  let foundCountry = await countries.find(
    (country) => country.code === countryCode
  );
  res.json({ countries: foundCountry });
});

/**
 * @swagger
 * /country:
 *   post:
 *     summary: adds a new country
 *     tags:
 *      - Country
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Country name
 *                 example: Iran
 *               code:
 *                 type: number
 *                 description: country code
 *                 example: 98
 *     responses:
 *       201:
 *         description: Country has been created
 */
app.post("", async function (req, res) {
  countries.push(req.body);
  fs.writeFile("./config/countries.json", JSON.stringify(countries), () => {});
  res.json(req.body);
});

/**
 * @swagger
 * /country/{code}:
 *   put:
 *     summary: update country name
 *     tags:
 *      - Country
 *     parameters:
 *      - in: path
 *        name: code
 *        schema:
 *          type: number
 *          required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Country name
 *                 example: Iran
 *     responses:
 *       201:
 *         description: Country has been created
 */
app.put("/:code", function (req, res) {
  countries.map((country) => {
    if (country.code === +req.params.code) {
      country.name = req.body.name;
    }
  });

  fs.writeFile("./config/countries.json", JSON.stringify(countries), () => {});

  res.json(req.body);
});

/**
 * @swagger
 * /country/{code}:
 *  delete:
 *    summary: Deletes an specific country
 *    tags:
 *      - Country
 *    parameters:
 *    - in: path
 *      name: code
 *      schema:
 *        type: number
 *      required: true
 *    description: Get an specific country
 *    responses:
 *      '204':
 *        description: A successful response
 */
app.delete("/:code", async function (req, res) {
  const filteredCountries = countries.filter(
    (country) => country.code !== +req.params.code
  );

  fs.writeFile(
    "./config/countries.json",
    JSON.stringify(filteredCountries),
    () => {}
  );
  res.json({ countries: countries });
});

module.exports = app;
