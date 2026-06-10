import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '../Chip';
import '../../dist/index.css';

const meta: Meta<typeof Chip> = {
  title: 'Portfolio/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'outline', 'accent'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    clickable: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: 'React',
    variant: 'default',
    size: 'md',
  },
};

export const Primary: Story = {
  args: {
    children: 'TypeScript',
    variant: 'primary',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    children: 'Next.js',
    variant: 'outline',
    size: 'md',
  },
};

export const Accent: Story = {
  args: {
    children: 'Micro-Frontends',
    variant: 'accent',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
};

export const Clickable: Story = {
  args: {
    children: 'Click me',
    clickable: true,
    onClick: () => alert('Clicked!'),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Chip variant="default">Default</Chip>
      <Chip variant="primary">Primary</Chip>
      <Chip variant="secondary">Secondary</Chip>
      <Chip variant="outline">Outline</Chip>
      <Chip variant="accent">Accent</Chip>
      <Chip variant="selected">Active</Chip>
    </div>
  ),
};
