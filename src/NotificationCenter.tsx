'use client';

import React from 'react';
import { Bell, Heart, MessageCircle, UserPlus, Info } from 'lucide-react';
import { cn } from './lib/utils';
import { Button } from './Button';
import { Badge } from './Badge';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from './DropdownMenu';

export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'friend_request' | 'system';
  message: string;
  timestamp: number;
  read: boolean;
  actionUrl?: string;
  onAction?: () => void;
}

export interface NotificationCenterProps {
  notifications: Notification[];
  onNotificationClick: (notification: Notification) => void;
  onMarkAllRead: () => void;
  className?: string;
}

const typeIcons = {
  like: Heart,
  comment: MessageCircle,
  friend_request: UserPlus,
  system: Info,
};

const typeColors = {
  like: 'text-red-500',
  comment: 'text-blue-500',
  friend_request: 'text-earth-forest',
  system: 'text-earth-sage',
};

const getRelativeTime = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (minutes > 0) return `${minutes}m ago`;
  return 'Just now';
};

export const NotificationCenter: React.FC<NotificationCenterProps> = ({
  notifications,
  onNotificationClick,
  onMarkAllRead,
  className,
}) => {
  const unreadCount = notifications.filter((n) => !n.read).length;
  const hasUnread = unreadCount > 0;

  const handleNotificationClick = (notification: Notification) => {
    onNotificationClick(notification);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            'relative p-2 rounded-md transition-colors',
            hasUnread
              ? 'text-primary hover:bg-muted/20'
              : 'text-earth-sage hover:text-earth-forest hover:bg-muted/10',
            className
          )}
          aria-label={`Notifications${hasUnread ? `, ${unreadCount} unread` : ''}`}
        >
          <Bell className="w-5 h-5" />
          {hasUnread && (
            <Badge count={unreadCount} size="sm" className="absolute -top-0.5 -right-0.5" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-muted/30">
          <h3 className="text-sm font-semibold text-primary">Notifications</h3>
          {hasUnread && (
            <Button variant="outline" size="sm" onClick={onMarkAllRead}>
              Mark all read
            </Button>
          )}
        </div>

        {/* Notification List */}
        <div className="max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <Bell className="w-8 h-8 text-muted/40 mb-2" />
              <p className="text-sm text-muted">No notifications</p>
            </div>
          ) : (
            notifications.map((notification) => {
              const IconComponent = typeIcons[notification.type];
              const iconColor = typeColors[notification.type];

              return (
                <button
                  key={notification.id}
                  onClick={() => handleNotificationClick(notification)}
                  className={cn(
                    'w-full flex items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/10',
                    !notification.read && 'bg-earth-stone/10'
                  )}
                >
                  <div className="relative shrink-0">
                    <IconComponent className={cn('w-5 h-5', iconColor)} />
                    {!notification.read && (
                      <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-500 rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-earth-forest line-clamp-2">{notification.message}</p>
                    <p className="text-xs text-muted mt-0.5">
                      {getRelativeTime(notification.timestamp)}
                    </p>
                  </div>
                </button>
              );
            })
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationCenter;
