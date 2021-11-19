class BeverageFactory {
  public soda = 'coke';

  public get meSomething() {
    return this.soda;
  }

  public retrieveSoda() {
    return this.meSomething;
  }
}

describe('70026846', () => {
  it('should pass', () => {
    const sodaMachine = new BeverageFactory();
    spyOnProperty(sodaMachine, 'meSomething', 'get').and.callThrough();
    console.log('retrieveSoda: ', sodaMachine.retrieveSoda());
  });
});
