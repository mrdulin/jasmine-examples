const proxyquire = require('proxyquire');

describe('61277026', () => {
  it('should call original TestClass', () => {
    const TestClass = require('./TestClass');
    const logSpy = spyOn(console, 'log').and.callThrough();
    const main = require('./');
    const actual = main();
    expect(actual).toBeInstanceOf(TestClass);
    expect(logSpy).toHaveBeenCalledWith('call method');
  });
  it('should call mocked TestClass', () => {
    const testClassInstance = jasmine.createSpy('testClassInstance');
    const TestClassSpy = jasmine.createSpy('TestClass').and.callFake(() => testClassInstance);
    const main = proxyquire('./', {
      './TestClass': TestClassSpy,
    });
    const actual = main();
    expect(actual).toBe(testClassInstance);
    expect(TestClassSpy).toHaveBeenCalledTimes(1);
  });
});
