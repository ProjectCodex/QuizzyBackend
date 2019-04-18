import { Quiz, Category, Question, User } from '../models';
import buildRoutes from '../../utils/buildRoutes';

export const routes = {
  quizRouter: buildRoutes('/quiz', Quiz),
  categoryRouter: buildRoutes('/category', Category),
  questionRouter: buildRoutes('/question', Question),
  userRouter: buildRoutes('/user', User),
};
