import { Controller, QuestionController } from '../controllers';
import { Quiz, Category, Question, User } from '../models';
import buildRoutes from '../../utils/buildRoutes';

export const routes = {
  quizRouter: buildRoutes({
    resource: 'quiz',
    controller: new Controller(Quiz),
  }),
  categoryRouter: buildRoutes({
    resource: 'category',
    controller: new Controller(Category),
  }),
  questionRouter: buildRoutes({
    resource: 'question',
    controller: new QuestionController(Question),
  }),
  userRouter: buildRoutes({
    resource: 'user',
    controller: new Controller(User),
  }),
};
