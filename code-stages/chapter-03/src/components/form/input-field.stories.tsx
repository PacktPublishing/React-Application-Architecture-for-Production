import { Meta, Story } from '@storybook/react';

import {
  InputField,
  InputFieldProps,
} from './input-field';

const meta: Meta = {
  title: 'Components/Form/InputField',
  component: InputField,
};

export default meta;

const Template: Story<InputFieldProps> = (props) => (
  <InputField {...props} />
);

export const Default = Template.bind({});

Default.args = {
  label: 'Name',
};

export const WithError = Template.bind({});

WithError.args = {
  label: 'Name',
  error: {
    type: 'required',
    message: 'Name is required!',
  },
};
