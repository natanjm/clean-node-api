import request from 'supertest';
import app from '../config/app';


describe('Signup route', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Natan',
        email: 'natan.junges@hotmail.com',
        password: '123',
        password_confirmation: '123'
      })
      .expect(200)
  });
});