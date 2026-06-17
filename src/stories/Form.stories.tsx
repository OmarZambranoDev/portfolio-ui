import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../Input';
import { Label } from '../Label';
import { Textarea } from '../Textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../Select';
import { Checkbox } from '../Checkbox';
import { RadioGroup, RadioGroupItem } from '../RadioGroup';
import { Button } from '../Button';
import { Search } from 'lucide-react';
import '../../dist/index.css';

const meta: Meta<typeof Input> = {
  title: 'Portfolio/Form',
  component: Input,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  render: () => (
    <div className="w-[400px] space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="name@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Enter your password" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="search">Search</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-moss" />
          <Input id="search" className="pl-10" placeholder="Search..." />
        </div>
      </div>
    </div>
  ),
};

export const InputVariants: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <Label>Default</Label>
        <Input placeholder="Default variant" />
      </div>
      <div className="space-y-2">
        <Label>Filled</Label>
        <Input variant="filled" placeholder="Filled variant" />
      </div>
      <div className="space-y-2">
        <Label>Minimal</Label>
        <Input variant="minimal" placeholder="Minimal variant" />
      </div>
    </div>
  ),
};

export const InputError: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <Label htmlFor="error-input">Email</Label>
        <Input id="error-input" error placeholder="name@example.com" />
        <p className="text-xs text-danger">Please enter a valid email address.</p>
      </div>
    </div>
  ),
};

export const TextareaExample: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea id="bio" placeholder="Tell us about yourself..." rows={4} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="error-textarea">Description</Label>
        <Textarea id="error-textarea" error placeholder="Required field" />
        <p className="text-xs text-danger">This field is required.</p>
      </div>
    </div>
  ),
};

export const SelectExample: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <Label>Country</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="au">Australia</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Currency (Error)</Label>
        <Select>
          <SelectTrigger error>
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="usd">USD</SelectItem>
            <SelectItem value="eur">EUR</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
};

export const CheckboxExample: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">I accept the terms and conditions</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="newsletter" defaultChecked />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </div>
    </div>
  ),
};

export const RadioGroupExample: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <Label>Notification preference</Label>
      <RadioGroup defaultValue="all" className="space-y-2">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="all" id="all" />
          <Label htmlFor="all">All notifications</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="mentions" id="mentions" />
          <Label htmlFor="mentions">Mentions only</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="none" id="none" />
          <Label htmlFor="none">None</Label>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="w-[400px] space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="John Doe" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="form-email">Email</Label>
        <Input id="form-email" type="email" placeholder="john@example.com" />
      </div>
      <div className="space-y-2">
        <Label>Role</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="editor">Editor</SelectItem>
            <SelectItem value="viewer">Viewer</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Your message..." />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree">I agree to the terms</Label>
      </div>
      <Button className="w-full">Submit</Button>
    </div>
  ),
};
