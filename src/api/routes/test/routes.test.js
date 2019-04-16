import request from 'supertest';
import app from '../../../server';

describe('App Routes', () => {
  test('quiz route should exist and return OK', () => {
    return request(app)
      .post('/api/v1/quiz')
      .expect(201);
  });

  test('category route should exist and return OK', () => {
    return request(app)
      .get('/api/v1/category')
      .expect(200);
  });

  test('question route should exist and return OK', () => {
    return request(app)
      .get('/api/v1/question')
      .expect(200);
  });
});
