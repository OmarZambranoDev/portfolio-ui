'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/utils';

const badge = cva('rounded-full flex items-center justify-center font-medium', {
  variants: {
    variant: {
      primary: 'bg-primary text-white',
      danger: 'bg-danger text-white',
      muted: 'bg-earth-stone text-white',
      burnt: 'bg-earth-burnt text-white',
    },
    size: {
      sm: 'w-5 h-5 text-[10px]',
      md: 'w-6 h-6 text-[11px]',
      dot: 'w-3 h-3',
    },
  },
  defaultVariants: {
    variant: 'burnt',
    size: 'md',
  },
});

export interface BadgeProps extends VariantProps<typeof badge> {
  count: number;
  max?: number;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  count,
  max = 99,
  variant,
  size = 'md',
  className,
}) => {
  if (count <= 0) return null;

  const displayCount = count > max ? `${max}+` : String(count);

  // Auto-switch to dot when count text is too long for sm size
  const showDot = size === 'sm' && displayCount.length >= 3;

  return (
    <span
      className={cn(badge({ variant, size: showDot ? 'dot' : size }), className)}
      aria-label={`${count} notifications`}
      role="status"
    >
      {!showDot && displayCount}
    </span>
  );
};

export default Badge;
