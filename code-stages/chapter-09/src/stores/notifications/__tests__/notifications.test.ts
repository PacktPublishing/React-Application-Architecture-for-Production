import {
  notificationsStore,
  Notification,
} from '../notifications';

const notification = {
  id: '123',
  title: 'Hello World',
  type: 'info',
  message: 'This is a notification',
} as Notification;

describe('notifications store', () => {
  it('should show and dismiss notifications', () => {
    expect(
      notificationsStore.getState().notifications.length
    ).toBe(0);

    notificationsStore
      .getState()
      .showNotification(notification);

    expect(
      notificationsStore.getState().notifications
    ).toContainEqual(notification);

    notificationsStore
      .getState()
      .dismissNotification(notification.id);

    expect(
      notificationsStore.getState().notifications
    ).not.toContainEqual(notification);
  });
});
