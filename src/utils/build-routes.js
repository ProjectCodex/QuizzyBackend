import express from 'express';

const router = express.Router();

export const buildRoutes = ({
  resource,
  controller,
  guard = (...args) => args[2](),
}) => {
  router
    .route(`/${resource}`)
    .get(guard, controller.list)
    .post(guard, controller.create);

  router
    .route(`/${resource}/:id`)
    .get(guard, controller.get)
    .put(guard, controller.update)
    .delete(guard, controller.delete);

  return router;
};
