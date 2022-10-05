import {
  Box,
  Center,
  Container,
  Heading,
  Stack,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Link } from '@/components/link';

type AuthLayoutProps = {
  children: ReactNode;
  title: string;
};

export const AuthLayout = ({
  children,
  title,
}: AuthLayoutProps) => {
  return (
    <Center h="full">
      <Container maxW="lg">
        <Box
          p="8"
          bg="white"
          boxShadow="md"
          borderRadius="xl"
        >
          <Stack spacing="6">
            <Heading textAlign="center">{title}</Heading>
            {children}
          </Stack>
          <Box mt="8" textAlign="center">
            <Link href="/">Jobs App</Link>
          </Box>
        </Box>
      </Container>
    </Center>
  );
};
