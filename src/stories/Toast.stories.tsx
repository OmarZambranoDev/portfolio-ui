import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast } from '../Toast';
import { Button } from '../Button';
import { Card, CardContent, CardTitle, CardDescription } from '../Card';
import '../../dist/index.css';

const meta: Meta<typeof ToastProvider> = {
  title: 'Portfolio/Toast',
  component: ToastProvider,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ToastProvider>;

// Demo component that uses toast
const ToastDemo = () => {
  const { toast, dismissAll } = useToast();

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() =>
            toast({
              title: 'Default Toast',
              description: 'This is a default notification message.',
              variant: 'default',
            })
          }
        >
          Default
        </Button>

        <Button
          onClick={() =>
            toast({
              title: 'Success',
              description: 'Operation completed successfully!',
              variant: 'success',
            })
          }
        >
          Success
        </Button>

        <Button
          onClick={() =>
            toast({
              title: 'Error',
              description: 'Something went wrong. Please try again.',
              variant: 'error',
            })
          }
        >
          Error
        </Button>

        <Button
          onClick={() =>
            toast({
              title: 'Warning',
              description: 'Please review your information before continuing.',
              variant: 'warning',
            })
          }
        >
          Warning
        </Button>

        <Button
          onClick={() =>
            toast({
              title: 'Information',
              description: 'New updates are available for your app.',
              variant: 'info',
            })
          }
        >
          Info
        </Button>
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={() =>
            toast({
              title: 'With Action',
              description: 'This toast has an action button.',
              variant: 'success',
              action: {
                label: 'Undo',
                onClick: () => console.log('Undo clicked'),
              },
            })
          }
        >
          With Action
        </Button>

        <Button variant="outline" onClick={dismissAll}>
          Dismiss All
        </Button>
      </div>
    </div>
  );
};

export const Basic: Story = {
  render: () => <ToastDemo />,
};

export const MusicAppExample: Story = {
  render: () => {
    const MusicDemo = () => {
      const { toast } = useToast();

      return (
        <Card className="w-[400px]">
          <CardContent>
            <CardTitle className="mb-4">Playlist Actions</CardTitle>
            <div className="space-y-2">
              <Button
                className="w-full"
                onClick={() =>
                  toast({
                    title: 'Added to playlist',
                    description: 'Track added to "Summer Vibes"',
                    variant: 'success',
                    action: {
                      label: 'View',
                      onClick: () => console.log('View playlist'),
                    },
                  })
                }
              >
                Add Track to Playlist
              </Button>

              <Button
                className="w-full"
                variant="outline"
                onClick={() =>
                  toast({
                    title: 'Playlist created',
                    description: 'New playlist "Workout Mix" created',
                    variant: 'success',
                  })
                }
              >
                Create New Playlist
              </Button>

              <Button
                className="w-full"
                variant="outline"
                onClick={() =>
                  toast({
                    title: 'Track removed',
                    description: 'Track removed from playlist',
                    variant: 'warning',
                  })
                }
              >
                Remove Track
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    };

    return <MusicDemo />;
  },
};

export const ShopAppExample: Story = {
  render: () => {
    const ShopDemo = () => {
      const { toast } = useToast();

      return (
        <Card className="w-[400px]">
          <CardContent>
            <CardTitle className="mb-4">Shopping Cart</CardTitle>
            <div className="space-y-2">
              <Button
                className="w-full"
                onClick={() =>
                  toast({
                    title: 'Added to cart',
                    description: 'Product added to your cart',
                    variant: 'success',
                    action: {
                      label: 'View Cart',
                      onClick: () => console.log('View cart'),
                    },
                  })
                }
              >
                Add to Cart
              </Button>

              <Button
                className="w-full"
                variant="outline"
                onClick={() =>
                  toast({
                    title: 'Removed from cart',
                    description: 'Item has been removed',
                    variant: 'warning',
                    action: {
                      label: 'Undo',
                      onClick: () => console.log('Undo remove'),
                    },
                  })
                }
              >
                Remove from Cart
              </Button>

              <Button
                className="w-full"
                variant="outline"
                onClick={() =>
                  toast({
                    title: 'Item out of stock',
                    description: 'This item is currently unavailable',
                    variant: 'error',
                  })
                }
              >
                Check Availability
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    };

    return <ShopDemo />;
  },
};

export const TradeAppExample: Story = {
  render: () => {
    const TradeDemo = () => {
      const { toast } = useToast();

      return (
        <Card className="w-[400px]">
          <CardContent>
            <CardTitle className="mb-4">Trading Actions</CardTitle>
            <div className="space-y-2">
              <Button
                className="w-full"
                onClick={() =>
                  toast({
                    title: 'Order placed',
                    description: 'Buy 10 shares of AAPL at market price',
                    variant: 'success',
                  })
                }
              >
                Place Order
              </Button>

              <Button
                className="w-full"
                variant="outline"
                onClick={() =>
                  toast({
                    title: 'Trade executed',
                    description: 'Order filled at $175.43',
                    variant: 'success',
                  })
                }
              >
                Execute Trade
              </Button>

              <Button
                className="w-full"
                variant="outline"
                onClick={() =>
                  toast({
                    title: 'Added to watchlist',
                    description: 'AAPL added to your watchlist',
                    variant: 'info',
                    action: {
                      label: 'View',
                      onClick: () => console.log('View watchlist'),
                    },
                  })
                }
              >
                Add to Watchlist
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    };

    return <TradeDemo />;
  },
};

export const SocialAppExample: Story = {
  render: () => {
    const SocialDemo = () => {
      const { toast } = useToast();

      return (
        <Card className="w-[400px]">
          <CardContent>
            <CardTitle className="mb-4">Post Actions</CardTitle>
            <div className="space-y-2">
              <Button
                className="w-full"
                onClick={() =>
                  toast({
                    title: 'Comment posted',
                    description: 'Your comment has been added',
                    variant: 'success',
                  })
                }
              >
                Post Comment
              </Button>

              <Button
                className="w-full"
                variant="outline"
                onClick={() =>
                  toast({
                    title: 'Post liked',
                    description: 'You liked this post',
                    variant: 'info',
                  })
                }
              >
                Like Post
              </Button>

              <Button
                className="w-full"
                variant="outline"
                onClick={() =>
                  toast({
                    title: 'Shared successfully',
                    description: 'Post shared with your followers',
                    variant: 'success',
                  })
                }
              >
                Share Post
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    };

    return <SocialDemo />;
  },
};

export const TravelAppExample: Story = {
  render: () => {
    const TravelDemo = () => {
      const { toast } = useToast();

      return (
        <Card className="w-[400px]">
          <CardContent>
            <CardTitle className="mb-4">Booking Actions</CardTitle>
            <div className="space-y-2">
              <Button
                className="w-full"
                onClick={() =>
                  toast({
                    title: 'Booking confirmed',
                    description: 'Your reservation at Grand Hotel is confirmed',
                    variant: 'success',
                    action: {
                      label: 'View Details',
                      onClick: () => console.log('View booking'),
                    },
                  })
                }
              >
                Confirm Booking
              </Button>

              <Button
                className="w-full"
                variant="outline"
                onClick={() =>
                  toast({
                    title: 'Dates selected',
                    description: 'Check-in: Dec 20, Check-out: Dec 25',
                    variant: 'info',
                  })
                }
              >
                Select Dates
              </Button>

              <Button
                className="w-full"
                variant="outline"
                onClick={() =>
                  toast({
                    title: 'Search saved',
                    description: 'Your search criteria has been saved',
                    variant: 'success',
                  })
                }
              >
                Save Search
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    };

    return <TravelDemo />;
  },
};

export const MultipleToasts: Story = {
  render: () => {
    const MultipleDemo = () => {
      const { toast } = useToast();

      const triggerMultiple = () => {
        toast({
          title: 'First Toast',
          description: 'This is the first notification',
          variant: 'info',
        });

        setTimeout(() => {
          toast({
            title: 'Second Toast',
            description: 'This is the second notification',
            variant: 'success',
          });
        }, 100);

        setTimeout(() => {
          toast({
            title: 'Third Toast',
            description: 'This is the third notification',
            variant: 'warning',
          });
        }, 200);
      };

      return (
        <div className="space-y-4">
          <Button onClick={triggerMultiple}>Show Multiple Toasts</Button>
          <p className="text-sm text-secondary">Toasts will stack in the bottom-right corner</p>
        </div>
      );
    };

    return <MultipleDemo />;
  },
};

export const CustomDuration: Story = {
  render: () => {
    const DurationDemo = () => {
      const { toast } = useToast();

      return (
        <div className="space-y-2">
          <Button
            className="w-full"
            onClick={() =>
              toast({
                title: 'Quick Toast',
                description: 'This disappears in 1 second',
                variant: 'info',
                duration: 1000,
              })
            }
          >
            Short Duration (1s)
          </Button>

          <Button
            className="w-full"
            variant="outline"
            onClick={() =>
              toast({
                title: 'Long Toast',
                description: 'This stays for 10 seconds',
                variant: 'success',
                duration: 10000,
              })
            }
          >
            Long Duration (10s)
          </Button>
        </div>
      );
    };

    return <DurationDemo />;
  },
};
