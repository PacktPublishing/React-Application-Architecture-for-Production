import { Meta, Story } from '@storybook/react';

import { Loading } from './loading';

const meta: Meta = {
  title: 'Components/Loading',
  component: Loading,
};

export default meta;

const Template: Story = (props) => <Loading {...props} />;

export const Default = Template.bind({});
