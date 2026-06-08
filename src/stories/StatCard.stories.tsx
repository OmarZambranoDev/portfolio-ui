import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from '../StatCard';
import {
  Thermometer,
  Droplets,
  Wind,
  Sun,
  DollarSign,
  Clock,
  TrendingUp,
  Users,
  Star,
} from 'lucide-react';
import '../../dist/index.css';

const meta: Meta<typeof StatCard> = {
  title: 'Portfolio/StatCard',
  component: StatCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'accent'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    trend: {
      control: { type: 'select' },
      options: ['up', 'down', 'neutral', undefined],
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  args: {
    icon: Thermometer,
    value: '72°F',
    label: 'Current temp',
    size: 'md',
  },
};

export const WithTrendUp: Story = {
  args: {
    icon: DollarSign,
    value: '$45,280',
    label: 'Portfolio value',
    trend: 'up',
    trendLabel: '+12.5%',
    size: 'md',
  },
};

export const WithTrendDown: Story = {
  args: {
    icon: Droplets,
    value: '45%',
    label: 'Humidity',
    trend: 'down',
    trendLabel: '-5%',
    size: 'md',
  },
};

export const WithTrendNeutral: Story = {
  args: {
    icon: Wind,
    value: '12 mph',
    label: 'Wind speed',
    trend: 'neutral',
    trendLabel: 'No change',
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <StatCard icon={Thermometer} value="72°F" label="Small" size="sm" />
      <StatCard icon={Thermometer} value="72°F" label="Medium" size="md" />
      <StatCard icon={Thermometer} value="72°F" label="Large" size="lg" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <StatCard icon={Sun} value="85°F" label="Default" variant="default" />
      <StatCard icon={Sun} value="85°F" label="Primary" variant="primary" />
      <StatCard icon={Sun} value="85°F" label="Accent" variant="accent" />
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    icon: Thermometer,
    value: '72°F',
    label: 'Click me',
    clickable: true,
    onClick: () => alert('StatCard clicked!'),
  },
};

export const WeatherAppExample: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[400px]">
      <StatCard icon={Thermometer} value="72°F" label="Temperature" variant="default" />
      <StatCard icon={Droplets} value="45%" label="Humidity" variant="default" />
      <StatCard icon={Wind} value="12 mph" label="Wind Speed" variant="default" />
      <StatCard
        icon={Droplets}
        value="20%"
        label="Rain Chance"
        trend="up"
        trendLabel="+5%"
        variant="default"
      />
    </div>
  ),
};

export const TravelAppExample: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[400px]">
      <StatCard icon={Sun} value="June-Aug" label="Best season" variant="primary" />
      <StatCard
        icon={DollarSign}
        value="$1,200"
        label="Avg cost"
        trend="down"
        trendLabel="-5%"
        variant="primary"
      />
      <StatCard icon={Clock} value="GMT+1" label="Time zone" variant="primary" />
      <StatCard
        icon={Star}
        value="4.8"
        label="Rating"
        trend="up"
        trendLabel="+0.3"
        variant="primary"
      />
    </div>
  ),
};

export const TradeAppExample: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[400px]">
      <StatCard
        icon={DollarSign}
        value="$45,280"
        label="Portfolio value"
        trend="up"
        trendLabel="+12.5%"
      />
      <StatCard
        icon={TrendingUp}
        value="+$1,240"
        label="Today's gain"
        trend="up"
        trendLabel="+2.8%"
      />
      <StatCard icon={Star} value="12" label="Watchlist" />
      <StatCard icon={DollarSign} value="8" label="Open orders" />
    </div>
  ),
};

export const SocialAppExample: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[400px]">
      <StatCard
        icon={Users}
        value="1,234"
        label="Followers"
        trend="up"
        trendLabel="+12"
        variant="primary"
      />
      <StatCard icon={Star} value="48" label="Posts" variant="primary" />
      <StatCard icon={Users} value="567" label="Following" variant="primary" />
      <StatCard icon={Star} value="92" label="Favorites" variant="primary" />
    </div>
  ),
};
