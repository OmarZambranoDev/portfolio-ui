import { ClassValue } from 'clsx';
import * as class_variance_authority_types from 'class-variance-authority/types';
import React from 'react';
import { VariantProps } from 'class-variance-authority';

declare function cn(...inputs: ClassValue[]): string;

declare const button: (props?: ({
    variant?: "primary" | "secondary" | "outline" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>, VariantProps<typeof button> {
    children: React.ReactNode;
    disabled?: boolean;
    loading?: boolean;
}
declare const Button: React.FC<ButtonProps>;

declare const card: (props?: ({
    variant?: "outline" | "default" | "elevated" | null | undefined;
    clickable?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof card> {
    children: React.ReactNode;
}
declare const Card: React.FC<CardProps>;
interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}
declare const CardImage: React.FC<CardImageProps>;
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const CardContent: React.FC<CardContentProps>;
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}
declare const CardTitle: React.FC<CardTitleProps>;
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}
declare const CardDescription: React.FC<CardDescriptionProps>;
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const CardFooter: React.FC<CardFooterProps>;

declare const chip: (props?: ({
    variant?: "primary" | "secondary" | "outline" | "default" | "accent" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    clickable?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ChipProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof chip> {
    children: React.ReactNode;
    disabled?: boolean;
}
declare const Chip: React.FC<ChipProps>;

declare const modalPanel: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | "full" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ModalProps extends VariantProps<typeof modalPanel> {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children: React.ReactNode;
    showCloseButton?: boolean;
    closeOnOverlayClick?: boolean;
    className?: string;
}
declare const Modal: React.FC<ModalProps>;
interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const ModalHeader: React.FC<ModalHeaderProps>;
interface ModalTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}
declare const ModalTitle: React.FC<ModalTitleProps>;
interface ModalDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}
declare const ModalDescription: React.FC<ModalDescriptionProps>;
interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const ModalBody: React.FC<ModalBodyProps>;
interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const ModalFooter: React.FC<ModalFooterProps>;

declare const tabsContainer: (props?: ({
    variant?: "underline" | "pills" | "enclosed" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface TabsProps extends VariantProps<typeof tabsContainer> {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    children: React.ReactNode;
    fullWidth?: boolean;
    className?: string;
}
declare const Tabs: React.FC<TabsProps>;
interface TabsListProps {
    children: React.ReactNode;
    className?: string;
}
declare const TabsList: React.FC<TabsListProps>;
interface TabsTriggerProps {
    value: string;
    children: React.ReactNode;
    disabled?: boolean;
    icon?: React.ReactNode;
    badge?: number | string;
    className?: string;
}
declare const TabsTrigger: React.FC<TabsTriggerProps>;
interface TabsContentProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}
declare const TabsContent: React.FC<TabsContentProps>;

export { Button, type ButtonProps, Card, CardContent, type CardContentProps, CardDescription, type CardDescriptionProps, CardFooter, type CardFooterProps, CardImage, type CardImageProps, type CardProps, CardTitle, type CardTitleProps, Chip, type ChipProps, Modal, ModalBody, type ModalBodyProps, ModalDescription, type ModalDescriptionProps, ModalFooter, type ModalFooterProps, ModalHeader, type ModalHeaderProps, type ModalProps, ModalTitle, type ModalTitleProps, Tabs, TabsContent, type TabsContentProps, TabsList, type TabsListProps, type TabsProps, TabsTrigger, type TabsTriggerProps, cn };
