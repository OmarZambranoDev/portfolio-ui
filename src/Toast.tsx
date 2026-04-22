'use client';

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { cn } from './lib/utils';
import { Button } from './Button';

// Types
export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

export interface ToastOptions {
  id?: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ToastContextValue {
  toast: (options: ToastOptions) => void;
  dismiss: (id: string) => void;
  dismissAll: () => void;
}

// Context
const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

// Provider Component
interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<(ToastOptions & { id: string; open: boolean })[]>([]);

  const toast = useCallback((options: ToastOptions) => {
    const id = options.id || `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    setToasts((prev) => [
      ...prev,
      {
        ...options,
        id,
        open: true,
      },
    ]);

    return id;
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.map((toast) => (toast.id === id ? { ...toast, open: false } : toast)));
  }, []);

  const dismissAll = useCallback(() => {
    setToasts((prev) => prev.map((toast) => ({ ...toast, open: false })));
  }, []);

  const handleOpenChange = useCallback((id: string, open: boolean) => {
    if (!open) {
      // Remove from DOM after animation
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, 200);
    }
  }, []);

  const value = useMemo(
    () => ({
      toast,
      dismiss,
      dismissAll,
    }),
    [toast, dismiss, dismissAll]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastPrimitive.Provider swipeDirection="right">
        {toasts.map(
          ({ id, title, description, variant = 'default', duration = 5000, action, open }) => (
            <Toast
              key={id}
              id={id}
              title={title}
              description={description}
              variant={variant}
              duration={duration}
              action={action}
              open={open}
              onOpenChange={(open) => handleOpenChange(id, open)}
            />
          )
        )}
        <ToastPrimitive.Viewport className="fixed bottom-0 right-0 z-50 m-0 flex w-full max-w-sm flex-col gap-2 p-4 outline-none md:m-4" />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
};

// Toast Component
interface ToastProps extends ToastOptions {
  id: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Toast: React.FC<ToastProps> = ({
  id,
  title,
  description,
  variant = 'default',
  duration = 5000,
  action,
  open,
  onOpenChange,
}) => {
  const variantConfig = {
    default: {
      container: 'bg-white border-l-4 border-muted shadow-xl ring-1 ring-black/5',
      icon: null,
      iconColor: 'text-muted',
    },
    success: {
      container: 'bg-emerald-50 border-l-4 border-emerald-500 shadow-xl ring-1 ring-black/5',
      icon: CheckCircle,
      iconColor: 'text-emerald-500',
    },
    error: {
      container: 'bg-red-50 border-l-4 border-red-500 shadow-xl ring-1 ring-black/5',
      icon: AlertCircle,
      iconColor: 'text-red-500',
    },
    warning: {
      container: 'bg-amber-50 border-l-4 border-amber-500 shadow-xl ring-1 ring-black/5',
      icon: AlertTriangle,
      iconColor: 'text-amber-500',
    },
    info: {
      container: 'bg-blue-50 border-l-4 border-blue-500 shadow-xl ring-1 ring-black/5',
      icon: Info,
      iconColor: 'text-blue-500',
    },
  };

  const config = variantConfig[variant];
  const IconComponent = config.icon;

  const textColor = {
    default: 'text-primary',
    success: 'text-emerald-900',
    error: 'text-red-900',
    warning: 'text-amber-900',
    info: 'text-blue-900',
  };

  const descriptionColor = {
    default: 'text-secondary',
    success: 'text-emerald-700',
    error: 'text-red-700',
    warning: 'text-amber-700',
    info: 'text-blue-700',
  };

  return (
    <ToastPrimitive.Root
      open={open}
      onOpenChange={onOpenChange}
      duration={duration}
      className={cn(
        'relative flex w-full items-start gap-3 rounded-lg p-4',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=open]:slide-in-from-right data-[state=closed]:fade-out',
        'data-[state=open]:duration-300 data-[state=closed]:duration-200',
        config.container
      )}
    >
      {IconComponent && <IconComponent className={cn('h-5 w-5 shrink-0', config.iconColor)} />}

      <div className="flex-1 min-w-0">
        {title && (
          <ToastPrimitive.Title className={cn('text-sm font-semibold', textColor[variant])}>
            {title}
          </ToastPrimitive.Title>
        )}
        {description && (
          <ToastPrimitive.Description className={cn('text-sm mt-0.5', descriptionColor[variant])}>
            {description}
          </ToastPrimitive.Description>
        )}
        {action && (
          <ToastPrimitive.Action asChild altText={action.label}>
            <Button variant="outline" size="sm" onClick={action.onClick} className="mt-2">
              {action.label}
            </Button>
          </ToastPrimitive.Action>
        )}
      </div>

      <ToastPrimitive.Close asChild>
        <button
          className={cn(
            'shrink-0 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
          )}
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  );
};

export default ToastProvider;
