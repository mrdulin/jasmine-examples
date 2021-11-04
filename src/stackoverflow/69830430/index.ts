import PG from 'pg';

const config = {
  encryptedCredentials: {
    host: 'my.database-server.com',
    port: 5334,
    user: 'database-user',
    password: 'secretpassword!!',
  },
};
export const getActiveUsersLast7DaysForProject = async (projectId: string): Promise<string[]> => {
  let userIds: string[] = [];
  const client = new PG.Client(config.encryptedCredentials);
  await client.connect();

  await client
    .query(
      `
      SELECT user_id FROM my_db.users_active ua
      WHERE ua.project_id='12345'
      GROUP BY user_id`,
    )
    .then((res: any) => (userIds = res.rows.flatMap((user: any) => user.user_id)))
    .catch((e: Error) => console.error(e.stack));

  return userIds;
};
