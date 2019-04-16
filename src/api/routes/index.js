import buildRoutes from '../../utils/buildRoutes';

export const routes = {
  quizRouter: buildRoutes('/quiz'),
  categoryRouter: buildRoutes('/category'),
  questionRouter: buildRoutes('/question'),
};
