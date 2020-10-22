class ArgumentOutOfRangeException extends Error {}

describe('64479188', () => {
  it('toThrowError test case', () => {
    expect(() => {
      throw new ArgumentOutOfRangeException();
    }).toThrowError(ArgumentOutOfRangeException);
  });
});
