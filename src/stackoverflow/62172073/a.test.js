const supertest = require('supertest');
xdescribe('62172073 - a', () => {
  it('should pass', () => {
    return supertest(global.app).get('/api').expect(200);
  });
});
