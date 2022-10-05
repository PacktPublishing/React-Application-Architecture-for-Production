import { Center } from '@chakra-ui/react';

import { Link } from '@/components/link';
import { NotFound } from '@/components/not-found';

export default function NotFoundPage() {
  return (
    <>
      <NotFound />
      <Center>
        <Link href="/">Home</Link>
      </Center>
    </>
  );
}
