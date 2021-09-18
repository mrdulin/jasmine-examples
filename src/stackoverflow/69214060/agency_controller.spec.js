import axios from 'axios';
import { getProducerNamesAndBillingPlan } from './agency_controller';

describe('#getProducerNamesAndBillingPlan', () => {
  it('calls the given onSuccess method if the request is successful', async () => {
    spyOn(axios, 'get').and.resolveTo({ status: 200, data: 'foo' });
    const mockMethod = (x) => console.log(x);
    spyOn(console, 'log');
    await getProducerNamesAndBillingPlan({ agencyId: 1, onSuccess: mockMethod });
    expect(console.log).toHaveBeenCalledWith('foo');
  });
});
