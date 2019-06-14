import request from 'supertest';
import app from '../../../server';
import { MongoClient } from 'mongodb';

const base = '/api/v1';

let connection;

let agent;

beforeAll(async () => {
  connection = await MongoClient.connect(global.__MONGO_URI__, {
    useNewUrlParser: true,
  });

  db = await connection.db(global.__MONGO_DB_NAME__);

  agent = request.agent(app);

  let token;

  agent
    .post(`${base}/users`)
    .send({ email: 'john@test.com', password: 'test' }) // <- Valiato
    .end((err, res) => {
      console.log(res);
      token = res.token;
    });

  agent
    .post(`${base}/login`)
    .set('Authorization', `Bearer: ${token}`)
    .send({ email: 'john@test.com', password: 'test' })
    .end();
});

afterAll(async () => {
  await connection.close();
});

describe('App Routes unauthenticated', () => {
  test('quiz route should exist and return OK', () => {
    return agent.post(base + '/quizzes').expect(401);
  });

  test('category route should exist and return OK', () => {
    return agent.get(base + '/categories').expect(401);
  });

  test('question route should exist and return OK', () => {
    return agent.get(base + '/questions').expect(401);
  });
});
