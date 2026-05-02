import type { Meta, StoryObj } from '@storybook/react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '../Tooltip';
import { Button } from '../Button';
import { Card, CardContent, CardTitle } from '../Card';
import { Info, HelpCircle, Settings, Bell, Plus, Heart } from 'lucide-react';
import '../../dist/index.css';

const meta: Meta<typeof Tooltip> = {
  title: 'Portfolio/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            Default
          </Button>
        </TooltipTrigger>
        <TooltipContent variant="default">
          <p>Default tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            Secondary
          </Button>
        </TooltipTrigger>
        <TooltipContent variant="secondary">
          <p>Secondary tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            Light
          </Button>
        </TooltipTrigger>
        <TooltipContent variant="light">
          <p>Light tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            Dark
          </Button>
        </TooltipTrigger>
        <TooltipContent variant="dark">
          <p>Dark tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm" className="!p-2">
            <Settings className="w-4 h-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Settings</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm" className="!p-2">
            <Bell className="w-4 h-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Notifications</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm" className="!p-2">
            <Info className="w-4 h-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent variant="light">
          <div className="flex items-center gap-2">
            <Info className="w-3 h-3" />
            <span>More information</span>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const RichContent: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="sm">
            <Plus className="w-4 h-4" />
            New
          </Button>
        </TooltipTrigger>
        <TooltipContent variant="light" className="w-48">
          <div className="space-y-2">
            <p className="font-semibold">Create New</p>
            <p className="text-xs text-muted">Create a new playlist, folder, or import music.</p>
            <div className="flex gap-1 text-xs text-muted">
              <kbd className="px-1 py-0.5 bg-muted/20 rounded">⌘</kbd>
              <span>+</span>
              <kbd className="px-1 py-0.5 bg-muted/20 rounded">N</kbd>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="flex items-center justify-center p-12">
      <div className="grid grid-cols-3 gap-4">
        <div />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Top tooltip</p>
          </TooltipContent>
        </Tooltip>
        <div />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Left tooltip</p>
          </TooltipContent>
        </Tooltip>

        <div />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Right tooltip</p>
          </TooltipContent>
        </Tooltip>

        <div />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Bottom tooltip</p>
          </TooltipContent>
        </Tooltip>
        <div />
      </div>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <CardTitle>Project Details</CardTitle>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" className="!p-1">
                <HelpCircle className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent variant="light">
              <p>View more information about this project</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-secondary">Status</span>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="text-primary cursor-help border-b border-dashed border-primary/40">
                  Active
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>This project is currently active and receiving updates.</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const DisabledButton: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <span>
          <Button disabled className="pointer-events-none">
            Disabled
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>Complete the form to enable this button</p>
      </TooltipContent>
    </Tooltip>
  ),
};
