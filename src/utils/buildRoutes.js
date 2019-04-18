import express from 'express';

import { Controller } from '../api/controllers';

const router = express.Router();

const buildRoutes = (resource = '/', model) => {
  const controller = new Controller(model);

  router
    .route(resource)
    .get(controller.list)
    .post(controller.create);

  router
    .route(`${resource}/:id`)
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete);

  return router;
};

export default buildRoutes;
