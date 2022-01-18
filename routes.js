const { Router } = require("express");

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
  return res.json({ message: "hello world!" });
});

module.exports = router;
