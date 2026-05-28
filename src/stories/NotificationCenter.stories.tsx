import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { NotificationCenter, type Notification } from '../NotificationCenter';
import '../../dist/index.css';

const meta: Meta<typeof NotificationCenter> = {
  title: 'Portfolio/NotificationCenter',
  component: NotificationCenter,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof NotificationCenter>;

const sampleNotifications: Notification[] = [
  {
    id: '1',
    type: 'like',
    message: 'Sarah Wilson liked your post',
    timestamp: Date.now() - 1000 * 60 * 5, // 5 min ago
    read: false,
  },
  {
    id: '2',
    type: 'comment',
    message: 'Mike Johnson commented: "Looks great! Love the earth tones."',
    timestamp: Date.now() - 1000 * 60 * 30, // 30 min ago
    read: false,
  },
  {
    id: '3',
    type: 'friend_request',
    message: 'Emily Chen sent you a friend request',
    timestamp: Date.now() - 1000 * 60 * 60 * 2, // 2 hours ago
    read: false,
  },
  {
    id: '4',
    type: 'system',
    message: 'Your profile has been updated successfully',
    timestamp: Date.now() - 1000 * 60 * 60 * 24, // 1 day ago
    read: true,
  },
  {
    id: '5',
    type: 'like',
    message: 'David Martinez liked your comment',
    timestamp: Date.now() - 1000 * 60 * 60 * 48, // 2 days ago
    read: true,
  },
];

export const Default: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(sampleNotifications);

    const handleNotificationClick = (notification: Notification) => {
      console.log('Notification clicked:', notification);
      setNotifications((prev) =>
        prev.map((n) => (n.id === notification.id ? { ...n, read: true } : n))
      );
    };

    const handleMarkAllRead = () => {
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    };

    return (
      <div className="flex justify-end w-[400px]">
        <NotificationCenter
          notifications={notifications}
          onNotificationClick={handleNotificationClick}
          onMarkAllRead={handleMarkAllRead}
        />
      </div>
    );
  },
};

export const Empty: Story = {
  render: () => (
    <div className="flex justify-end w-[400px]">
      <NotificationCenter
        notifications={[]}
        onNotificationClick={() => {}}
        onMarkAllRead={() => {}}
      />
    </div>
  ),
};

export const AllRead: Story = {
  render: () => {
    const allRead = sampleNotifications.map((n) => ({ ...n, read: true }));

    return (
      <div className="flex justify-end w-[400px]">
        <NotificationCenter
          notifications={allRead}
          onNotificationClick={() => {}}
          onMarkAllRead={() => {}}
        />
      </div>
    );
  },
};

export const SocialAppExample: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(sampleNotifications);

    const handleNotificationClick = (notification: Notification) => {
      console.log('Navigate based on type:', notification.type);
      setNotifications((prev) =>
        prev.map((n) => (n.id === notification.id ? { ...n, read: true } : n))
      );
    };

    const handleMarkAllRead = () => {
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    };

    return (
      <div className="flex justify-end w-[400px]">
        <NotificationCenter
          notifications={notifications}
          onNotificationClick={handleNotificationClick}
          onMarkAllRead={handleMarkAllRead}
        />
      </div>
    );
  },
};
