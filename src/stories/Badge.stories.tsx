import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../Badge';
import { Bell, Mail, ShoppingCart } from 'lucide-react';
import { Button } from '../Button';
import '../../dist/index.css';

const meta: Meta<typeof Badge> = {
  title: 'Portfolio/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'danger', 'muted'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    count: 5,
    variant: 'primary',
    size: 'md',
  },
};

export const MaxDisplay: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Badge count={50} max={99} size="md" />
      <Badge count={99} max={99} size="md" />
      <Badge count={100} max={99} size="md" />
      <Badge count={999} max={99} size="md" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Badge count={5} variant="primary" />
      <Badge count={3} variant="danger" />
      <Badge count={12} variant="muted" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Badge count={5} size="sm" />
      <Badge count={5} size="md" />
    </div>
  ),
};

export const Hidden: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Badge count={0} />
      <Badge count={-1} />
      <span className="text-xs text-muted">(nothing rendered for 0 or negative)</span>
    </div>
  ),
};

export const AutoDot: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-earth-forest font-medium">
        Small badges auto-switch to dot when text is too long:
      </p>
      <div className="flex gap-6 items-center">
        <div className="relative">
          <Bell className="w-6 h-6 text-earth-sage" />
          <Badge count={5} size="sm" className="absolute -top-1 -right-1" />
        </div>
        <div className="relative">
          <Bell className="w-6 h-6 text-earth-sage" />
          <Badge count={12} size="sm" className="absolute -top-1 -right-1" />
        </div>
        <div className="relative">
          <Bell className="w-6 h-6 text-earth-sage" />
          <Badge count={99} max={99} size="sm" className="absolute -top-1 -right-1" />
        </div>
        <div className="relative">
          <Bell className="w-6 h-6 text-earth-sage" />
          <Badge count={999} max={99} size="sm" className="absolute -top-1 -right-1" />
        </div>
      </div>
      <p className="text-xs text-muted">Left to right: 5, 12 (number), 99 (number), 99+ → dot</p>
    </div>
  ),
};

export const OnIcon: Story = {
  render: () => (
    <div className="flex gap-6">
      <div className="relative">
        <Bell className="w-6 h-6 text-earth-sage" />
        <Badge count={5} size="sm" className="absolute -top-2 -right-1" />
      </div>
      <div className="relative">
        <Mail className="w-6 h-6 text-earth-sage" />
        <Badge count={23} size="sm" variant="danger" className="absolute -top-2 -right-1" />
      </div>
      <div className="relative">
        <ShoppingCart className="w-6 h-6 text-earth-sage" />
        <Badge count={0} size="sm" className="absolute -top-1 -right-1" />
      </div>
    </div>
  ),
};

export const OnButton: Story = {
  render: () => (
    <div className="flex gap-4">
      <div className="relative">
        <Button variant="outline">Messages</Button>
        <Badge count={3} size="md" className="absolute -top-2 -right-2" />
      </div>
      <div className="relative">
        <Button variant="outline">Alerts</Button>
        <Badge count={150} max={99} size="md" className="absolute -top-2 -right-2" />
      </div>
    </div>
  ),
};
