import express from 'express';

const router = express.Router();

/**
 * This is just here to test that the application bootstraps properly
 */
router.route('/').get((req, res) => {
  return res.json({
    status: 'I AM ALIVE',
  });
});

router.route('/quiz').post((req, res) => {
  return res.status(201).send({
    success: 'true',
    message: 'Post was made successfully',
  });
});

export default router;
