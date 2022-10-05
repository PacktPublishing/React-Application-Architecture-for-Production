import { Button, Stack } from '@chakra-ui/react';
import { Meta, Story } from '@storybook/react';

import { useNotifications } from '@/stores/notifications';

import { Notifications } from './notifications';

const meta: Meta = {
  title: 'Components/Notifications',
  component: Notifications,
};

export default meta;

const Template: Story = () => {
  const { showNotification } = useNotifications();

  return (
    <Stack>
      <Notifications />
      <Stack direction="row">
        <Button
          onClick={() =>
            showNotification({
              title: 'Info Notification',
              type: 'info',
              duration: 3000,
              message: 'This is an info notification!',
            })
          }
        >
          Info
        </Button>
        <Button
          onClick={() =>
            showNotification({
              title: 'Success Notification',
              type: 'success',
              duration: 3000,
              message: 'This is a success notification!',
            })
          }
        >
          Success
        </Button>
        <Button
          onClick={() =>
            showNotification({
              title: 'Warning Notification',
              type: 'warning',
              duration: 3000,
              message: 'This is a warning notification!',
            })
          }
        >
          Warning
        </Button>
        <Button
          onClick={() =>
            showNotification({
              title: 'Error Notification',
              type: 'error',
              duration: 3000,
              message: 'This is an error notification!',
            })
          }
        >
          Error
        </Button>
      </Stack>
    </Stack>
  );
};

export const Default = Template.bind({});
