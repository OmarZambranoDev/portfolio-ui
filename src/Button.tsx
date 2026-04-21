'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/utils';

const button = cva(
  'rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary-hover focus:ring-primary',
        secondary: 'bg-secondary text-white hover:bg-secondary-hover focus:ring-secondary',
        outline:
          'border border-primary text-primary bg-transparent hover:bg-muted/20 focus:ring-primary',
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

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  disabled,
  loading = false,
  className,
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      className={cn(button({ variant, size, disabled: isDisabled }), className)}
      disabled={isDisabled}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
