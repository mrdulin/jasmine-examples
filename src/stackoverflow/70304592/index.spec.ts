describe('70304592', () => {
  it('should pass', () => {
    const funSpy = jasmine.createSpyObj('fun', {}, { get: jasmine.createSpy(), value: 'please upvote xD' });
    funSpy.get.and.returnValue('1');
    let serviceSpy = jasmine.createSpyObj(['fun']);
    serviceSpy.fun.and.returnValue(funSpy);
    const x = serviceSpy.fun();
    expect(x.get()).toBe('1');
    expect(x.value).toBe('please upvote xD');
  });
});
