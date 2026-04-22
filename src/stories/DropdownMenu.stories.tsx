import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '../DropdownMenu';
import { Button } from '../Button';
import { Card, CardContent, CardTitle } from '../Card';
import {
  MoreVertical,
  Plus,
  Edit,
  Copy,
  Trash,
  Share,
  Flag,
  UserPlus,
  Settings,
  LogOut,
  Music,
  PlaySquare,
  ListMusic,
  Heart,
  ChevronDown,
  Check,
  TrendingUp,
  BarChart,
  PieChart,
  Users,
  Globe,
} from 'lucide-react';
import '../../dist/index.css';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Portfolio/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Basic: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Help</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="!p-2">
          <MoreVertical className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem icon={<Edit className="w-4 h-4" />}>Edit</DropdownMenuItem>
        <DropdownMenuItem icon={<Copy className="w-4 h-4" />}>Duplicate</DropdownMenuItem>
        <DropdownMenuItem icon={<Share className="w-4 h-4" />}>Share</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={<Trash className="w-4 h-4" />} destructive>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithShortcuts: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Edit Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem icon={<Edit className="w-4 h-4" />} shortcut="⌘E">
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem icon={<Copy className="w-4 h-4" />} shortcut="⌘D">
          Duplicate
        </DropdownMenuItem>
        <DropdownMenuItem icon={<Share className="w-4 h-4" />} shortcut="⌘S">
          Share
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Danger Zone</DropdownMenuLabel>
        <DropdownMenuItem icon={<Trash className="w-4 h-4" />} shortcut="⌘⌫" destructive>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const SubMenus: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Share</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem icon={<Edit className="w-4 h-4" />}>Edit</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger icon={<Share className="w-4 h-4" />}>
            Share
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem icon={<Copy className="w-4 h-4" />}>Copy Link</DropdownMenuItem>
            <DropdownMenuItem icon={<Users className="w-4 h-4" />}>Email</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem icon={<Globe className="w-4 h-4" />}>Public</DropdownMenuItem>
            <DropdownMenuItem icon={<Users className="w-4 h-4" />}>Team Only</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={<Trash className="w-4 h-4" />} destructive>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const MusicAppExample: Story = {
  render: () => {
    const [sortBy, setSortBy] = useState('Recently Added');

    return (
      <Card className="w-[400px]">
        <CardContent>
          <div className="flex items-center justify-between">
            <CardTitle>Your Playlists</CardTitle>
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Sort: {sortBy} <ChevronDown className="ml-2 w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                  <DropdownMenuItem
                    onClick={() => setSortBy('Recently Added')}
                    icon={sortBy === 'Recently Added' ? <Check className="w-4 h-4" /> : undefined}
                  >
                    Recently Added
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setSortBy('Alphabetical')}
                    icon={sortBy === 'Alphabetical' ? <Check className="w-4 h-4" /> : undefined}
                  >
                    Alphabetical
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setSortBy('Most Played')}
                    icon={sortBy === 'Most Played' ? <Check className="w-4 h-4" /> : undefined}
                  >
                    Most Played
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-1" /> New
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem icon={<Music className="w-4 h-4" />}>
                    New Playlist
                  </DropdownMenuItem>
                  <DropdownMenuItem icon={<PlaySquare className="w-4 h-4" />}>
                    New Folder
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {['Summer Vibes', 'Workout Mix', 'Chill Lo-fi'].map((playlist, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 border border-muted/30 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <Music className="w-5 h-5 text-muted" />
                  <span className="text-primary">{playlist}</span>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="!p-1">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem icon={<Edit className="w-4 h-4" />}>Rename</DropdownMenuItem>
                    <DropdownMenuItem icon={<Copy className="w-4 h-4" />}>
                      Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuItem icon={<Share className="w-4 h-4" />}>Share</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem icon={<Trash className="w-4 h-4" />} destructive>
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const TradeAppExample: Story = {
  render: () => {
    const [timeframe, setTimeframe] = useState('1D');

    return (
      <Card className="w-[500px]">
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <CardTitle>AAPL - Apple Inc.</CardTitle>
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    {timeframe} <ChevronDown className="ml-2 w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {['1D', '1W', '1M', '3M', '1Y', 'All'].map((tf) => (
                    <DropdownMenuItem
                      key={tf}
                      onClick={() => setTimeframe(tf)}
                      icon={timeframe === tf ? <Check className="w-4 h-4" /> : undefined}
                    >
                      {tf}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <BarChart className="w-4 h-4 mr-1" /> Chart
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem icon={<TrendingUp className="w-4 h-4" />}>
                    Line Chart
                  </DropdownMenuItem>
                  <DropdownMenuItem icon={<BarChart className="w-4 h-4" />}>
                    Candlestick
                  </DropdownMenuItem>
                  <DropdownMenuItem icon={<PieChart className="w-4 h-4" />}>
                    Area Chart
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="bg-muted/10 rounded-lg p-4 mb-4">
            <div className="text-2xl font-bold text-primary">$175.43</div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-green-600">+2.34 (1.35%)</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="primary" className="flex-1">
              Buy
            </Button>
            <Button variant="outline" className="flex-1">
              Sell
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem icon={<Heart className="w-4 h-4" />}>
                  Add to Watchlist
                </DropdownMenuItem>
                <DropdownMenuItem icon={<Flag className="w-4 h-4" />}>Set Alert</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const AllFeatures: Story = {
  render: () => (
    <div className="flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Complete Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem icon={<Users className="w-4 h-4" />} shortcut="⌘P">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem icon={<Settings className="w-4 h-4" />} shortcut="⌘,">
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem icon={<Globe className="w-4 h-4" />}>Language</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger icon={<Share className="w-4 h-4" />}>
              Share
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem icon={<Copy className="w-4 h-4" />}>Copy Link</DropdownMenuItem>
              <DropdownMenuItem icon={<Users className="w-4 h-4" />}>Email</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem icon={<LogOut className="w-4 h-4" />} shortcut="⌘Q">
            Logout
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled>Disabled Item</DropdownMenuItem>
          <DropdownMenuItem icon={<Trash className="w-4 h-4" />} destructive>
            Delete Account
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
};
