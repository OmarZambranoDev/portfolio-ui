'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/utils';

const textarea = cva(
  'flex w-full rounded-md border bg-white px-3 py-2 text-sm text-earth-forest placeholder:text-earth-moss/60 transition-colors focus:outline-none focus:ring-2 focus:ring-earth-forest/20 disabled:cursor-not-allowed disabled:bg-earth-stone/10 disabled:text-earth-moss/50 resize-vertical min-h-[80px]',
  {
    variants: {
      variant: {
        default: 'border-earth-stone/30 focus:border-earth-forest',
        filled: 'border-transparent bg-earth-stone/10 focus:bg-white focus:border-earth-forest',
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

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textarea> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, error, ...props }, ref) => (
    <textarea
      className={cn(textarea({ variant, error }), className)}
      ref={ref}
      aria-invalid={error || undefined}
      {...props}
    />
  )
);

Textarea.displayName = 'Textarea';

export default Textarea;
