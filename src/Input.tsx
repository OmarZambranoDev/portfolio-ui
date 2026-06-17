'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/utils';

const input = cva(
  'flex w-full rounded-md border bg-white px-3 py-2 text-sm text-earth-forest placeholder:text-earth-moss/60 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus:outline-none focus:ring-2 focus:ring-earth-forest/20 disabled:cursor-not-allowed disabled:bg-earth-stone/10 disabled:text-earth-moss/50',
  {
    variants: {
      variant: {
        default: 'border-earth-stone/30 focus:border-earth-forest',
        filled: 'border-transparent bg-earth-stone/10 focus:bg-white focus:border-earth-forest',
        minimal: 'border-0 border-b border-earth-stone/30 rounded-none focus:border-earth-forest',
      },
      error: {
        true: 'border-danger focus:border-danger focus:ring-danger/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof input> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, error, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(input({ variant, error }), className)}
      ref={ref}
      aria-invalid={error || undefined}
      {...props}
    />
  )
);

Input.displayName = 'Input';

export default Input;
