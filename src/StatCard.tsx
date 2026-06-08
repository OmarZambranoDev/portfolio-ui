'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { TrendingUp, TrendingDown, Minus, type LucideIcon } from 'lucide-react';
import { cn } from './lib/utils';

const statCard = cva('rounded-lg border flex flex-col transition-colors', {
  variants: {
    variant: {
      default: 'bg-white border-earth-stone/30',
      primary: 'bg-primary text-white border-primary',
      accent: 'bg-accent text-white border-accent',
    },
    size: {
      sm: 'p-3 gap-1',
      md: 'p-4 gap-2',
      lg: 'p-5 gap-3',
    },
    clickable: {
      true: 'cursor-pointer supports-hover:hover:shadow-md supports-hover:hover:scale-[1.02]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

const valueText = cva('font-semibold', {
  variants: {
    variant: {
      default: 'text-earth-forest',
      primary: 'text-white',
      accent: 'text-white',
    },
    size: {
      sm: 'text-lg',
      md: 'text-2xl',
      lg: 'text-3xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

const labelText = cva('', {
  variants: {
    variant: {
      default: 'text-earth-moss',
      primary: 'text-white/80',
      accent: 'text-white/80',
    },
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export interface StatCardProps extends VariantProps<typeof statCard> {
  icon?: LucideIcon;
  value: string;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
  trendLabel?: string;
  onClick?: () => void;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  value,
  label,
  trend,
  trendLabel,
  variant = 'default',
  size = 'md',
  clickable = false,
  onClick,
  className,
}) => {
  const iconSize = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const iconColor = {
    default: 'text-earth-sage',
    primary: 'text-white/80',
    accent: 'text-white/80',
  };

  return (
    <div
      className={cn(statCard({ variant, size, clickable }), className)}
      onClick={clickable ? onClick : undefined}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
    >
      {Icon && <Icon className={cn(iconSize[size || 'md'], iconColor[variant || 'default'])} />}
      <div className={cn(valueText({ variant, size }))}>{value}</div>
      <div className="flex items-center gap-2">
        <span className={cn(labelText({ variant, size }))}>{label}</span>
        {trend && (
          <span
            className={cn(
              'inline-flex items-center gap-0.5 text-xs font-medium',
              trend === 'up' && 'text-earth-forest',
              trend === 'down' && 'text-danger',
              trend === 'neutral' && 'text-earth-moss',
              (variant === 'primary' || variant === 'accent') && 'text-white/90'
            )}
          >
            {trend === 'up' ? (
              <TrendingUp className="w-3 h-3" />
            ) : trend === 'down' ? (
              <TrendingDown className="w-3 h-3" />
            ) : (
              <Minus className="w-3 h-3" />
            )}
            {trendLabel && <span>{trendLabel}</span>}
          </span>
        )}
      </div>
    </div>
  );
};

export default StatCard;
