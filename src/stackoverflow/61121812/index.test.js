const obj = require('./');
const https = require('https');

describe('61121812', () => {
  it('should process file', async () => {
    const response = {
      pipe: jasmine.createSpy().and.callFake(function (processor) {
        processor();
        return this;
      }),
      on: jasmine.createSpy().and.callFake(function (event, callback) {
        if (event === 'finish') {
          callback();
        }
        return this;
      }),
    };
    const csvParserStub = spyOn(obj, 'csvParser');
    const getStub = spyOn(https, 'get').and.callFake((url, func) => func(response));
    await obj.fn();
    expect(getStub).toHaveBeenCalledWith('example.com', jasmine.any(Function));
    expect(csvParserStub).toHaveBeenCalled();
    expect(response.pipe).toHaveBeenCalledTimes(2);
    expect(response.on).toHaveBeenCalledTimes(2);
    expect(response.on).toHaveBeenCalledWith('finish', jasmine.any(Function));
    expect(response.on).toHaveBeenCalledWith('error', jasmine.any(Function));
  });

  it('should handle error', async () => {
    const response = {
      pipe: jasmine.createSpy().and.callFake(function (processor) {
        processor();
        return this;
      }),
      on: jasmine.createSpy().and.callFake(function (event, callback) {
        if (event === 'error') {
          const mError = new Error('network');
          callback(mError);
        }
        return this;
      }),
    };
    const getStub = spyOn(https, 'get').and.callFake((url, func) => func(response));
    await expectAsync(obj.fn()).toBeRejectedWithError('network');
    expect(getStub).toHaveBeenCalledWith('example.com', jasmine.any(Function));
    expect(response.pipe).toHaveBeenCalledTimes(2);
    expect(response.on).toHaveBeenCalledTimes(2);
    expect(response.on).toHaveBeenCalledWith('finish', jasmine.any(Function));
    expect(response.on).toHaveBeenCalledWith('error', jasmine.any(Function));
  });
});
