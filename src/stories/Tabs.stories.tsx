import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Grid,
  List,
  Music,
  PlaySquare,
  ListMusic,
  Users,
  TrendingUp,
  Clock,
  Search,
  MapPin,
  CreditCard,
  CheckCircle,
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../Tabs';
import { Button } from '../Button';
import { Card, CardContent, CardTitle, CardDescription } from '../Card';
import '../../dist/index.css';

const meta: Meta<typeof Tabs> = {
  title: 'Portfolio/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['underline', 'pills', 'enclosed'],
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Underline: Story = {
  args: {
    variant: 'underline',
    defaultValue: 'songs',
    children: (
      <>
        <TabsList>
          <TabsTrigger value="songs" icon={<Music className="w-4 h-4" />}>
            All Songs
          </TabsTrigger>
          <TabsTrigger value="playlists" icon={<PlaySquare className="w-4 h-4" />}>
            Playlists
          </TabsTrigger>
          <TabsTrigger value="queue" icon={<ListMusic className="w-4 h-4" />}>
            Queue
          </TabsTrigger>
        </TabsList>
        <TabsContent value="songs">
          <p className="text-secondary">All your songs will appear here.</p>
        </TabsContent>
        <TabsContent value="playlists">
          <p className="text-secondary">Your playlists will appear here.</p>
        </TabsContent>
        <TabsContent value="queue">
          <p className="text-secondary">Your current queue will appear here.</p>
        </TabsContent>
      </>
    ),
  },
};

export const Pills: Story = {
  args: {
    variant: 'pills',
    defaultValue: 'following',
    children: (
      <>
        <TabsList>
          <TabsTrigger value="following" icon={<Users className="w-4 h-4" />}>
            Following
          </TabsTrigger>
          <TabsTrigger value="trending" icon={<TrendingUp className="w-4 h-4" />}>
            Trending
          </TabsTrigger>
          <TabsTrigger value="latest" icon={<Clock className="w-4 h-4" />}>
            Latest
          </TabsTrigger>
        </TabsList>
        <TabsContent value="following">
          <p className="text-secondary">Posts from people you follow.</p>
        </TabsContent>
        <TabsContent value="trending">
          <p className="text-secondary">Currently trending content.</p>
        </TabsContent>
        <TabsContent value="latest">
          <p className="text-secondary">Most recent posts.</p>
        </TabsContent>
      </>
    ),
  },
};

export const Enclosed: Story = {
  args: {
    variant: 'enclosed',
    defaultValue: 'search',
    children: (
      <>
        <TabsList>
          <TabsTrigger value="search" icon={<Search className="w-4 h-4" />}>
            Search
          </TabsTrigger>
          <TabsTrigger value="select" icon={<MapPin className="w-4 h-4" />}>
            Select
          </TabsTrigger>
          <TabsTrigger value="payment" icon={<CreditCard className="w-4 h-4" />}>
            Payment
          </TabsTrigger>
          <TabsTrigger value="confirm" icon={<CheckCircle className="w-4 h-4" />}>
            Confirm
          </TabsTrigger>
        </TabsList>
        <TabsContent value="search">
          <div className="border border-muted rounded-lg p-4">
            <p className="text-secondary">Search for your destination.</p>
          </div>
        </TabsContent>
        <TabsContent value="select">
          <div className="border border-muted rounded-lg p-4">
            <p className="text-secondary">Select your travel options.</p>
          </div>
        </TabsContent>
        <TabsContent value="payment">
          <div className="border border-muted rounded-lg p-4">
            <p className="text-secondary">Enter payment details.</p>
          </div>
        </TabsContent>
        <TabsContent value="confirm">
          <div className="border border-muted rounded-lg p-4">
            <p className="text-secondary">Review and confirm booking.</p>
          </div>
        </TabsContent>
      </>
    ),
  },
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="grid" variant="pills">
      <TabsList>
        <TabsTrigger value="grid" icon={<Grid className="w-4 h-4" />}>
          Grid
        </TabsTrigger>
        <TabsTrigger value="list" icon={<List className="w-4 h-4" />}>
          List
        </TabsTrigger>
      </TabsList>
    </Tabs>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <Tabs defaultValue="all" variant="underline">
      <TabsList>
        <TabsTrigger value="all" badge={24}>
          All
        </TabsTrigger>
        <TabsTrigger value="unread" badge={5}>
          Unread
        </TabsTrigger>
        <TabsTrigger value="archived" badge={12}>
          Archived
        </TabsTrigger>
      </TabsList>
    </Tabs>
  ),
};

export const FullWidth: Story = {
  args: {
    variant: 'underline',
    fullWidth: true,
    defaultValue: '1d',
    children: (
      <TabsList>
        <TabsTrigger value="1d">1D</TabsTrigger>
        <TabsTrigger value="1w">1W</TabsTrigger>
        <TabsTrigger value="1m">1M</TabsTrigger>
        <TabsTrigger value="3m">3M</TabsTrigger>
        <TabsTrigger value="1y">1Y</TabsTrigger>
        <TabsTrigger value="all">ALL</TabsTrigger>
      </TabsList>
    ),
  },
};

export const Controlled: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('songs');

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button size="sm" onClick={() => setActiveTab('songs')}>
            Songs Tab
          </Button>
          <Button size="sm" onClick={() => setActiveTab('playlists')}>
            Playlists Tab
          </Button>
          <Button size="sm" onClick={() => setActiveTab('queue')}>
            Queue Tab
          </Button>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} variant="underline">
          <TabsList>
            <TabsTrigger value="songs">All Songs</TabsTrigger>
            <TabsTrigger value="playlists">Playlists</TabsTrigger>
            <TabsTrigger value="queue">Queue</TabsTrigger>
          </TabsList>
          <TabsContent value="songs">
            <Card>
              <CardContent>
                <CardTitle>Your Songs</CardTitle>
                <CardDescription>245 songs in library</CardDescription>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="playlists">
            <Card>
              <CardContent>
                <CardTitle>Playlists</CardTitle>
                <CardDescription>8 playlists</CardDescription>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="queue">
            <Card>
              <CardContent>
                <CardTitle>Queue</CardTitle>
                <CardDescription>12 songs in queue</CardDescription>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-primary mb-2">Underline</h3>
        <Tabs defaultValue="tab1" variant="underline">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-primary mb-2">Pills</h3>
        <Tabs defaultValue="tab1" variant="pills">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-primary mb-2">Enclosed</h3>
        <Tabs defaultValue="tab1" variant="enclosed">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  ),
};
