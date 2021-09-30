import { utility } from './';

describe('69378465', () => {
  it('should pass', async () => {
    spyOn(utility, 'getInfo').and.rejectWith({ error: 500 });
    await expectAsync(utility.someFunction('a', 'b', 'c')).toBeRejectedWith({ error: 500 });
    expect(utility.getInfo).toHaveBeenCalled();
  });
});
