'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const button = cva(
  'rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary-hover focus:ring-primary',
        secondary: 'bg-secondary text-white hover:bg-secondary-hover focus:ring-secondary',
        outline: 'border border-primary text-primary bg-transparent hover:bg-muted/20 focus:ring-primary',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
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
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  disabled,
  className,
  ...props
}) => {
  return (
    <button
      className={button({ variant, size, className })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;