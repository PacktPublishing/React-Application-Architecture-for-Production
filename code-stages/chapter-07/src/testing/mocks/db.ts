import { factory, primaryKey } from '@mswjs/data';

import { uid } from '@/utils/uid';

const models = {
  user: {
    id: primaryKey(uid),
    createdAt: Date.now,
    email: String,
    password: String,
    organizationId: String,
  },
  organization: {
    id: primaryKey(uid),
    createdAt: Date.now,
    adminId: String,
    name: String,
    email: String,
    phone: String,
    info: String,
  },
  job: {
    id: primaryKey(uid),
    createdAt: Date.now,
    organizationId: String,
    position: String,
    info: String,
    location: String,
    department: String,
  },
};

export const db = factory(models);
