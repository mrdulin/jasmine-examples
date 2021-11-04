import { getActiveUsersLast7DaysForProject } from './';
import PG, { Client } from 'pg';

describe('69830430', () => {
  it('should pass', async () => {
    const mClient: jasmine.SpyObj<Client> = jasmine.createSpyObj('client', ['connect', 'query']);
    mClient.query.and.resolveTo({ rows: [{ user_id: '1' }, { user_id: '2' }] });
    spyOn(PG, 'Client').and.returnValue(mClient);
    const actual = await getActiveUsersLast7DaysForProject('1');
    expect(actual).toEqual(['1', '2']);
    expect(mClient.connect).toHaveBeenCalled();
    expect(mClient.query).toHaveBeenCalled();
  });
});
