import { mergeRight } from 'ramda';

const env = process.env.NODE_ENV || 'dev';
const baseConfig = {
  env,
  isDev: env === 'dev',
  isTest: env === 'test',
  port: 8080,
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: '1d',
  },
};

let envConfig = {};

switch (env) {
  case 'prod':
    envConfig = require('./prod').config;
    break;
  case 'testing':
    envConfig = require('./testing').config;
    break;
  case 'dev':
  default:
    envConfig = require('./dev').config;
}

export default mergeRight(baseConfig, envConfig);
