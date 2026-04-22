'use client';

import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from './lib/utils';
import { Chip } from './Chip';

// Root Component
export const Tabs = TabsPrimitive.Root;

// Types
export interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  variant?: 'underline' | 'pills' | 'enclosed';
  fullWidth?: boolean;
}

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  variant?: 'underline' | 'pills' | 'enclosed';
  icon?: React.ReactNode;
  badge?: number | string;
}

export interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {}

// List Component
export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant = 'underline', fullWidth, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'flex',
      variant === 'underline' && 'border-b border-muted',
      variant === 'pills' && 'gap-1 p-1 bg-muted/10 rounded-lg',
      variant === 'enclosed' && 'border-b border-muted',
      fullWidth && 'w-full [&>*]:flex-1',
      className
    )}
    {...props}
  />
));

TabsList.displayName = TabsPrimitive.List.displayName;

// Trigger Component
export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant = 'underline', icon, badge, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-200',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',

      // Underline variant
      variant === 'underline' && [
        'px-4 py-3 text-sm font-medium',
        'text-muted hover:text-primary-hover',
        'data-[state=active]:text-primary',
        'relative',
        'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:duration-200',
        'data-[state=active]:after:scale-x-100',
      ],

      // Pills variant
      variant === 'pills' && [
        'px-3 py-1.5 text-sm font-medium rounded-md',
        'text-secondary',
        'hover:bg-muted/20 hover:text-primary',
        'data-[state=active]:bg-primary data-[state=active]:text-white',
      ],

      // Enclosed variant
      variant === 'enclosed' && [
        'px-4 py-2 text-sm font-medium rounded-t-lg',
        'text-secondary bg-muted/10',
        'border border-transparent',
        'hover:text-primary',
        'data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:border-muted data-[state=active]:border-b-white',
        'relative -mb-px',
      ],

      className
    )}
    {...props}
  >
    {icon && <span className="w-4 h-4">{icon}</span>}
    {children}
    {badge !== undefined && (
      <Chip size="sm" variant={variant === 'pills' ? 'default' : 'secondary'} className="ml-1">
        {badge}
      </Chip>
    )}
  </TabsPrimitive.Trigger>
));

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// Content Component
export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'pt-4',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
));

TabsContent.displayName = TabsPrimitive.Content.displayName;

export default Tabs;
