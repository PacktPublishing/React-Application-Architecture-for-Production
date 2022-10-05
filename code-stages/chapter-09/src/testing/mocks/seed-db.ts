import { testData } from '../test-data';

import { db } from './db';

export const seedDb = () => {
  const userCount = db.user.count();

  if (userCount > 0) return;

  testData.users.forEach((user) => db.user.create(user));

  testData.organizations.forEach((organization) =>
    db.organization.create(organization)
  );

  testData.jobs.forEach((job) => db.job.create(job));
};
