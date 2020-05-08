const service = {
  fn() {},
};

const mockService = jasmine.createSpyObj(service, 'fn');

describe('test', () => {
  beforeEach(function () {
    mockService.fn.calls.reset();
  });

  it('a', () => {
    mockService.fn();
    expect(mockService.fn).toHaveBeenCalledTimes(1);
  });

  it('b', () => {
    mockService.fn();
    expect(mockService.fn).toHaveBeenCalledTimes(1);
  });
});
