import request from 'supertest';
import app from '../../../server';

describe('App Routes', () => {
  test('home route should exist and return OK', () => {
    return request(app)
      .get('/api/v1/')
      .expect(200);
  });

  test('quiz route should exist and return OK', () => {
    return request(app)
      .post('/api/v1/quiz')
      .expect(201);
  });
});
