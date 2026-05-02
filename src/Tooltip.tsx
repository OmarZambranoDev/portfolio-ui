'use client';

import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/utils';

// Root Components
export const TooltipProvider = TooltipPrimitive.Provider;

// Tooltip Root with instant delay
export interface TooltipProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> {}

export const Tooltip: React.FC<TooltipProps> = ({ delayDuration = 0, ...props }) => (
  <TooltipPrimitive.Root delayDuration={delayDuration} {...props} />
);

export const TooltipTrigger = TooltipPrimitive.Trigger;

// Content CVA
const tooltipContent = cva(
  'z-50 overflow-hidden rounded-md px-3 py-1.5 text-sm shadow-md animate-in fade-in-0 zoom-in-95 duration-150',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white',
        secondary: 'bg-secondary text-white',
        light: 'bg-white text-primary border border-muted',
        dark: 'bg-gray-900 text-white',
      },
      side: {
        top: 'data-[side=top]:slide-in-from-bottom-2',
        right: 'data-[side=right]:slide-in-from-left-2',
        bottom: 'data-[side=bottom]:slide-in-from-top-2',
        left: 'data-[side=left]:slide-in-from-right-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      side: 'bottom',
    },
  }
);

export interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    VariantProps<typeof tooltipContent> {
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
}

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(
  (
    { className, variant = 'default', side = 'bottom', sideOffset = 4, children, ...props },
    ref
  ) => (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        side={side}
        sideOffset={sideOffset}
        className={cn(tooltipContent({ variant, side }), className)}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="fill-current text-inherit" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
);

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export default Tooltip;
