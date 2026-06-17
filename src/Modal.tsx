'use client';

import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from './lib/utils';
import { Button } from './Button';

// Root Components
export const Modal = DialogPrimitive.Root;
export const ModalTrigger = DialogPrimitive.Trigger;
export const ModalPortal = DialogPrimitive.Portal;
export const ModalClose = DialogPrimitive.Close;

// Overlay Component
export const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
      'duration-200',
      className
    )}
    {...props}
  />
));

ModalOverlay.displayName = DialogPrimitive.Overlay.displayName;

// Content Component
export interface ModalContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  ModalContentProps
>(({ className, size = 'md', children, ...props }, ref) => {
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-[calc(100vw-2rem)]',
  };

  return (
    <ModalPortal>
      <ModalOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          'fixed left-[50%] top-[50%] z-50 w-full translate-x-[-50%] translate-y-[-50%]',
          'bg-white border border-muted/20 rounded-lg shadow-lg',
          'focus:outline-none',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
          'data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95',
          'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
          'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
          'duration-200 overflow-hidden',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </ModalPortal>
  );
});

ModalContent.displayName = DialogPrimitive.Content.displayName;

// Header Component
export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className, ...props }) => (
  <div className={cn('px-6 py-4 border-b border-muted', className)} {...props}>
    {children}
  </div>
);

// Title Component
export interface ModalTitleProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> {}

export const ModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  ModalTitleProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold text-primary', className)}
    {...props}
  />
));

ModalTitle.displayName = DialogPrimitive.Title.displayName;

// Description Component
export interface ModalDescriptionProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> {}

export const ModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  ModalDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-secondary mt-1', className)}
    {...props}
  />
));

ModalDescription.displayName = DialogPrimitive.Description.displayName;

// Body Component
export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ModalBody: React.FC<ModalBodyProps> = ({ children, className, ...props }) => (
  <div className={cn('px-6 py-4', className)} {...props}>
    {children}
  </div>
);

// Footer Component
export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className, ...props }) => (
  <div
    className={cn('px-6 py-4 border-t border-muted flex justify-end gap-2', className)}
    {...props}
  >
    {children}
  </div>
);

// Convenience component combining everything
export interface ModalDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  className?: string;
}

export const ModalDialog: React.FC<ModalDialogProps> = ({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  size = 'md',
  showCloseButton = true,
  className,
}) => (
  <Modal open={open} onOpenChange={onOpenChange}>
    {trigger && <ModalTrigger asChild>{trigger}</ModalTrigger>}
    <ModalContent size={size} className={className}>
      {showCloseButton && (
        <ModalClose asChild>
          <Button
            variant="outline"
            size="sm"
            className="absolute top-4 right-4 z-10 !p-2 !rounded-md"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </Button>
        </ModalClose>
      )}
      {title && (
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
      )}
      {description && <ModalDescription className="px-6 pt-2">{description}</ModalDescription>}
      {children}
    </ModalContent>
  </Modal>
);

export default Modal;
