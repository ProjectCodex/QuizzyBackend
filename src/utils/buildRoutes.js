import express from 'express';

const router = express.Router();

const controller = (req, res) => {
  return res.status(200).json({ success: 'true' });
};

const postController = (req, res) => {
  return res.status(201).json({
    success: 'true',
    message: 'Post was made successfully',
  });
};

const buildRoutes = (resource = '/') => {
  router
    .route(resource)
    .get(controller)
    .post(postController);

  router
    .route(`${resource}/:id`)
    .put(controller)
    .delete(controller);

  return router;
};

export default buildRoutes;
