import {
  Box,
  Center,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from '@chakra-ui/react';

import { Entity } from '@/types';

import { Loading } from '../loading';

type DataTableColumn<Entry> = {
  title: string;
  field: keyof Entry;
  render?: ({ entry }: { entry: Entry }) => JSX.Element;
};

export type DataTableProps<Entry> = {
  isLoading: boolean;
  data?: Entry[];
  columns: DataTableColumn<Entry>[];
};

export const DataTable = <Entry extends Entity>({
  data,
  columns,
  isLoading,
}: DataTableProps<Entry>) => {
  if (isLoading) {
    return <Loading />;
  }

  if (data?.length === 0) {
    return (
      <Center
        h="56"
        p="4"
        bg="gray.100"
        borderRadius="md"
      >
        No Data
      </Center>
    );
  }

  return (
    <Box
      h="full"
      rounded="md"
      borderWidth="1px"
      bg="whiteAlpha.400"
    >
      <Box overflowX="auto">
        <Table variant="striped" w="full">
          <Thead>
            <Tr>
              {columns.map((column, index) => (
                <Th key={column.title + index}>
                  {column.title}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((entry, entryIndex) => (
              <Tr
                data-testid={`table-row-${entryIndex}`}
                key={entry.id || entryIndex}
              >
                {columns.map(
                  (
                    { field, title, render },
                    columnIndex
                  ) => (
                    <Td key={title + columnIndex}>
                      <Text>
                        {render
                          ? render({ entry })
                          : `${entry[field]}`}
                      </Text>
                    </Td>
                  )
                )}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};
