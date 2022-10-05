import { Meta, Story } from '@storybook/react';

import { Content, ContentProps } from './content';

const meta: Meta = {
  title: 'Components/Content',
  component: Content,
};

export default meta;

const Template: Story<ContentProps> = (props) => (
  <Content {...props} />
);

export const Default = Template.bind({});

Default.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};
