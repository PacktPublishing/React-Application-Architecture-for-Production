import {
  Box,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

export type InfoCardProps = {
  label: string;
  value: string;
};

export const InfoCard = ({
  label,
  value,
}: InfoCardProps) => {
  return (
    <Box
      p="4"
      bg="white"
      borderRadius="lg"
      boxShadow="sm"
    >
      <Stack>
        <Text fontSize="sm" color="muted">
          {label}
        </Text>
        <Heading size="sm">{value}</Heading>
      </Stack>
    </Box>
  );
};
