'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/utils';

// Base Skeleton
const skeleton = cva('block', {
  variants: {
    variant: {
      text: 'rounded',
      circular: 'rounded-full',
      rectangular: 'rounded-none',
      rounded: 'rounded-lg',
    },
    animation: {
      pulse: 'animate-pulse bg-muted/30',
      wave: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-muted/40 before:to-transparent bg-muted/20',
      none: 'bg-muted/20',
    },
  },
  defaultVariants: {
    variant: 'text',
    animation: 'pulse',
  },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeleton> {
  width?: string | number;
  height?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'text',
  animation = 'pulse',
  width,
  height,
  style,
  ...props
}) => {
  const inlineStyle: React.CSSProperties = {
    ...style,
    width: width !== undefined ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    height: height !== undefined ? (typeof height === 'number' ? `${height}px` : height) : undefined,
  };

  return (
    <div
      className={cn(skeleton({ variant, animation }), className)}
      style={inlineStyle}
      aria-hidden="true"
      {...props}
    />
  );
};

// Text Skeleton - Multiple lines
export interface SkeletonTextProps {
  lines?: number;
  spacing?: 'sm' | 'md' | 'lg';
  className?: string;
  lastLineWidth?: string | number;
}

export const SkeletonText: React.FC<SkeletonTextProps> = ({
  lines = 3,
  spacing = 'md',
  className,
  lastLineWidth = '75%',
}) => {
  const spacingClasses = {
    sm: 'space-y-1',
    md: 'space-y-2',
    lg: 'space-y-3',
  };

  return (
    <div className={cn(spacingClasses[spacing], className)} role="status" aria-label="Loading text">
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          variant="text"
          className="h-4 w-full"
          style={{
            width: index === lines - 1 ? lastLineWidth : '100%',
          }}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

// Avatar Skeleton
export interface SkeletonAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const SkeletonAvatar: React.FC<SkeletonAvatarProps> = ({
  size = 'md',
  className,
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  return (
    <Skeleton
      variant="circular"
      className={cn(sizeClasses[size], className)}
      aria-label="Loading avatar"
    />
  );
};

// Card Skeleton - For product/track cards
export interface SkeletonCardProps {
  hasImage?: boolean;
  hasFooter?: boolean;
  className?: string;
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({
  hasImage = true,
  hasFooter = true,
  className,
}) => {
  return (
    <div 
      className={cn('border border-muted/30 rounded-lg overflow-hidden bg-white', className)}
      role="status"
      aria-label="Loading card"
    >
      {hasImage && <Skeleton variant="rectangular" className="w-full h-40" />}
      <div className="p-4 space-y-3">
        <Skeleton variant="text" className="h-5 w-3/4" />
        <Skeleton variant="text" className="h-4 w-1/2" />
        <Skeleton variant="text" className="h-4 w-full" />
        <Skeleton variant="text" className="h-4 w-2/3" />
        {hasFooter && (
          <div className="pt-2 flex gap-2">
            <Skeleton variant="rounded" className="h-8 flex-1" />
            <Skeleton variant="rounded" className="h-8 flex-1" />
          </div>
        )}
      </div>
      <span className="sr-only">Loading card content...</span>
    </div>
  );
};

// Table Skeleton
export interface SkeletonTableProps {
  rows?: number;
  columns?: number;
  hasHeader?: boolean;
  className?: string;
}

export const SkeletonTable: React.FC<SkeletonTableProps> = ({
  rows = 5,
  columns = 4,
  hasHeader = true,
  className,
}) => {
  return (
    <div className={cn('w-full', className)} role="status" aria-label="Loading table">
      <table className="w-full border-collapse">
        {hasHeader && (
          <thead>
            <tr>
              {Array.from({ length: columns }).map((_, index) => (
                <th key={index} className="p-3 border-b border-muted/30">
                  <Skeleton variant="text" className="h-4 w-full" />
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex} className="p-3 border-b border-muted/30">
                  <Skeleton variant="text" className="h-4 w-full" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <span className="sr-only">Loading table data...</span>
    </div>
  );
};

// List Skeleton - For track list, feed items, etc.
export interface SkeletonListProps {
  items?: number;
  hasAvatar?: boolean;
  hasThumbnail?: boolean;
  className?: string;
}

export const SkeletonList: React.FC<SkeletonListProps> = ({
  items = 5,
  hasAvatar = true,
  hasThumbnail = false,
  className,
}) => {
  return (
    <div className={cn('space-y-3', className)} role="status" aria-label="Loading list">
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className="flex items-center gap-3 p-2">
          {hasAvatar && <SkeletonAvatar size="md" />}
          {hasThumbnail && <Skeleton variant="rounded" className="w-12 h-12" />}
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" className="h-4 w-3/4" />
            <Skeleton variant="text" className="h-3 w-1/2" />
          </div>
        </div>
      ))}
      <span className="sr-only">Loading list items...</span>
    </div>
  );
};

// Grid Skeleton - For product grid, photo grid, etc.
export interface SkeletonGridProps {
  items?: number;
  columns?: 2 | 3 | 4 | 5 | 6;
  hasImage?: boolean;
  className?: string;
}

export const SkeletonGrid: React.FC<SkeletonGridProps> = ({
  items = 6,
  columns = 3,
  hasImage = true,
  className,
}) => {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  };

  return (
    <div className={cn('grid gap-4', gridCols[columns], className)} role="status" aria-label="Loading grid">
      {Array.from({ length: items }).map((_, index) => (
        <SkeletonCard key={index} hasImage={hasImage} hasFooter={false} />
      ))}
      <span className="sr-only">Loading grid items...</span>
    </div>
  );
};

// Chart Skeleton
export interface SkeletonChartProps {
  type?: 'line' | 'bar' | 'area';
  className?: string;
}

export const SkeletonChart: React.FC<SkeletonChartProps> = ({
  type = 'line',
  className,
}) => {
  return (
    <div className={cn('w-full h-64 bg-muted/10 rounded-lg p-4', className)} role="status" aria-label="Loading chart">
      <div className="flex items-center justify-between mb-4">
        <Skeleton variant="text" className="h-5 w-24" />
        <Skeleton variant="text" className="h-4 w-16" />
      </div>
      <Skeleton variant="rectangular" className="w-full h-48" />
      <span className="sr-only">Loading chart data...</span>
    </div>
  );
};

// Form Skeleton
export interface SkeletonFormProps {
  fields?: number;
  className?: string;
}

export const SkeletonForm: React.FC<SkeletonFormProps> = ({
  fields = 4,
  className,
}) => {
  return (
    <div className={cn('space-y-4', className)} role="status" aria-label="Loading form">
      {Array.from({ length: fields }).map((_, index) => (
        <div key={index} className="space-y-2">
          <Skeleton variant="text" className="h-4 w-24" />
          <Skeleton variant="rounded" className="h-10 w-full" />
        </div>
      ))}
      <Skeleton variant="rounded" className="h-10 w-32 mt-6" />
      <span className="sr-only">Loading form fields...</span>
    </div>
  );
};

export default Skeleton;