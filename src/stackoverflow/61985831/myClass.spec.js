import { MyClass } from './myClass';

describe('my class', function () {
  var myClassInstance;
  beforeEach(function () {
    myClassInstance = new MyClass();
  });

  it('is an instance of MyClass', function () {
    expect(myClassInstance).toBeInstanceOf(MyClass);
  });
});
