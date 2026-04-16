import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter } from '../Card';
import { Button } from '../Button';
import '../tailwind-output.css';

const meta: Meta<typeof Card> = {
  title: 'Portfolio/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outline'],
    },
    clickable: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: (
      <>
        <CardImage
          src="https://placehold.co/400x200/3b82f6/white?text=Music+Player"
          alt="Music Player"
        />
        <CardContent>
          <CardTitle>Music Player</CardTitle>
          <CardDescription>
            A Spotify-inspired audio streaming demo with playlists and media controls.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            View Project
          </Button>
        </CardFooter>
      </>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <CardImage src="https://placehold.co/400x200/10b981/white?text=Shop" alt="Shop" />
        <CardContent>
          <CardTitle>Shop</CardTitle>
          <CardDescription>
            E-commerce product grid with filtering and cart functionality.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            View Project
          </Button>
        </CardFooter>
      </>
    ),
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: (
      <>
        <CardContent>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>More projects are on the way. Check back later!</CardDescription>
        </CardContent>
      </>
    ),
  },
};

export const Clickable: Story = {
  args: {
    clickable: true,
    onClick: () => alert('Card clicked!'),
    children: (
      <>
        <CardImage src="https://placehold.co/400x200/f59e0b/white?text=Trade" alt="Trade" />
        <CardContent>
          <CardTitle>Trade</CardTitle>
          <CardDescription>Real-time stock ticker with WebSocket simulation.</CardDescription>
        </CardContent>
      </>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    children: (
      <>
        <CardContent>
          <CardTitle>Project Details</CardTitle>
          <CardDescription>View the source code and live demo.</CardDescription>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2">
            <Button size="sm">GitHub</Button>
            <Button size="sm" variant="outline">
              Demo
            </Button>
          </div>
        </CardFooter>
      </>
    ),
  },
};

export const ProjectCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <Card variant="elevated">
        <CardImage src="https://placehold.co/400x200/3b82f6/white?text=Music" alt="Music" />
        <CardContent>
          <CardTitle>Music Player</CardTitle>
          <CardDescription>Spotify-inspired audio streaming</CardDescription>
        </CardContent>
      </Card>
      <Card variant="elevated">
        <CardImage src="https://placehold.co/400x200/10b981/white?text=Shop" alt="Shop" />
        <CardContent>
          <CardTitle>Shop</CardTitle>
          <CardDescription>Amazon-style e-commerce</CardDescription>
        </CardContent>
      </Card>
      <Card variant="elevated">
        <CardImage src="https://placehold.co/400x200/f59e0b/white?text=Trade" alt="Trade" />
        <CardContent>
          <CardTitle>Trade</CardTitle>
          <CardDescription>Robinhood-style stock ticker</CardDescription>
        </CardContent>
      </Card>
    </div>
  ),
};
