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

module.exports = router;
