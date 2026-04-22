'use client';

import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/utils';
import { Chip } from './Chip';

// Root Component
export const Tabs = TabsPrimitive.Root;

// TabsList CVA
const tabsList = cva('flex', {
  variants: {
    variant: {
      underline: 'border-b border-muted',
      pills: 'gap-1 p-1 bg-muted/10 rounded-lg',
      enclosed: 'border-b border-muted',
    },
    fullWidth: {
      true: 'w-full [&>*]:flex-1',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'underline',
    fullWidth: false,
  },
});

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsList> {}

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant = 'underline', fullWidth, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsList({ variant, fullWidth }), className)}
    {...props}
  />
));

TabsList.displayName = TabsPrimitive.List.displayName;

// TabsTrigger CVA
const tabsTrigger = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        underline: [
          'px-4 py-3 text-sm font-medium',
          'text-muted hover:text-primary-hover',
          'data-[state=active]:text-primary',
          'relative',
          'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:duration-200',
          'data-[state=active]:after:scale-x-100',
        ],
        pills: [
          'px-3 py-1.5 text-sm font-medium rounded-md',
          'text-secondary',
          'hover:bg-muted/20 hover:text-primary',
          'data-[state=active]:bg-primary data-[state=active]:text-white',
        ],
        enclosed: [
          'px-4 py-2 text-sm font-medium rounded-t-lg',
          'text-secondary bg-muted/10',
          'border border-transparent',
          'hover:text-primary',
          'data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:border-muted data-[state=active]:border-b-white',
          'relative -mb-px',
        ],
      },
    },
    defaultVariants: {
      variant: 'underline',
    },
  }
);

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTrigger> {
  icon?: React.ReactNode;
  badge?: number | string;
}

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant = 'underline', icon, badge, children, ...props }, ref) => (
  <TabsPrimitive.Trigger ref={ref} className={cn(tabsTrigger({ variant }), className)} {...props}>
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

// TabsContent
const tabsContent = cva(
  'pt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
);

export interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {}

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn(tabsContent(), className)} {...props} />
));

TabsContent.displayName = TabsPrimitive.Content.displayName;

export default Tabs;
