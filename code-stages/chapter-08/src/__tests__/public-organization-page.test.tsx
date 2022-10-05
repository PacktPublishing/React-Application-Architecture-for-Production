import PublicOrganizationPage, {
  getServerSideProps,
} from '@/pages/organizations/[organizationId]';
import { testData } from '@/testing/test-data';
import {
  appRender,
  checkTableValues,
  screen,
} from '@/testing/test-utils';

const organization = testData.organizations[0];
const jobs = testData.jobs;

describe('Public Organization Page', () => {
  it('should use getServerSideProps that fetches and returns the proper data', async () => {
    const { props } = await getServerSideProps({
      params: {
        organizationId: organization.id,
      },
    } as any);

    expect(props.organization).toEqual(organization);
    expect(props.jobs).toEqual(jobs);
  });

  it('should render the organization details', async () => {
    appRender(
      <PublicOrganizationPage
        organization={organization}
        jobs={jobs}
      />
    );

    expect(
      screen.getByRole('heading', {
        name: organization.name,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: organization.email,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: organization.phone,
      })
    ).toBeInTheDocument();

    checkTableValues({
      container: screen.getByTestId('jobs-list'),
      data: jobs,
      columns: ['position', 'department', 'location'],
    });
  });

  it('should render the not found message if the organization is not found', async () => {
    appRender(
      <PublicOrganizationPage
        organization={null}
        jobs={[]}
      />
    );

    const notFoundMessage = screen.getByRole('heading', {
      name: /not found/i,
    });

    expect(notFoundMessage).toBeInTheDocument();
  });
});
