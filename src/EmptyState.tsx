'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  Search,
  Package,
  ShoppingCart,
  Bell,
  MessageCircle,
  BarChart3,
  AlertCircle,
  Clock,
  FolderOpen,
  type LucideIcon,
} from 'lucide-react';
import { cn } from './lib/utils';
import { Button } from './Button';

const emptyState = cva('flex flex-col items-center justify-center text-center', {
  variants: {
    size: {
      sm: 'p-4 space-y-2',
      md: 'p-6 space-y-3',
      lg: 'p-8 space-y-4',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const iconWrapper = cva('text-muted/60', {
  variants: {
    size: {
      sm: 'mb-1',
      md: 'mb-2',
      lg: 'mb-3',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const titleStyles = cva('font-medium text-gray-900', {
  variants: {
    size: {
      sm: 'text-base',
      md: 'text-lg',
      lg: 'text-xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const descriptionStyles = cva('text-gray-500', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface EmptyStateProps extends VariantProps<typeof emptyState> {
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon: Icon,
  action,
  size: sizeProp = 'md',
  className,
}) => {
  // Ensure size is never null
  const size = sizeProp || 'md';

  const iconSizes: Record<'sm' | 'md' | 'lg', number> = {
    sm: 40,
    md: 56,
    lg: 72,
  };

  const iconSize = iconSizes[size as 'sm' | 'md' | 'lg'];

  return (
    <div className={cn(emptyState({ size }), className)}>
      {Icon && (
        <div className={cn(iconWrapper({ size }))}>
          <Icon size={iconSize} className="text-muted/60" />
        </div>
      )}

      <h3 className={cn(titleStyles({ size }))}>{title}</h3>

      {description && <p className={cn(descriptionStyles({ size }), 'max-w-sm')}>{description}</p>}

      {action && (
        <Button
          variant="primary"
          size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'}
          onClick={action.onClick}
          className="mt-2"
        >
          {action.label}
        </Button>
      )}
    </div>
  );
};

// Pre-built empty states for common use cases

export interface SimpleEmptyStateProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// No Search Results
export const NoSearchResults: React.FC<SimpleEmptyStateProps> = ({
  size = 'md',
  className,
  action,
}) => (
  <EmptyState
    title="No results found"
    description="Try adjusting your search or filter to find what you're looking for."
    icon={Search}
    size={size}
    className={className}
    action={action}
  />
);

// No Items
export interface NoItemsProps extends SimpleEmptyStateProps {
  itemType?: string;
}

export const NoItems: React.FC<NoItemsProps> = ({
  itemType = 'items',
  size = 'md',
  className,
  action,
}) => (
  <EmptyState
    title={`No ${itemType} yet`}
    description={`Get started by creating your first ${itemType.slice(0, -1)}.`}
    icon={Package}
    size={size}
    className={className}
    action={action}
  />
);

// Empty Cart
export const EmptyCart: React.FC<SimpleEmptyStateProps> = ({ size = 'md', className, action }) => (
  <EmptyState
    title="Your cart is empty"
    description="Looks like you haven't added anything to your cart yet."
    icon={ShoppingCart}
    size={size}
    className={className}
    action={action || { label: 'Start Shopping', onClick: () => {} }}
  />
);

// No Notifications
export const NoNotifications: React.FC<SimpleEmptyStateProps> = ({
  size = 'md',
  className,
  action,
}) => (
  <EmptyState
    title="No notifications"
    description="You're all caught up! Check back later for updates."
    icon={Bell}
    size={size}
    className={className}
    action={action}
  />
);

// No Messages
export const NoMessages: React.FC<SimpleEmptyStateProps> = ({ size = 'md', className, action }) => (
  <EmptyState
    title="No messages yet"
    description="When you receive messages, they'll appear here."
    icon={MessageCircle}
    size={size}
    className={className}
    action={action}
  />
);

// No Data
export const NoData: React.FC<SimpleEmptyStateProps> = ({ size = 'md', className, action }) => (
  <EmptyState
    title="No data available"
    description="There's no data to display at the moment."
    icon={BarChart3}
    size={size}
    className={className}
    action={action}
  />
);

// Error State
export interface ErrorStateProps extends SimpleEmptyStateProps {
  error?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  error = 'Something went wrong',
  onRetry,
  size = 'md',
  className,
}) => (
  <EmptyState
    title="Oops! Something went wrong"
    description={error}
    icon={AlertCircle}
    size={size}
    className={className}
    action={onRetry ? { label: 'Try Again', onClick: onRetry } : undefined}
  />
);

// Coming Soon
export const ComingSoon: React.FC<SimpleEmptyStateProps> = ({ size = 'md', className }) => (
  <EmptyState
    title="Coming Soon"
    description="We're working hard to bring you this feature. Stay tuned!"
    icon={Clock}
    size={size}
    className={className}
  />
);

// Custom with folder icon
export const NoFolderItems: React.FC<SimpleEmptyStateProps> = ({
  size = 'md',
  className,
  action,
}) => (
  <EmptyState
    title="This folder is empty"
    description="Add items to this folder to get started."
    icon={FolderOpen}
    size={size}
    className={className}
    action={action}
  />
);

export default EmptyState;
