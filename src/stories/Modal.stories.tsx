import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter } from '../Modal';
import { Button } from '../Button';
import '../../dist/index.css';

const meta: Meta<typeof Modal> = {
  title: 'Portfolio/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    showCloseButton: {
      control: 'boolean',
    },
    closeOnOverlayClick: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Wrapper component for interactive stories
const ModalWrapper = ({
  children,
  buttonText = 'Open Modal',
  ...props
}: {
  children: React.ReactNode;
  buttonText?: string;
  [key: string]: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>{buttonText}</Button>
      <Modal {...props} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => (
    <ModalWrapper title="Modal Title" description="This is a description of the modal content.">
      <ModalHeader>
        <ModalTitle>Modal Title</ModalTitle>
        <ModalDescription>This is a description of the modal content.</ModalDescription>
      </ModalHeader>
      <ModalBody>
        <p className="text-secondary">This is the main content of the modal.</p>
      </ModalBody>
      <ModalFooter>
        <Button variant="outline" onClick={() => {}}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Confirm
        </Button>
      </ModalFooter>
    </ModalWrapper>
  ),
};

export const Sizes: Story = {
  render: () => {
    const sizes = ['sm', 'md', 'lg', 'xl', 'full'] as const;

    return (
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <ModalWrapper key={size} size={size} buttonText={`Open ${size} Modal`}>
            <ModalHeader>
              <ModalTitle>{size.toUpperCase()} Modal</ModalTitle>
              <ModalDescription>Size: {size}</ModalDescription>
            </ModalHeader>
            <ModalBody>
              <p className="text-secondary">Content for {size} modal.</p>
            </ModalBody>
            <ModalFooter>
              <Button variant="outline" onClick={() => {}}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => {}}>
                OK
              </Button>
            </ModalFooter>
          </ModalWrapper>
        ))}
      </div>
    );
  },
};

export const WithForm: Story = {
  render: () => (
    <ModalWrapper title="Create Playlist" description="Enter details for your new playlist.">
      <ModalHeader>
        <ModalTitle>Create Playlist</ModalTitle>
        <ModalDescription>Enter details for your new playlist.</ModalDescription>
      </ModalHeader>
      <ModalBody>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
              Playlist Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="My Playlist"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-primary mb-1">
              Description
            </label>
            <textarea
              id="description"
              rows={3}
              className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Optional description"
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button variant="outline" onClick={() => {}}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Create
        </Button>
      </ModalFooter>
    </ModalWrapper>
  ),
};

export const Confirmation: Story = {
  render: () => (
    <ModalWrapper
      title="Delete Playlist"
      description="Are you sure you want to delete this playlist?"
    >
      <ModalHeader>
        <ModalTitle>Delete Playlist</ModalTitle>
        <ModalDescription>Are you sure you want to delete this playlist?</ModalDescription>
      </ModalHeader>
      <ModalBody>
        <p className="text-secondary">This action cannot be undone.</p>
      </ModalBody>
      <ModalFooter>
        <Button variant="outline" onClick={() => {}}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => {}} className="bg-red-600 hover:bg-red-700">
          Delete
        </Button>
      </ModalFooter>
    </ModalWrapper>
  ),
};

export const QuickView: Story = {
  render: () => (
    <ModalWrapper size="lg" buttonText="Quick View">
      <ModalBody className="p-0">
        <img
          src="https://placehold.co/600x400/344b33/white?text=Product+Image"
          alt="Product"
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <ModalTitle>Product Name</ModalTitle>
          <ModalDescription>SKU: 12345-678</ModalDescription>
          <div className="mt-4 space-y-2">
            <p className="text-primary font-semibold text-lg">$99.99</p>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt.
            </p>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button variant="outline" onClick={() => {}}>
          Add to Cart
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Buy Now
        </Button>
      </ModalFooter>
    </ModalWrapper>
  ),
};

export const SimpleContent: Story = {
  render: () => (
    <ModalWrapper showCloseButton={false}>
      <ModalBody>
        <p className="text-primary">Simple modal with just content and no header/footer.</p>
        <Button onClick={() => {}} className="mt-4 w-full">
          Close
        </Button>
      </ModalBody>
    </ModalWrapper>
  ),
};

export const AllFeatures: Story = {
  render: () => (
    <ModalWrapper
      size="lg"
      title="Feature Rich Modal"
      description="This modal demonstrates all features working together."
    >
      <ModalHeader>
        <ModalTitle>Feature Rich Modal</ModalTitle>
        <ModalDescription>This modal demonstrates all features working together.</ModalDescription>
      </ModalHeader>
      <ModalBody>
        <ul className="space-y-2 text-secondary">
          <li>✓ ESC key to close</li>
          <li>✓ Click overlay to close</li>
          <li>✓ Focus trap within modal</li>
          <li>✓ Return focus on close</li>
          <li>✓ ARIA attributes for accessibility</li>
          <li>✓ Responsive sizing</li>
          <li>✓ Smooth animations</li>
        </ul>
      </ModalBody>
      <ModalFooter>
        <Button variant="outline" onClick={() => {}}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Got it
        </Button>
      </ModalFooter>
    </ModalWrapper>
  ),
};
