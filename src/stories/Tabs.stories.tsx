import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../Tabs';
import { Button } from '../Button';
import { Card, CardContent, CardTitle, CardDescription } from '../Card';
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
import '../../dist/index.css';

const meta: Meta<typeof Tabs> = {
  title: 'Portfolio/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Underline: Story = {
  render: () => (
    <div className="w-[400px]">
      <Tabs defaultValue="songs">
        <TabsList variant="underline">
          <TabsTrigger variant="underline" value="songs" icon={<Music className="w-4 h-4" />}>
            All Songs
          </TabsTrigger>
          <TabsTrigger
            variant="underline"
            value="playlists"
            icon={<PlaySquare className="w-4 h-4" />}
          >
            Playlists
          </TabsTrigger>
          <TabsTrigger variant="underline" value="queue" icon={<ListMusic className="w-4 h-4" />}>
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
      </Tabs>
    </div>
  ),
};

export const Pills: Story = {
  render: () => (
    <div className="w-[400px]">
      <Tabs defaultValue="following">
        <TabsList variant="pills">
          <TabsTrigger variant="pills" value="following" icon={<Users className="w-4 h-4" />}>
            Following
          </TabsTrigger>
          <TabsTrigger variant="pills" value="trending" icon={<TrendingUp className="w-4 h-4" />}>
            Trending
          </TabsTrigger>
          <TabsTrigger variant="pills" value="latest" icon={<Clock className="w-4 h-4" />}>
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
      </Tabs>
    </div>
  ),
};

export const Enclosed: Story = {
  render: () => (
    <div className="w-[500px]">
      <Tabs defaultValue="search">
        <TabsList variant="enclosed">
          <TabsTrigger variant="enclosed" value="search" icon={<Search className="w-4 h-4" />}>
            Search
          </TabsTrigger>
          <TabsTrigger variant="enclosed" value="select" icon={<MapPin className="w-4 h-4" />}>
            Select
          </TabsTrigger>
          <TabsTrigger variant="enclosed" value="payment" icon={<CreditCard className="w-4 h-4" />}>
            Payment
          </TabsTrigger>
          <TabsTrigger
            variant="enclosed"
            value="confirm"
            icon={<CheckCircle className="w-4 h-4" />}
          >
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
      </Tabs>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="grid">
      <TabsList variant="pills">
        <TabsTrigger variant="pills" value="grid" icon={<Grid className="w-4 h-4" />}>
          Grid
        </TabsTrigger>
        <TabsTrigger variant="pills" value="list" icon={<List className="w-4 h-4" />}>
          List
        </TabsTrigger>
      </TabsList>
    </Tabs>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <div className="w-[400px]">
      <Tabs defaultValue="all">
        <TabsList variant="underline">
          <TabsTrigger variant="underline" value="all" badge={24}>
            All
          </TabsTrigger>
          <TabsTrigger variant="underline" value="unread" badge={5}>
            Unread
          </TabsTrigger>
          <TabsTrigger variant="underline" value="archived" badge={12}>
            Archived
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-[600px]">
      <Tabs defaultValue="1d">
        <TabsList variant="underline" fullWidth>
          <TabsTrigger variant="underline" value="1d">
            1D
          </TabsTrigger>
          <TabsTrigger variant="underline" value="1w">
            1W
          </TabsTrigger>
          <TabsTrigger variant="underline" value="1m">
            1M
          </TabsTrigger>
          <TabsTrigger variant="underline" value="3m">
            3M
          </TabsTrigger>
          <TabsTrigger variant="underline" value="1y">
            1Y
          </TabsTrigger>
          <TabsTrigger variant="underline" value="all">
            ALL
          </TabsTrigger>
        </TabsList>
        <TabsContent value="1d">
          <p className="text-secondary">1 Day chart data</p>
        </TabsContent>
        <TabsContent value="1w">
          <p className="text-secondary">1 Week chart data</p>
        </TabsContent>
        <TabsContent value="1m">
          <p className="text-secondary">1 Month chart data</p>
        </TabsContent>
        <TabsContent value="3m">
          <p className="text-secondary">3 Months chart data</p>
        </TabsContent>
        <TabsContent value="1y">
          <p className="text-secondary">1 Year chart data</p>
        </TabsContent>
        <TabsContent value="all">
          <p className="text-secondary">All time chart data</p>
        </TabsContent>
      </Tabs>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('songs');

    return (
      <div className="space-y-4 w-[400px]">
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
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList variant="underline">
            <TabsTrigger variant="underline" value="songs">
              All Songs
            </TabsTrigger>
            <TabsTrigger variant="underline" value="playlists">
              Playlists
            </TabsTrigger>
            <TabsTrigger variant="underline" value="queue">
              Queue
            </TabsTrigger>
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
    <div className="space-y-8 w-[500px]">
      <div>
        <h3 className="text-lg font-semibold text-primary mb-2">Underline</h3>
        <Tabs defaultValue="tab1">
          <TabsList variant="underline">
            <TabsTrigger variant="underline" value="tab1">
              Tab 1
            </TabsTrigger>
            <TabsTrigger variant="underline" value="tab2">
              Tab 2
            </TabsTrigger>
            <TabsTrigger variant="underline" value="tab3">
              Tab 3
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-primary mb-2">Pills</h3>
        <Tabs defaultValue="tab1">
          <TabsList variant="pills">
            <TabsTrigger variant="pills" value="tab1">
              Tab 1
            </TabsTrigger>
            <TabsTrigger variant="pills" value="tab2">
              Tab 2
            </TabsTrigger>
            <TabsTrigger variant="pills" value="tab3">
              Tab 3
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-primary mb-2">Enclosed</h3>
        <Tabs defaultValue="tab1">
          <TabsList variant="enclosed">
            <TabsTrigger variant="enclosed" value="tab1">
              Tab 1
            </TabsTrigger>
            <TabsTrigger variant="enclosed" value="tab2">
              Tab 2
            </TabsTrigger>
            <TabsTrigger variant="enclosed" value="tab3">
              Tab 3
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  ),
};
