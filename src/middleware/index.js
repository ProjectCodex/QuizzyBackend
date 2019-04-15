import cors from 'cors';
import morgan from 'morgan';
import express from 'express';

export const middleware = {
  cors: cors(),
  json: express.json(),
  morgan: morgan('dev'),
};
