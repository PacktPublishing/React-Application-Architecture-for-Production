import { Center } from '@chakra-ui/react';

import { Link } from '@/components/link';
import { NotFound } from '@/components/not-found';

const NotFoundPage = () => {
  return (
    <>
      <NotFound />
      <Center>
        <Link href="/">Home</Link>
      </Center>
    </>
  );
};

export default NotFoundPage;
