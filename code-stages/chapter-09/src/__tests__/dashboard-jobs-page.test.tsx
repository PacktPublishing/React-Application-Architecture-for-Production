import DashboardJobsPage from '@/pages/dashboard/jobs';
import { getUser } from '@/testing/mocks/utils';
import { testData } from '@/testing/test-data';
import {
  appRender,
  checkTableValues,
  screen,
  waitForLoadingToFinish,
} from '@/testing/test-utils';

jest.mock('@/features/auth', () => ({
  useUser: () => ({ data: getUser() }),
}));

describe('Dashboard Jobs Page', () => {
  it('should render the jobs list', async () => {
    await appRender(<DashboardJobsPage />);

    expect(screen.getByText(/jobs/i)).toBeInTheDocument();

    await waitForLoadingToFinish();

    checkTableValues({
      container: screen.getByTestId('jobs-list'),
      data: testData.jobs,
      columns: ['position', 'department', 'location'],
    });
  });
});
