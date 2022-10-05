import {
  Center,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

import { Link } from '@/components/link';
import { Seo } from '@/components/seo';

const LandingPage = () => {
  return (
    <>
      <Seo title="Jobs App" />
      <Center flexDirection="column" h="full">
        <VStack maxW="3xl" spacing="8">
          <Heading size="3xl">Jobs App</Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            maxW="2xl"
            color="muted"
          >
            Manage your careers pages
          </Text>
          <Link href={'/dashboard/jobs'} variant="solid">
            Get Started
          </Link>
        </VStack>
      </Center>
    </>
  );
};

export default LandingPage;
