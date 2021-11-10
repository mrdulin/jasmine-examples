import { getProducts } from '.';
import request from 'request';

describe('69769551', () => {
  it('should return 1', async () => {
    spyOn(request, 'get').and.callFake((_, callback) => {
      callback(null, null, JSON.stringify({ value: 'yes' }));
    });
    const actual = await getProducts();
    expect(actual).toEqual(1);
  });

  it('should throw error', async () => {
    const mError = new Error('network');
    spyOn(request, 'get').and.callFake((_, callback) => {
      callback(mError);
    });
    await expectAsync(getProducts()).toBeRejectedWithError('network');
  });
});
