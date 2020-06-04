const supertest = require('supertest');
describe('62172073 - a', () => {
  it('should pass', () => {
    return supertest(global.app).get('/api').expect(200);
  });
});
