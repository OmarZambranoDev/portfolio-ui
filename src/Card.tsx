import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const card = cva('rounded-lg border overflow-hidden transition-shadow hover:shadow-lg', {
  variants: {
    variant: {
      default: 'bg-white border-gray-200',
      elevated: 'bg-white border-transparent shadow-md',
      outline: 'bg-transparent border-gray-300',
    },
    clickable: {
      true: 'cursor-pointer',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof card> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant,
  clickable,
  className,
  ...props
}) => {
  return (
    <div className={card({ variant, clickable, className })} {...props}>
      {children}
    </div>
  );
};

// Sub-components for structured card layout
export interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt, className = '', ...props }) => {
  return (
    <div className="w-full h-40 bg-gray-100">
      <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} {...props} />
    </div>
  );
};

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className = '', ...props }) => {
  return (
    <h3 className={`text-lg font-semibold text-gray-900 mb-1 ${className}`} {...props}>
      {children}
    </h3>
  );
};

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <p className={`text-sm text-gray-600 ${className}`} {...props}>
      {children}
    </p>
  );
};

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`px-4 py-3 bg-gray-50 border-t border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
