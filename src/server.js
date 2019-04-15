import express from 'express';

import { connect } from './utils';
import config from './config';
import { routes } from './api/routes';
import { middleware } from './middleware';

const app = express();

// Auto Register all middleware
Object.values(middleware).map(ware => app.use(ware));

// Auto Register all routes
Object.values(routes).map(route => app.use('/api/v1/', route));

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
