import { rest } from 'msw';

import { API_URL } from '@/config/constants';

import { db } from '../db';
import { requireAuth } from '../utils';

const getJobsHandler = rest.get(
  `${API_URL}/jobs`,
  async (req, res, ctx) => {
    const organizationId = req.url.searchParams.get(
      'organizationId'
    ) as string;

    const jobs = db.job.findMany({
      where: {
        organizationId: {
          equals: organizationId,
        },
      },
    });

    return res(
      ctx.delay(300),
      ctx.status(200),
      ctx.json(jobs)
    );
  }
);

const getJobHandler = rest.get(
  `${API_URL}/jobs/:jobId`,
  async (req, res, ctx) => {
    const jobId = req.params.jobId as string;

    const job = db.job.findFirst({
      where: {
        id: {
          equals: jobId,
        },
      },
    });

    if (!job) {
      return res(
        ctx.delay(300),
        ctx.status(404),
        ctx.json({ message: 'Not found!' })
      );
    }

    return res(
      ctx.delay(300),
      ctx.status(200),
      ctx.json(job)
    );
  }
);

const createJobHandler = rest.post(
  `${API_URL}/jobs`,
  async (req, res, ctx) => {
    const user = requireAuth({ req });

    const jobData = await req.json();

    const job = db.job.create({
      ...jobData,
      organizationId: user?.organizationId,
    });

    return res(
      ctx.delay(300),
      ctx.status(200),
      ctx.json(job)
    );
  }
);

export const jobsHandlers = [
  getJobsHandler,
  getJobHandler,
  createJobHandler,
];
