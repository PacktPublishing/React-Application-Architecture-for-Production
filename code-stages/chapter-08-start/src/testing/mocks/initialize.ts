import { IS_SERVER } from '@/config/constants';

import { seedDb } from './seed-db';

const initializeMocks = () => {
  if (IS_SERVER) {
    const { server } = require('./server');
    server.listen();
  } else {
    const { worker } = require('./browser');
    worker.start();
  }
  seedDb();
};

initializeMocks();
