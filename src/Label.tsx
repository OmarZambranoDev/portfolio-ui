'use client';

import React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/utils';

const label = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:text-earth-moss/50',
  {
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
  }
);

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof label> {}

export const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, size, ...props }, ref) => (
    <LabelPrimitive.Root ref={ref} className={cn(label({ size }), className)} {...props} />
  )
);

Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
