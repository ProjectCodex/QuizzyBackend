import express from 'express';

const router = express.Router();

const buildRoutes = ({ resource, controller }) => {
  router
    .route(`/${resource}`)
    .get(controller.list)
    .post(controller.create);

  router
    .route(`/${resource}/:id`)
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete);

  return router;
};

export default buildRoutes;
