import cors from 'cors';
import morgan from 'morgan';

export const middleware = {
  cors: cors(),
  morgan: morgan(
    ':method :url :status :res[content-length] - :response-time ms'
  ),
};
