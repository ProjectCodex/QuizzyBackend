import { Controller } from '../controllers';
import { Quiz, Category, Question, User } from '../models';
import { buildRoutes } from '../../utils';
import { routeGuard } from '../../middleware';

import authRouter from './auth.router';

export const routes = {
  quizRouter: buildRoutes({
    resource: 'quizzes',
    controller: new Controller(Quiz),
    guard: routeGuard,
  }),
  categoryRouter: buildRoutes({
    resource: 'categories',
    controller: new Controller(Category),
    guard: routeGuard,
  }),
  questionRouter: buildRoutes({
    resource: 'questions',
    controller: new Controller(Question),
    guard: routeGuard,
  }),
  userRouter: buildRoutes({
    resource: 'users',
    controller: new Controller(User),
  }),
  authRouter,
};
