import { Heading, Stack } from '@chakra-ui/react';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { ReactElement } from 'react';

import { NotFound } from '@/components/not-found';
import { Seo } from '@/components/seo';
import { JobsList, Job } from '@/features/jobs';
import { OrganizationInfo } from '@/features/organizations';
import { PublicLayout } from '@/layouts/public-layout';
import {
  getJobs,
  getOrganization,
} from '@/testing/test-data';

type PublicOrganizationPageProps =
  InferGetServerSidePropsType<typeof getServerSideProps>;

const PublicOrganizationPage = ({
  organization,
  jobs,
}: PublicOrganizationPageProps) => {
  if (!organization) return <NotFound />;

  return (
    <>
      <Seo title={organization.name} />
      <Stack
        spacing="4"
        w="full"
        maxW="container.lg"
        mx="auto"
        mt="12"
        p="4"
      >
        <OrganizationInfo organization={organization} />
        <Heading size="md" my="6">
          Open Jobs
        </Heading>
        <JobsList
          jobs={jobs}
          organizationId={organization.id}
          type="public"
        />
      </Stack>
    </>
  );
};

PublicOrganizationPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default PublicOrganizationPage;

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const organizationId = params?.organizationId as string;

  const [organization, jobs] = await Promise.all([
    getOrganization(organizationId).catch(() => null),
    getJobs(organizationId).catch(() => [] as Job[]),
  ]);

  return {
    props: {
      organization,
      jobs,
    },
  };
};
