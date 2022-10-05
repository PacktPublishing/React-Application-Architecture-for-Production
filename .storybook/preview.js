import { theme } from '../src/config/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  controls: { expanded: true },
  chakra: {
    theme,
  },
};
