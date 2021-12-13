describe('70304592', () => {
  it('should pass', () => {
    const funSpy = jasmine.createSpyObj(['get']);
    funSpy.get.and.returnValue('1');
    let serviceSpy = jasmine.createSpyObj(['fun']);
    serviceSpy.fun.and.returnValue(funSpy);
    const x = serviceSpy.fun();
    expect(x.get()).toBe('1');
  });
});
