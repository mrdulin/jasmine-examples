const supertest = require('supertest');
describe('62172073 - b', () => {
  it('should pass', () => {
    return supertest(global.app).get('/api').expect(200);
  });
});
