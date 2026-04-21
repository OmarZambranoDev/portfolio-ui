'use client';

import React, { createContext, useContext, useId, useState as useStateReact } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/utils';
import { Chip } from './Chip';

// Context for sharing state between compound components
interface TabsContextValue {
  selectedValue: string | undefined;
  setSelectedValue: (value: string) => void;
  variant: 'underline' | 'pills' | 'enclosed';
  fullWidth?: boolean;
  baseId: string;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs compound components must be used within a Tabs component');
  }
  return context;
};

// Tabs Root Component
const tabsContainer = cva('w-full', {
  variants: {
    variant: {
      underline: '',
      pills: '',
      enclosed: '',
    },
  },
  defaultVariants: {
    variant: 'underline',
  },
});

export interface TabsProps extends VariantProps<typeof tabsContainer> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  defaultValue,
  value,
  onValueChange,
  children,
  variant = 'underline',
  fullWidth = false,
  className,
}) => {
  const baseId = useId();
  const [internalValue, setInternalValue] = useStateReact(defaultValue);

  // Ensure variant is never null
  const safeVariant = variant || 'underline';

  // Use controlled or uncontrolled value
  const selectedValue = value !== undefined ? value : internalValue;

  const setSelectedValue = (newValue: string) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  const contextValue: TabsContextValue = {
    selectedValue,
    setSelectedValue,
    variant: safeVariant,
    fullWidth,
    baseId,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div
        className={cn(tabsContainer({ variant: safeVariant }), className)}
        data-full-width={fullWidth}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// TabsList Component
const tabsList = cva('flex', {
  variants: {
    variant: {
      underline: 'border-b border-muted',
      pills: 'gap-1 p-1 bg-muted/10 rounded-lg',
      enclosed: '',
    },
    fullWidth: {
      true: 'w-full [&>*]:flex-1',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'underline',
    fullWidth: false,
  },
});

export interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

export const TabsList: React.FC<TabsListProps> = ({ children, className }) => {
  const { variant, fullWidth } = useTabsContext();

  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className={cn(tabsList({ variant, fullWidth }), className)}
    >
      {children}
    </div>
  );
};

// TabsTrigger Component
const tabsTrigger = cva(
  'relative inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        underline: cn(
          'px-4 py-3 text-sm font-medium',
          'text-muted hover:text-primary-hover',
          'data-[state=active]:text-primary',
          // Underline effect using pseudo-element
          'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:duration-200',
          'data-[state=active]:after:scale-x-100'
        ),
        pills: cn(
          'px-3 py-1.5 text-sm font-medium rounded-md',
          'text-secondary hover:bg-muted/20 hover:text-primary',
          'data-[state=active]:bg-primary data-[state=active]:text-white'
        ),
        enclosed: cn(
          'px-4 py-2 text-sm font-medium rounded-t-lg',
          'text-secondary bg-transparent',
          'data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:border data-[state=active]:border-muted data-[state=active]:border-b-white',
          'relative -mb-px'
        ),
      },
    },
    defaultVariants: {
      variant: 'underline',
    },
  }
);

export interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  badge?: number | string;
  className?: string;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
  disabled = false,
  icon,
  badge,
  className,
}) => {
  const { selectedValue, setSelectedValue, variant, baseId } = useTabsContext();

  const isSelected = selectedValue === value;

  const handleClick = () => {
    if (disabled) return;
    setSelectedValue(value);
  };

  return (
    <button
      role="tab"
      aria-selected={isSelected}
      aria-controls={`${baseId}-panel-${value}`}
      id={`${baseId}-tab-${value}`}
      data-state={isSelected ? 'active' : 'inactive'}
      disabled={disabled}
      onClick={handleClick}
      className={cn(tabsTrigger({ variant }), className)}
      tabIndex={isSelected ? 0 : -1}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
      {badge !== undefined && (
        <Chip
          size="sm"
          variant={isSelected && variant === 'pills' ? 'default' : 'secondary'}
          className="ml-1"
        >
          {badge}
        </Chip>
      )}
    </button>
  );
};

// TabsContent Component
export interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const TabsContent: React.FC<TabsContentProps> = ({ value, children, className }) => {
  const { selectedValue, baseId } = useTabsContext();

  const isSelected = selectedValue === value;

  if (!isSelected) return null;

  return (
    <div
      role="tabpanel"
      id={`${baseId}-panel-${value}`}
      aria-labelledby={`${baseId}-tab-${value}`}
      tabIndex={0}
      className={cn('pt-4', className)}
    >
      {children}
    </div>
  );
};

export default Tabs;
