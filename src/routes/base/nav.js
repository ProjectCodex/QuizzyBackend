const router = require("express").Router();

/**
 * This is just here to test that the application bootstraps properly
 */
router.get("/", (req, res) => {
  res.json({
    status: "I AM ALIVE"
  });
});

module.exports = router;
