import express from "express"

const router = express.Router();

/**
 * This is just here to test that the application bootstraps properly
 */
router.get("/", (req, res) => {
  res.json({
    status: "I AM ALIVE"
  });
});

export default router;