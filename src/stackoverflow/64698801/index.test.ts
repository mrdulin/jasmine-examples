const object = { function: async () => 'real data' };

function main() {
  const func = object.function;
  if (!func) return;
  func();
}

describe('64698801', () => {
  const result = 'fake data';
  it('should pass', async () => {
    spyOn(object, 'function').and.returnValue(Promise.resolve(result));
    const actual = await object.function();
    expect(actual).toEqual('fake data');
    expect(object.function).toHaveBeenCalledTimes(1);
  });

  it('should pass too', () => {
    spyOn(object, 'function').and.returnValue(Promise.resolve(result));
    main();
    expect(object.function).toHaveBeenCalledTimes(1);
  });
});
