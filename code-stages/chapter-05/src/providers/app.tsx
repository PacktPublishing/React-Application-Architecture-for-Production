import {
  ChakraProvider,
  GlobalStyle,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

import { theme } from '@/config/theme';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({
  children,
}: AppProviderProps) => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ChakraProvider>
  );
};
