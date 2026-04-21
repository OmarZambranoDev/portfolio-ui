'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/utils';
import { Button } from './Button';

const modalOverlay = cva(
  'fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm',
  {
    variants: {
      isOpen: {
        true: 'animate-in fade-in duration-200',
        false: 'hidden',
      },
    },
    defaultVariants: {
      isOpen: true,
    },
  }
);

const modalPanel = cva(
  'relative w-full bg-white border border-muted/20 rounded-lg shadow-xl animate-in slide-in-from-bottom-4 duration-300 overflow-hidden',
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        full: 'max-w-[calc(100vw-2rem)]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface ModalProps extends VariantProps<typeof modalPanel> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  className,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  const handleTabKey = useCallback((event: KeyboardEvent) => {
    if (!modalRef.current || event.key !== 'Tab') return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  }, []);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keydown', handleTabKey);
      document.body.style.overflow = 'hidden';

      if (modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length > 0) {
          (focusableElements[0] as HTMLElement).focus();
        }
      }
    }

    return () => {
      if (isOpen) {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keydown', handleTabKey);
        document.body.style.overflow = 'unset';

        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      }
    };
  }, [isOpen, handleKeyDown, handleTabKey]);

  if (!isOpen) return null;

  const titleId = title ? 'modal-title' : undefined;
  const descriptionId = description ? 'modal-description' : undefined;

  return (
    <div
      className={cn(modalOverlay({ isOpen }))}
      onClick={handleOverlayClick}
      data-testid="modal-overlay"
    >
      <div
        ref={modalRef}
        className={cn(modalPanel({ size }), className)}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        {showCloseButton && (
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 z-50 !p-2 !rounded-md !bg-white"
            aria-label="Close modal"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        )}
        {children}
      </div>
    </div>
  );
};

// Compound Components
export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('px-6 py-4 border-b border-muted', className)} {...props}>
      {children}
    </div>
  );
};

export interface ModalTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const ModalTitle: React.FC<ModalTitleProps> = ({ children, className, ...props }) => {
  return (
    <h2 id="modal-title" className={cn('text-lg font-semibold text-primary', className)} {...props}>
      {children}
    </h2>
  );
};

export interface ModalDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const ModalDescription: React.FC<ModalDescriptionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p id="modal-description" className={cn('text-sm text-secondary mt-1', className)} {...props}>
      {children}
    </p>
  );
};

export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ModalBody: React.FC<ModalBodyProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('px-6 py-4', className)} {...props}>
      {children}
    </div>
  );
};

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn('px-6 py-4 border-t border-muted flex justify-end gap-2', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Modal;
