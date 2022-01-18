const { Router } = require("express");
const countries = require("./config/countries.json");

const router = Router();

/**
 * @openapi
 * /:
 *   get:
 *     description: Hello World!
 *     responses:
 *       200:
 *         description: Returns a string.
 */
router.get("/", (req, res) => {
  return res.json({ countries: countries });
});

module.exports = router;
