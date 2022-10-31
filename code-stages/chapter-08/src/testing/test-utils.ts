import {
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';

import { AppProvider } from '@/providers/app';
import { Entity } from '@/types';

// renders the app within the app provider
export const appRender = (ui: ReactElement) => {
  return render(ui, {
    wrapper: AppProvider,
  });
};

// checks all table cells and their values
export const checkTableValues = <T extends Entity>({
  container,
  data,
  columns,
}: {
  container?: HTMLElement;
  data: T[];
  columns: Array<keyof T>;
}) => {
  data.forEach((entry, index) => {
    const selector = container
      ? within(container)
      : screen;
    const row = selector.getByTestId(
      `table-row-${index}`
    );

    columns.forEach((column) => {
      const cell = within(row).getByRole('cell', {
        name: String(entry[column]),
      });

      expect(cell).toBeInTheDocument();
    });
  });
};

// waits for all loading spinners to disappear
export const waitForLoadingToFinish = () => {
  return waitFor(
    () => {
      const loaders = [
        ...screen.queryAllByTestId(/loading/i),
        ...screen.queryAllByText(/loading/i),
      ];

      loaders.forEach((loader) =>
        expect(loader).not.toBeInTheDocument()
      );
    },
    {
      timeout: 4000,
    }
  );
};

export * from '@testing-library/react';
export { userEvent };
