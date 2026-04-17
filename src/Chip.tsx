'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const chip = cva(
  'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-muted/20 text-primary border border-muted/40',
        primary: 'bg-primary/10 text-primary border border-primary/30',
        secondary: 'bg-secondary/10 text-secondary border border-secondary/30',
        outline: 'bg-transparent text-primary border border-primary/40',
        accent: 'bg-accent/10 text-accent border border-accent/30',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
      },
      clickable: {
        true: 'cursor-pointer hover:bg-muted/30',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof chip> {
  children: React.ReactNode;
  disabled?: boolean;
}

export const Chip: React.FC<ChipProps> = ({
  children,
  variant,
  size,
  clickable,
  disabled,
  className,
  ...props
}) => {
  return (
    <span
      className={chip({ variant, size, clickable, className })}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </span>
  );
};

export default Chip;