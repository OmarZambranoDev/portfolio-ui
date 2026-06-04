'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from './lib/utils';

const button = cva(
  'rounded font-medium transition-colors inline-flex items-center justify-center gap-2 supports-hover:active:scale-[0.98] transition-transform',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white hover:bg-primary-hover supports-hover:active:bg-primary/80 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus:outline-none',
        secondary:
          'bg-secondary text-white hover:bg-secondary-hover supports-hover:active:bg-secondary/80 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary focus:outline-none',
        outline:
          'border border-primary text-primary bg-transparent hover:bg-muted/20 supports-hover:active:bg-muted/40 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus:outline-none',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof button> {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, disabled, loading = false, className, ...props }, ref) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={cn(button({ variant, size, disabled: isDisabled }), className)}
        disabled={isDisabled}
        aria-busy={loading}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
