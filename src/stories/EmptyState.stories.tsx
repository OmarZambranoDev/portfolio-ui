import type { Meta, StoryObj } from '@storybook/react';
import {
  EmptyState,
  NoSearchResults,
  NoItems,
  EmptyCart,
  NoNotifications,
  NoMessages,
  NoData,
  ErrorState,
  ComingSoon,
  NoFolderItems,
} from '../EmptyState';
import { Card, CardContent } from '../Card';
import {
  FolderOpen,
  Inbox,
  Package,
  Users,
  Heart,
  Star,
  Bookmark,
  Music,
  PlaySquare,
} from 'lucide-react';
import '../../dist/index.css';

const meta: Meta<typeof EmptyState> = {
  title: 'Portfolio/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Basic: Story = {
  args: {
    title: 'No items found',
    description: 'There are no items to display at this time.',
    icon: Package,
    size: 'md',
  },
};

export const WithAction: Story = {
  args: {
    title: 'Your watchlist is empty',
    description: 'Add stocks or crypto to your watchlist to track them easily.',
    icon: Star,
    size: 'md',
    action: {
      label: 'Add to Watchlist',
      onClick: () => console.log('Add to watchlist clicked'),
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium text-primary mb-2">Small</p>
        <Card>
          <CardContent>
            <EmptyState
              title="No notifications"
              description="You're all caught up!"
              icon={Inbox}
              size="sm"
            />
          </CardContent>
        </Card>
      </div>

      <div>
        <p className="text-sm font-medium text-primary mb-2">Medium (Default)</p>
        <Card>
          <CardContent>
            <EmptyState
              title="No notifications"
              description="You're all caught up! Check back later for updates."
              icon={Inbox}
              size="md"
            />
          </CardContent>
        </Card>
      </div>

      <div>
        <p className="text-sm font-medium text-primary mb-2">Large</p>
        <Card>
          <CardContent>
            <EmptyState
              title="No notifications"
              description="You're all caught up! Check back later for updates. We'll notify you when something new arrives."
              icon={Inbox}
              size="lg"
              action={{
                label: 'Check for Updates',
                onClick: () => console.log('Check updates'),
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};

export const PreBuiltStates: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[800px]">
      <Card>
        <CardContent>
          <NoSearchResults size="sm" />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <NoItems itemType="playlists" size="sm" />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <EmptyCart size="sm" />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <NoNotifications size="sm" />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <NoMessages size="sm" />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <NoData size="sm" />
        </CardContent>
      </Card>
    </div>
  ),
};

export const MusicAppExample: Story = {
  render: () => (
    <div className="space-y-4 w-[400px]">
      <Card>
        <CardContent>
          <NoItems
            itemType="playlists"
            size="md"
            action={{
              label: 'Create Playlist',
              onClick: () => console.log('Create playlist'),
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <EmptyState
            title="No songs in this playlist"
            description="Add some tracks to get started."
            icon={Music}
            size="sm"
            action={{
              label: 'Add Songs',
              onClick: () => console.log('Add songs'),
            }}
          />
        </CardContent>
      </Card>
    </div>
  ),
};

export const ShopAppExample: Story = {
  render: () => (
    <div className="space-y-4 w-[500px]">
      <Card>
        <CardContent>
          <EmptyCart
            size="md"
            action={{
              label: 'Continue Shopping',
              onClick: () => console.log('Continue shopping'),
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <NoSearchResults
            size="sm"
            action={{
              label: 'Clear Filters',
              onClick: () => console.log('Clear filters'),
            }}
          />
        </CardContent>
      </Card>
    </div>
  ),
};

export const TradeAppExample: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardContent>
        <EmptyState
          title="Your watchlist is empty"
          description="Track your favorite stocks and crypto by adding them to your watchlist."
          icon={Star}
          size="md"
          action={{
            label: 'Add Symbols',
            onClick: () => console.log('Add symbols'),
          }}
        />
      </CardContent>
    </Card>
  ),
};

export const SocialAppExample: Story = {
  render: () => (
    <div className="space-y-4 w-[500px]">
      <Card>
        <CardContent>
          <EmptyState
            title="No followers yet"
            description="When someone follows you, they'll appear here."
            icon={Users}
            size="md"
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <EmptyState
            title="No saved posts"
            description="Posts you save will appear here for easy access."
            icon={Bookmark}
            size="md"
            action={{
              label: 'Explore Posts',
              onClick: () => console.log('Explore'),
            }}
          />
        </CardContent>
      </Card>
    </div>
  ),
};

export const TravelAppExample: Story = {
  render: () => (
    <div className="space-y-4 w-[500px]">
      <Card>
        <CardContent>
          <NoSearchResults
            size="md"
            action={{
              label: 'Modify Search',
              onClick: () => console.log('Modify search'),
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <EmptyState
            title="No upcoming trips"
            description="When you book a trip, it will appear here."
            icon={FolderOpen}
            size="md"
            action={{
              label: 'Explore Destinations',
              onClick: () => console.log('Explore'),
            }}
          />
        </CardContent>
      </Card>
    </div>
  ),
};

export const NewsAppExample: Story = {
  render: () => (
    <div className="space-y-4 w-[500px]">
      <Card>
        <CardContent>
          <EmptyState
            title="No saved articles"
            description="Articles you save for later will appear here."
            icon={Bookmark}
            size="md"
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <NoSearchResults size="sm" />
        </CardContent>
      </Card>
    </div>
  ),
};

export const ErrorStateExample: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardContent>
        <ErrorState
          error="Unable to load data. Please check your connection."
          onRetry={() => console.log('Retry clicked')}
          size="md"
        />
      </CardContent>
    </Card>
  ),
};

export const ComingSoonExample: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardContent>
        <ComingSoon size="md" />
      </CardContent>
    </Card>
  ),
};

export const CustomIcons: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[600px]">
      <Card>
        <CardContent>
          <EmptyState
            title="No favorites yet"
            description="Tap the heart to save your favorites."
            icon={Heart}
            size="sm"
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <EmptyState
            title="No starred items"
            description="Star items to find them quickly later."
            icon={Star}
            size="sm"
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <NoFolderItems size="sm" />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <EmptyState
            title="No videos yet"
            description="Upload your first video to get started."
            icon={PlaySquare}
            size="sm"
          />
        </CardContent>
      </Card>
    </div>
  ),
};

export const InContainer: Story = {
  render: () => (
    <div className="w-[600px] h-[400px] border border-muted rounded-lg flex items-center justify-center bg-muted/5">
      <EmptyState
        title="Select an item to view details"
        description="Click on any item from the list to see more information."
        icon={FolderOpen}
        size="lg"
      />
    </div>
  ),
};
