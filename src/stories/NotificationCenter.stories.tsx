import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Heart, MessageCircle, UserPlus, Info } from 'lucide-react';
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
    message: 'Sarah Wilson liked your post',
    timestamp: Date.now() - 1000 * 60 * 5,
    read: false,
    icon: <Heart className="w-5 h-5 text-danger" />,
  },
  {
    id: '2',
    message: 'Mike Johnson commented: "Looks great!"',
    timestamp: Date.now() - 1000 * 60 * 30,
    read: false,
    icon: <MessageCircle className="w-5 h-5 text-earth-forest" />,
  },
  {
    id: '3',
    message: 'Emily Chen sent you a friend request',
    timestamp: Date.now() - 1000 * 60 * 60 * 2,
    read: false,
    icon: <UserPlus className="w-5 h-5 text-earth-sage" />,
  },
  {
    id: '4',
    message: 'Your profile has been updated successfully',
    timestamp: Date.now() - 1000 * 60 * 60 * 24,
    read: true,
    icon: <Info className="w-5 h-5 text-earth-moss" />,
  },
  {
    id: '5',
    message: 'David Martinez liked your comment',
    timestamp: Date.now() - 1000 * 60 * 60 * 48,
    read: true,
    icon: <Heart className="w-5 h-5 text-danger" />,
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

    const handleRemove = (id: string) => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    };

    return (
      <div className="flex justify-end w-[400px]">
        <NotificationCenter
          notifications={notifications}
          onNotificationClick={handleNotificationClick}
          onMarkAllRead={handleMarkAllRead}
          onRemove={handleRemove}
        />
      </div>
    );
  },
};

export const WithRemove: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(sampleNotifications);

    const handleRemove = (id: string) => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    };

    return (
      <div className="flex justify-end w-[400px]">
        <NotificationCenter
          notifications={notifications}
          onNotificationClick={() => {}}
          onMarkAllRead={() => {}}
          onRemove={handleRemove}
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
      console.log('Navigate based on notification:', notification.id);
      setNotifications((prev) =>
        prev.map((n) => (n.id === notification.id ? { ...n, read: true } : n))
      );
    };

    const handleMarkAllRead = () => {
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    };

    const handleRemove = (id: string) => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    };

    return (
      <div className="space-y-4 w-[450px]">
        <div className="flex justify-end">
          <NotificationCenter
            notifications={notifications}
            onNotificationClick={handleNotificationClick}
            onMarkAllRead={handleMarkAllRead}
            onRemove={handleRemove}
          />
        </div>
        <div className="text-xs text-muted text-center">
          Hover over a notification to see the remove button
        </div>
      </div>
    );
  },
};
