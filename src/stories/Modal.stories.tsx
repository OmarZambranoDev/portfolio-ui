import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
  ModalClose,
  ModalDialog,
} from '../Modal';
import { Button } from '../Button';
import '../../dist/index.css';

const meta: Meta<typeof Modal> = {
  title: 'Portfolio/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalDescription>This is a description of the modal content.</ModalDescription>
        </ModalHeader>
        <ModalBody>
          <p className="text-secondary">This is the main content of the modal.</p>
        </ModalBody>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="outline">Cancel</Button>
          </ModalClose>
          <Button variant="primary">Confirm</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
};

export const SimpleDialog: Story = {
  render: () => (
    <ModalDialog
      trigger={<Button>Simple Dialog</Button>}
      title="Simple Dialog"
      description="This uses the convenient ModalDialog wrapper."
    >
      <ModalBody>
        <p className="text-secondary">Content goes here.</p>
      </ModalBody>
      <ModalFooter>
        <ModalClose asChild>
          <Button variant="outline">Close</Button>
        </ModalClose>
        <Button variant="primary">Save</Button>
      </ModalFooter>
    </ModalDialog>
  ),
};

export const Sizes: Story = {
  render: () => {
    const sizes = ['sm', 'md', 'lg', 'xl', 'full'] as const;

    return (
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <Modal key={size}>
            <ModalTrigger asChild>
              <Button variant="outline">Open {size} Modal</Button>
            </ModalTrigger>
            <ModalContent size={size}>
              <ModalHeader>
                <ModalTitle>{size.toUpperCase()} Modal</ModalTitle>
                <ModalDescription>Size: {size}</ModalDescription>
              </ModalHeader>
              <ModalBody>
                <p className="text-secondary">Content for {size} modal.</p>
              </ModalBody>
              <ModalFooter>
                <ModalClose asChild>
                  <Button variant="outline">Cancel</Button>
                </ModalClose>
                <Button variant="primary">OK</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        ))}
      </div>
    );
  },
};

export const WithForm: Story = {
  render: () => (
    <ModalDialog
      trigger={<Button>Create Playlist</Button>}
      title="Create Playlist"
      description="Enter details for your new playlist."
    >
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
        <ModalClose asChild>
          <Button variant="outline">Cancel</Button>
        </ModalClose>
        <Button variant="primary">Create</Button>
      </ModalFooter>
    </ModalDialog>
  ),
};

export const Confirmation: Story = {
  render: () => (
    <ModalDialog
      trigger={<Button variant="outline">Delete Playlist</Button>}
      title="Delete Playlist"
      description="Are you sure you want to delete this playlist?"
    >
      <ModalBody>
        <p className="text-secondary">This action cannot be undone.</p>
      </ModalBody>
      <ModalFooter>
        <ModalClose asChild>
          <Button variant="outline">Cancel</Button>
        </ModalClose>
        <Button variant="primary" className="bg-red-600 hover:bg-red-700">
          Delete
        </Button>
      </ModalFooter>
    </ModalDialog>
  ),
};

export const QuickView: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Quick View</Button>
      </ModalTrigger>
      <ModalContent size="lg" className="p-0">
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
          <ModalClose asChild>
            <Button variant="outline">Add to Cart</Button>
          </ModalClose>
          <Button variant="primary">Buy Now</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
};

export const ControlledModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Controlled Modal</Button>
        <Modal open={open} onOpenChange={setOpen}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Controlled Modal</ModalTitle>
              <ModalDescription>This modal is controlled by React state.</ModalDescription>
            </ModalHeader>
            <ModalBody>
              <p className="text-secondary">The parent component controls the open state.</p>
            </ModalBody>
            <ModalFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  },
};

export const WithoutCloseButton: Story = {
  render: () => (
    <ModalDialog
      trigger={<Button>No Close Button</Button>}
      title="Custom Close"
      description="This modal doesn't have the default X button."
      showCloseButton={false}
    >
      <ModalBody>
        <p className="text-secondary">You can only close this with the footer buttons.</p>
      </ModalBody>
      <ModalFooter>
        <ModalClose asChild>
          <Button variant="primary">Got it</Button>
        </ModalClose>
      </ModalFooter>
    </ModalDialog>
  ),
};

export const NestedModals: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Open First Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>First Modal</ModalTitle>
          <ModalDescription>Open another modal from here.</ModalDescription>
        </ModalHeader>
        <ModalBody>
          <Modal>
            <ModalTrigger asChild>
              <Button variant="outline">Open Second Modal</Button>
            </ModalTrigger>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>Second Modal</ModalTitle>
                <ModalDescription>This is a nested modal.</ModalDescription>
              </ModalHeader>
              <ModalBody>
                <p className="text-secondary">Nested modals work perfectly!</p>
              </ModalBody>
              <ModalFooter>
                <ModalClose asChild>
                  <Button variant="primary">Close</Button>
                </ModalClose>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </ModalBody>
      </ModalContent>
    </Modal>
  ),
};
