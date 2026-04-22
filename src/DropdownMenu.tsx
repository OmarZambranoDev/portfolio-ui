'use client';

import React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ChevronRight } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/utils';

// Root Components
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

// Content CVA
const dropdownContent = cva(
  'z-50 min-w-[8rem] overflow-hidden rounded-lg bg-white p-1 shadow-lg border border-muted/30 animate-in fade-in-0 zoom-in-95 duration-150',
  {
    variants: {
      animationSide: {
        top: 'data-[side=top]:slide-in-from-bottom-2',
        right: 'data-[side=right]:slide-in-from-left-2',
        bottom: 'data-[side=bottom]:slide-in-from-top-2',
        left: 'data-[side=left]:slide-in-from-right-2',
      },
    },
    defaultVariants: {
      animationSide: 'bottom',
    },
  }
);

export interface DropdownMenuContentProps
  extends Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>, 'side'>,
    VariantProps<typeof dropdownContent> {
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
}

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuContentProps
>(({ className, side = 'bottom', align = 'center', animationSide, children, ...props }, ref) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const animSide = animationSide || side;

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        align={align}
        side={side}
        sideOffset={4}
        className={cn(dropdownContent({ animationSide: animSide }), className)}
        {...props}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
});

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

// Item CVA
const dropdownItem = cva(
  'relative flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-sm outline-none transition-colors',
  {
    variants: {
      isDestructive: {
        true: 'text-red-600 focus:bg-red-50 focus:text-red-600',
        false: 'text-gray-700 focus:bg-muted/10 focus:text-primary',
      },
      isDisabled: {
        true: 'pointer-events-none text-muted/50',
        false: '',
      },
      withInset: {
        true: 'pl-8',
        false: '',
      },
    },
    defaultVariants: {
      isDestructive: false,
      isDisabled: false,
      withInset: false,
    },
  }
);

export interface DropdownMenuItemProps
  extends Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>, 'disabled'>,
    VariantProps<typeof dropdownItem> {
  icon?: React.ReactNode;
  shortcut?: string;
  destructive?: boolean;
  disabled?: boolean;
  inset?: boolean;
}

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemProps
>(({ className, destructive, disabled, inset, icon, shortcut, children, ...props }, ref) => {
  const isDestructive = destructive ?? false;
  const isDisabled = disabled ?? false;
  const withInset = inset ?? false;

  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(dropdownItem({ isDestructive, isDisabled, withInset }), className)}
      disabled={isDisabled}
      {...props}
    >
      {icon && (
        <span className="mr-2 h-4 w-4 text-muted group-data-[highlighted]:text-inherit">
          {icon}
        </span>
      )}
      {children}
      {shortcut && <span className="ml-auto text-xs tracking-widest text-muted">{shortcut}</span>}
    </DropdownMenuPrimitive.Item>
  );
});

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

// Label CVA
const dropdownLabel = cva('px-2 py-1.5 text-xs font-semibold text-muted', {
  variants: {
    withInset: {
      true: 'pl-8',
      false: '',
    },
  },
  defaultVariants: {
    withInset: false,
  },
});

export interface DropdownMenuLabelProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>,
    VariantProps<typeof dropdownLabel> {
  inset?: boolean;
}

export const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  DropdownMenuLabelProps
>(({ className, inset, ...props }, ref) => {
  const withInset = inset ?? false;

  return (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={cn(dropdownLabel({ withInset }), className)}
      {...props}
    />
  );
});

DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

// Separator CVA
const dropdownSeparator = cva('-mx-1 my-1 h-px bg-muted/30');

export interface DropdownMenuSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> {}

export const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  DropdownMenuSeparatorProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn(dropdownSeparator(), className)}
    {...props}
  />
));

DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

// Sub Components
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;

// SubTrigger CVA
const dropdownSubTrigger = cva(
  'flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-sm outline-none text-gray-700 focus:bg-muted/10 focus:text-primary data-[state=open]:bg-muted/10 data-[state=open]:text-primary',
  {
    variants: {
      withInset: {
        true: 'pl-8',
        false: '',
      },
    },
    defaultVariants: {
      withInset: false,
    },
  }
);

export const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> &
    VariantProps<typeof dropdownSubTrigger> & {
      icon?: React.ReactNode;
      inset?: boolean;
    }
>(({ className, inset, icon, children, ...props }, ref) => {
  const withInset = inset ?? false;

  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(dropdownSubTrigger({ withInset }), className)}
      {...props}
    >
      {icon && <span className="mr-2 h-4 w-4 text-muted">{icon}</span>}
      {children}
      <ChevronRight className="ml-auto h-4 w-4 text-muted" />
    </DropdownMenuPrimitive.SubTrigger>
  );
});

DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

// SubContent CVA
const dropdownSubContent = cva(
  'z-50 min-w-[8rem] overflow-hidden rounded-lg bg-white p-1 shadow-lg border border-muted/30 animate-in fade-in-0 zoom-in-95 duration-150',
  {
    variants: {
      animationSide: {
        top: 'data-[side=top]:slide-in-from-bottom-2',
        right: 'data-[side=right]:slide-in-from-left-2',
        bottom: 'data-[side=bottom]:slide-in-from-top-2',
        left: 'data-[side=left]:slide-in-from-right-2',
      },
    },
    defaultVariants: {
      animationSide: 'bottom',
    },
  }
);

export const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>, 'side'> &
    VariantProps<typeof dropdownSubContent> & {
      side?: 'top' | 'right' | 'bottom' | 'left';
    }
>(({ className, side = 'bottom', animationSide, ...props }, ref) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const animSide = animationSide || side;

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.SubContent
        ref={ref}
        className={cn(dropdownSubContent({ animationSide: animSide }), className)}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
});

DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

export default DropdownMenu;
