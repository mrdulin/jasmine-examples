const checkEnvirenmentHost = require('./');

describe('72563579', () => {
  it('should pass - HTTPS_HOST', () => {
    process.env.HTTPS_HOST = '127.0.0.1';
    const actual = checkEnvirenmentHost();
    expect(actual).toEqual('127.0.0.1');
    process.env.HTTPS_HOST = undefined;
  });
  it('should pass - https_HOST', () => {
    process.env.https_HOST = '127.0.0.1';
    const actual = checkEnvirenmentHost();
    expect(actual).toEqual('127.0.0.1');
    process.env.https_HOST = undefined;
  });
});
