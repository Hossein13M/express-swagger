const { Router } = require("express");
const countries = require("./config/countries.json");

const router = Router();

/**
 * @swagger
 * /country:
 *   get:
 *     description: Fetch List Of Countries!
 *     tags:
 *      - Country
 *     responses:
 *       200:
 *         description: Returns an array of country name and their code.
 */
router.get("", (req, res) => {
  return res.json({ countries: countries });
});

/**
 * @swagger
 * /country/{code}:
 *  get:
 *    summary: Get an specific country
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
router.get("/:code", async function (req, res) {
  const countryCode = req.params.code;
  let foundCountry = await countries.find(
    (country) => country.code === countryCode
  );
  res.json({ countries: foundCountry });
});

module.exports = router;
