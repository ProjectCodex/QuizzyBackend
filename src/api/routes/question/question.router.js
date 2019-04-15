import express from 'express';

const router = express.Router();
const controller = (req, res) => {
  return res.status(201).send({
    success: 'true',
    message: 'Post was made successfully',
  });
};

router
  .route('/question')
  .get(controller)
  .post(controller);

router
  .route('/question/:id')
  .put(controller)
  .delete(controller);

export default router;
