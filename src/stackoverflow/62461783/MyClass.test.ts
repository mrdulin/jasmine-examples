import { MyClass } from './MyClass';
import { DateWithoutTimePipe } from './DateWithoutTimePipe';
import { ClientDTO } from './ClientDTO';

describe('62461783', () => {
  it('should pass', () => {
    const transformSpy = spyOn(DateWithoutTimePipe.prototype, 'transform').and.callFake((data) => {
      if (data === '2020-01-01') {
        return 'transformed 2020-01-01';
      }
      if (data === '2030-02-03') {
        return 'transformed 2030-02-03';
      }
    });
    const json = { contractStart: '2020-01-01', contractEnd: '2030-02-03' };
    const actual = MyClass.fromJson(json);
    const all = transformSpy.calls.all();
    expect(all[0].args).toEqual(['2020-01-01']);
    expect(all[1].args).toEqual(['2030-02-03']);
    expect(actual).toBeInstanceOf(ClientDTO);
    expect(transformSpy).toHaveBeenCalledTimes(2);
  });
});
