import type { Meta, StoryObj } from '@storybook/react';
import {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonCard,
  SkeletonTable,
  SkeletonList,
  SkeletonGrid,
  SkeletonChart,
  SkeletonForm,
} from '../Skeleton';
import { Card, CardContent, CardTitle } from '../Card';
import '../../dist/index.css';

// Add shimmer animation to global styles
const style = document.createElement('style');
style.textContent = `
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;
document.head.appendChild(style);

const meta: Meta<typeof Skeleton> = {
  title: 'Portfolio/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'circular', 'rectangular', 'rounded'],
    },
    animation: {
      control: { type: 'select' },
      options: ['pulse', 'wave', 'none'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Basic: Story = {
  render: () => (
    <div className="space-y-4 w-[400px]">
      <div className="space-y-2">
        <p className="text-sm font-medium text-primary">Text Variants</p>
        <Skeleton variant="text" className="h-4 w-full" />
        <Skeleton variant="text" className="h-4 w-3/4" />
        <Skeleton variant="text" className="h-4 w-1/2" />
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-primary">Other Variants</p>
        <div className="flex items-center gap-3">
          <Skeleton variant="circular" className="w-10 h-10" />
          <Skeleton variant="rectangular" className="w-20 h-20" />
          <Skeleton variant="rounded" className="w-20 h-20" />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-primary">Animations</p>
        <div className="space-y-2">
          <Skeleton animation="pulse" className="h-8 w-full" />
          <Skeleton animation="wave" className="h-8 w-full" />
          <Skeleton animation="none" className="h-8 w-full" />
        </div>
      </div>
    </div>
  ),
};

export const TextLines: Story = {
  render: () => (
    <div className="w-[400px] space-y-6">
      <div>
        <p className="text-sm font-medium text-primary mb-2">3 Lines - Default</p>
        <SkeletonText lines={3} />
      </div>

      <div>
        <p className="text-sm font-medium text-primary mb-2">5 Lines - Small Spacing</p>
        <SkeletonText lines={5} spacing="sm" />
      </div>

      <div>
        <p className="text-sm font-medium text-primary mb-2">Custom Last Line</p>
        <SkeletonText lines={4} lastLineWidth="50%" />
      </div>
    </div>
  ),
};

export const Avatar: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="text-center">
        <SkeletonAvatar size="sm" />
        <p className="text-xs text-secondary mt-2">Small</p>
      </div>
      <div className="text-center">
        <SkeletonAvatar size="md" />
        <p className="text-xs text-secondary mt-2">Medium</p>
      </div>
      <div className="text-center">
        <SkeletonAvatar size="lg" />
        <p className="text-xs text-secondary mt-2">Large</p>
      </div>
      <div className="text-center">
        <SkeletonAvatar size="xl" />
        <p className="text-xs text-secondary mt-2">Extra Large</p>
      </div>
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="w-[350px]">
      <SkeletonCard />
    </div>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <div className="w-[800px]">
      <SkeletonGrid items={6} columns={3} />
    </div>
  ),
};

export const ListSkeleton: Story = {
  render: () => (
    <div className="w-[400px]">
      <SkeletonList items={5} />
    </div>
  ),
};

export const TableSkeleton: Story = {
  render: () => (
    <div className="w-[700px]">
      <SkeletonTable rows={5} columns={4} />
    </div>
  ),
};

export const ChartSkeleton: Story = {
  render: () => (
    <div className="w-[600px]">
      <SkeletonChart />
    </div>
  ),
};

export const FormSkeleton: Story = {
  render: () => (
    <div className="w-[400px]">
      <SkeletonForm fields={4} />
    </div>
  ),
};

export const MusicAppExample: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardContent>
        <CardTitle className="mb-4">Loading Playlist...</CardTitle>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Skeleton variant="rounded" className="w-12 h-12" />
            <div className="flex-1">
              <SkeletonText lines={2} spacing="sm" />
            </div>
          </div>
          <SkeletonList items={4} hasAvatar={false} hasThumbnail={true} />
        </div>
      </CardContent>
    </Card>
  ),
};

export const ShopAppExample: Story = {
  render: () => (
    <div className="w-[700px]">
      <div className="flex items-center justify-between mb-4">
        <Skeleton variant="text" className="h-8 w-32" />
        <Skeleton variant="rounded" className="h-10 w-24" />
      </div>
      <SkeletonGrid items={4} columns={4} />
    </div>
  ),
};

export const TradeAppExample: Story = {
  render: () => (
    <Card className="w-[600px]">
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div>
            <Skeleton variant="text" className="h-6 w-32 mb-1" />
            <Skeleton variant="text" className="h-4 w-24" />
          </div>
          <div className="flex gap-2">
            <Skeleton variant="rounded" className="h-8 w-16" />
            <Skeleton variant="rounded" className="h-8 w-16" />
            <Skeleton variant="rounded" className="h-8 w-16" />
          </div>
        </div>
        <SkeletonChart />
        <div className="mt-4">
          <SkeletonTable rows={3} columns={4} hasHeader={true} />
        </div>
      </CardContent>
    </Card>
  ),
};

export const SocialAppExample: Story = {
  render: () => (
    <Card className="w-[500px]">
      <CardContent>
        <div className="flex items-center gap-3 mb-4">
          <SkeletonAvatar size="lg" />
          <div className="flex-1">
            <Skeleton variant="text" className="h-5 w-32 mb-1" />
            <Skeleton variant="text" className="h-3 w-24" />
          </div>
        </div>
        <Skeleton variant="rounded" className="w-full h-64 mb-4" />
        <div className="flex gap-4 mb-4">
          <Skeleton variant="rounded" className="h-8 w-16" />
          <Skeleton variant="rounded" className="h-8 w-16" />
          <Skeleton variant="rounded" className="h-8 w-16" />
        </div>
        <SkeletonList items={3} />
      </CardContent>
    </Card>
  ),
};

export const TravelAppExample: Story = {
  render: () => (
    <div className="w-[700px]">
      <div className="mb-4">
        <Skeleton variant="text" className="h-8 w-48 mb-2" />
        <Skeleton variant="text" className="h-4 w-64" />
      </div>
      <div className="flex gap-4 mb-6">
        <Skeleton variant="rounded" className="h-10 flex-1" />
        <Skeleton variant="rounded" className="h-10 flex-1" />
        <Skeleton variant="rounded" className="h-10 w-24" />
      </div>
      <SkeletonGrid items={3} columns={3} />
    </div>
  ),
};

export const AllSkeletons: Story = {
  render: () => (
    <div className="space-y-8 w-[800px]">
      <div>
        <h3 className="text-lg font-semibold text-primary mb-3">Text Lines</h3>
        <SkeletonText lines={3} />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-primary mb-3">Avatars</h3>
        <div className="flex gap-3">
          <SkeletonAvatar size="sm" />
          <SkeletonAvatar size="md" />
          <SkeletonAvatar size="lg" />
          <SkeletonAvatar size="xl" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-primary mb-3">Cards</h3>
        <div className="grid grid-cols-3 gap-4">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-primary mb-3">List</h3>
        <SkeletonList items={3} />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-primary mb-3">Table</h3>
        <SkeletonTable rows={3} columns={4} />
      </div>
    </div>
  ),
};