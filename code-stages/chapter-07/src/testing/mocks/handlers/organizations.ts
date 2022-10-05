import { rest } from 'msw';

import { API_URL } from '@/config/constants';

import { db } from '../db';

const getOrganizationHandler = rest.get(
  `${API_URL}/organizations/:organizationId`,
  (req, res, ctx) => {
    const organizationId = req.params
      .organizationId as string;

    const organization = db.organization.findFirst({
      where: {
        id: {
          equals: organizationId,
        },
      },
    });

    if (!organization) {
      return res(
        ctx.status(404),
        ctx.json({ message: 'Not found!' })
      );
    }

    return res(
      ctx.delay(300),
      ctx.status(200),
      ctx.json(organization)
    );
  }
);

export const organizationsHandlers = [
  getOrganizationHandler,
];
