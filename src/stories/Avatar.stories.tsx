import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../Avatar';
import '../../dist/index.css';

const meta: Meta<typeof Avatar> = {
  title: 'Portfolio/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: 'https://i.pravatar.cc/200?img=1',
    alt: 'Jane Doe',
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      <div className="text-center space-y-2">
        <Avatar src="https://i.pravatar.cc/200?img=2" alt="John Smith" size="sm" />
        <p className="text-xs text-earth-moss">sm (32px)</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar src="https://i.pravatar.cc/200?img=3" alt="Mary Johnson" size="md" />
        <p className="text-xs text-earth-moss">md (40px)</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar src="https://i.pravatar.cc/200?img=4" alt="Robert Brown" size="lg" />
        <p className="text-xs text-earth-moss">lg (64px)</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar src="https://i.pravatar.cc/200?img=5" alt="Lisa Davis" size="xl" />
        <p className="text-xs text-earth-moss">xl (96px)</p>
      </div>
    </div>
  ),
};

export const WithFallbackInitials: Story = {
  render: () => (
    <div className="flex gap-6">
      <div className="text-center space-y-2">
        <Avatar src="/broken-image.jpg" alt="Jane Doe" size="lg" />
        <p className="text-xs text-earth-moss">Auto initials (JD)</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar src="/broken-image.jpg" alt="John Smith" fallback="JS" size="lg" />
        <p className="text-xs text-earth-moss">Custom fallback (JS)</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar src="/broken-image.jpg" alt="Madonna" size="lg" />
        <p className="text-xs text-earth-moss">Single name (M)</p>
      </div>
    </div>
  ),
};

export const SocialAppExample: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      {/* Post header */}
      <div className="flex items-center gap-3">
        <Avatar src="https://i.pravatar.cc/200?img=6" alt="Sarah Wilson" size="md" />
        <div>
          <p className="font-semibold text-earth-forest">Sarah Wilson</p>
          <p className="text-xs text-earth-moss">@sarahw • 2h ago</p>
        </div>
      </div>

      <p className="text-earth-forest">
        Just launched my new portfolio site! Check it out and let me know what you think.
      </p>

      {/* Comment list */}
      <div className="border-t border-earth-stone/20 pt-4 space-y-3">
        <div className="flex items-start gap-3">
          <Avatar src="https://i.pravatar.cc/200?img=7" alt="Mike Johnson" size="sm" />
          <div>
            <p className="text-sm font-semibold text-earth-forest">Mike Johnson</p>
            <p className="text-sm text-earth-moss">Looks great! Love the earth tones.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Avatar src="https://i.pravatar.cc/200?img=8" alt="Emily Chen" size="sm" />
          <div>
            <p className="text-sm font-semibold text-earth-forest">Emily Chen</p>
            <p className="text-sm text-earth-moss">Amazing work! What stack did you use?</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ProfileView: Story = {
  render: () => (
    <div className="w-[350px] border border-earth-stone/30 rounded-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        <Avatar src="https://i.pravatar.cc/200?img=9" alt="David Martinez" size="xl" />
      </div>
      <h2 className="text-xl font-semibold text-earth-forest">David Martinez</h2>
      <p className="text-earth-moss mb-4">@davidm • San Francisco, CA</p>
      <div className="flex justify-center gap-8">
        <div>
          <p className="font-semibold text-earth-forest">1,234</p>
          <p className="text-xs text-earth-moss">Followers</p>
        </div>
        <div>
          <p className="font-semibold text-earth-forest">567</p>
          <p className="text-xs text-earth-moss">Following</p>
        </div>
      </div>
    </div>
  ),
};

export const LoadingState: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      <div className="text-center space-y-2">
        <Avatar src="/broken-image.jpg" alt="Loading" size="sm" />
        <p className="text-xs text-earth-moss">Loading sm</p>
      </div>
      <div className="text-center space-y-2">
        <Avatar src="/broken-image.jpg" alt="Loading" size="md" />
        <p className="text-xs text-earth-moss">Loading md</p>
      </div>
    </div>
  ),
};
