import { ClientDTO } from './ClientDTO';
import { DateWithoutTimePipe } from './DateWithoutTimePipe';

export class MyClass {
  static fromJson(json: any): ClientDTO {
    const ret: ClientDTO = Object.assign(new ClientDTO(), json);

    const dp = new DateWithoutTimePipe();

    ret.contractStart = dp.transform(json.contractStart);
    ret.contractEnd = dp.transform(json.contractEnd);

    return ret;
  }
}
