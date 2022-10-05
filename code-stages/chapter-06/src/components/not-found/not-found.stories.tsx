import { Meta, Story } from '@storybook/react';

import { NotFound } from './not-found';

const meta: Meta = {
  title: 'Components/NotFound',
  component: NotFound,
};

export default meta;

const Template: Story = (props) => (
  <NotFound {...props} />
);

export const Default = Template.bind({});
