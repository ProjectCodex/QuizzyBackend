import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { connect } from './utils';
import config from './config';
import { routes } from './api/routes';

const app = express();

// Register all app middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Register all routes
Object.values(routes).map(route => app.use('/api/v1/', route));

export const start = async () => {
  try {
    // Connect to the database
    await connect();

    //Start the api server
    app.listen(config.port, () => {
      console.log(`API running at http://localhost:${config.port}/api/v1/`);
    });
  } catch (err) {
    console.error(err);
  }
};

export default app;
