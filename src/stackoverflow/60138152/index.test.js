const { ssm, main } = require('./');

describe('60138152', () => {
  it('should pass', async () => {
    const data = 'fake data';
    const getParameterRequestStub = { promise: jasmine.createSpy('promise') };
    const getParameterStub = spyOn(ssm, 'getParameter').and.callFake((params, callback) => {
      callback(null, data);
      getParameterRequestStub.promise.and.resolveTo(data);
      return getParameterRequestStub;
    });
    await expectAsync(main('test params')).toBeResolvedTo('fake data');
    expect(getParameterStub).toHaveBeenCalledWith('test params', jasmine.any(Function));
    expect(getParameterRequestStub.promise).toHaveBeenCalledTimes(1);
  });

  it('should throw error', async () => {
    const mError = new Error('network');
    const getParameterRequestStub = { promise: jasmine.createSpy('promise') };
    const getParameterStub = spyOn(ssm, 'getParameter').and.callFake((params, callback) => {
      callback(mError);
      getParameterRequestStub.promise.and.rejectWith(mError);
      return getParameterRequestStub;
    });
    await expectAsync(main('test params')).toBeRejectedWithError('network');
    expect(getParameterStub).toHaveBeenCalledWith('test params', jasmine.any(Function));
  });
});
