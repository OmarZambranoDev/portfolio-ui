'use client';

import React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from './lib/utils';

export const RadioGroup = RadioGroupPrimitive.Root;

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {}

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-full border border-earth-stone/30 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-forest/20 disabled:cursor-not-allowed disabled:bg-earth-stone/10 data-[state=checked]:border-primary data-[state=checked]:bg-primary',
      className
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <div className="h-2 w-2 rounded-full bg-white" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export default RadioGroup;
