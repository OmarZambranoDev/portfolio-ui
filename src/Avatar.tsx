'use client';

import React, { useState, useCallback } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/utils';

const avatarRoot = cva('relative flex shrink-0 overflow-hidden rounded-full', {
  variants: {
    size: {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-16 h-16',
      xl: 'w-24 h-24',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const avatarFallback = cva(
  'flex h-full w-full items-center justify-center rounded-full bg-earth-sage text-white font-medium',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-lg',
        xl: 'text-2xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarRoot> {
  src: string;
  alt: string;
  fallback?: string;
}

const getInitials = (name: string, fallback?: string): string => {
  if (fallback) return fallback;

  const words = name.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }

  const firstInitial = words[0].charAt(0).toUpperCase();
  const lastInitial = words[words.length - 1].charAt(0).toUpperCase();
  return firstInitial + lastInitial;
};

export const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ src, alt, fallback, size = 'md', className, ...props }, ref) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleLoad = useCallback(() => {
      setImageLoaded(true);
    }, []);

    const handleError = useCallback(() => {
      setImageError(true);
    }, []);

    const initials = getInitials(alt, fallback);

    return (
      <AvatarPrimitive.Root ref={ref} className={cn(avatarRoot({ size }), className)} {...props}>
        {!imageError && (
          <AvatarPrimitive.Image
            src={src}
            alt={alt}
            className={cn('h-full w-full object-cover rounded-full', !imageLoaded && 'hidden')}
            onLoad={handleLoad}
            onError={handleError}
          />
        )}

        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-earth-stone/30 animate-pulse rounded-full" />
        )}

        <AvatarPrimitive.Fallback
          className={cn(avatarFallback({ size }))}
          delayMs={imageLoaded ? 0 : 600}
        >
          {initials}
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
    );
  }
);

Avatar.displayName = AvatarPrimitive.Root.displayName;

export default Avatar;
