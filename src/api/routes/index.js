import config from '../../config';
import { Controller } from '../controllers';
import { Quiz, Category, Question, User } from '../models';
import { buildRoutes } from '../../utils';
import { routeGuard } from '../../middleware';

import authRouter from './auth.router';

export const routes = {
  quizzes: buildRoutes({ controller: new Controller(Quiz), guard: routeGuard }),
  categories: buildRoutes({
    controller: new Controller(Category),
    guard: routeGuard,
  }),
  questions: buildRoutes({
    controller: new Controller(Question),
    guard: routeGuard,
  }),
  users: buildRoutes({
    controller: new Controller(User),
    guard: { methods: ['get', 'list', 'put', 'delete'], routeGuard },
  }),
  login: authRouter,
};
const setUpRoutes = server =>
  Object.entries(routes).map(({ 0: route, 1: router }) =>
    server.use(`/api/${config.apiVersion}/${route}`, router)
  );

export default setUpRoutes;
