const customMatchers = {
  toBeWithThrow(matchersUtil) {
    return {
      compare: function (actual, expected) {
        const result = {};
        result.pass = matchersUtil.equals(actual, expected);
        if (result.pass) {
          result.message = 'Expected ' + actual + ' to be ' + expected;
        } else {
          throw new Error('Expected ' + actual + ' to be ' + expected);
        }
        return result;
      },
    };
  },
};

describe('54601177', () => {
  beforeEach(function () {
    jasmine.addMatchers(customMatchers);
  });
  it('should pass', () => {
    expect(2).toBeWithThrow(2);
  });
  it('should pass too', () => {
    try {
      expect(2).toBeWithThrow(3);
    } catch (error) {
      console.log(error);
    }
  });
});
