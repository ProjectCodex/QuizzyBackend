import express from 'express';

import { connect } from './utils';
import config from './config';
import router from './routes';
import { middleware } from './middleware';

const app = express();
const allMiddleware = { ...middleware, json: express.json() };

// Auto Register all middleware
Object.values(allMiddleware).map(ware => app.use(ware));

// Auto Register all routes
app.use('/api/v1/', router);

export const start = async () => {
  try {
    await connect();

    app.listen(config.port, () => {
      console.log(
        `Connect with API at http://localhost:${config.port}/api/v1/`
      );
    });
  } catch (e) {
    console.error(e);
  }
};

export default app;
