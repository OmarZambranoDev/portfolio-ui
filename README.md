# @portfolio/ui

Shared UI component library for my micro-frontend portfolio project.

## Tech Stack

- TypeScript - Type-safe components
- Tailwind CSS - Utility-first styling
- Styling - class-variance-authority for variant management
- Icons - lucide-react
- Accessibility - Radix UI primitives
- Development - Storybook
- Build - tsup

## Installation

This library requires React 18 or higher as a peer dependency.

```bash
npm install react react-dom @portfolio/ui
```

## Quick Start

```tsx
import { Button } from '@portfolio/ui';
import '@portfolio/ui/dist/index.css';

function App() {
  return (
    <Button variant="primary" onClick={() => alert('Clicked!')}>
      Click Me
    </Button>
  );
}
```

## Available Components

| Component | Description | Status |
|-----------|-------------|--------|
| Button | Primary, Secondary, Outline variants with sm/md/lg sizes, loading state | ✅ |
| Card | Container with Image, Content, Title, Description, Footer sub-components | ✅ |
| Chip | Default, Primary, Secondary, Outline, Accent variants with sm/md/lg sizes | ✅ |
| Modal | Accessible dialog built on Radix Dialog with compound components | ✅ |
| Tabs | Tab navigation with underline, pills, enclosed variants, icons and badges | ✅ |
| SearchBar | Search input with debouncing, suggestions, loading, multiple variants | ✅ |
| DropdownMenu | Contextual menu with items, submenus, shortcuts, destructive actions | ✅ |
| Toast | Notification system with success/error/warning/info variants, provider pattern | ✅ |
| Skeleton | Loading placeholders with pre-built patterns for common layouts | ✅ |
| EmptyState | Zero-data states with customizable icons, descriptions, and actions | ✅ |
| Tooltip | Hover tooltip with default/secondary/light/dark variants, instant display | ✅ |

---

## API Reference

### Button

Primary action component with multiple variants, sizes, and loading state.

**Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' \| 'outline' | 'primary' | Visual style variant |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Component size |
| disabled | boolean | false | Disables the button |
| loading | boolean | false | Shows loading spinner |
| children | ReactNode | - | Button content |
| className | string | - | Additional CSS classes |

**Examples**

```tsx
// Basic usage
<Button variant="primary" size="md" onClick={() => console.log('clicked')}>
  Click Me
</Button>

// Loading state
<Button loading>Saving...</Button>

// Outline variant
<Button variant="outline" size="sm">Cancel</Button>

// With icon
<Button variant="primary">
  <Plus className="w-4 h-4" />
  Add Item
</Button>
```

---

### Card

Container component with compound sub-components for flexible layouts.

**Main Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'default' \| 'elevated' \| 'outline' | 'default' | Visual style variant |
| clickable | boolean | false | Adds cursor pointer and hover effects |
| children | ReactNode | - | Card content |
| className | string | - | Additional CSS classes |

**Sub-Components**

- `CardImage` - Image container (props: src, alt, className)
- `CardContent` - Content wrapper (props: children, className)
- `CardTitle` - Card heading (props: children, className)
- `CardDescription` - Descriptive text (props: children, className)
- `CardFooter` - Footer section with muted background (props: children, className)

**Examples**

```tsx
// Basic card with all sub-components
<Card variant="elevated">
  <CardImage src="/project-image.jpg" alt="Project screenshot" />
  <CardContent>
    <CardTitle>Music Player</CardTitle>
    <CardDescription>
      A Spotify-inspired audio streaming demo with playlists and media controls.
    </CardDescription>
  </CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">View Project</Button>
  </CardFooter>
</Card>

// Clickable card
<Card clickable onClick={() => console.log('card clicked')}>
  <CardContent>
    <CardTitle>Clickable Card</CardTitle>
    <CardDescription>This card responds to clicks</CardDescription>
  </CardContent>
</Card>
```

---

### Chip

Compact element for tags, filters, and labels.

**Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'default' \| 'primary' \| 'secondary' \| 'outline' \| 'accent' | 'default' | Visual style variant |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Component size |
| clickable | boolean | false | Adds cursor pointer and hover effects |
| disabled | boolean | false | Disables the chip |
| children | ReactNode | - | Chip content |
| className | string | - | Additional CSS classes |

**Examples**

```tsx
// Variants
<Chip variant="default">React</Chip>
<Chip variant="primary">TypeScript</Chip>
<Chip variant="secondary">CSS</Chip>
<Chip variant="outline">Next.js</Chip>
<Chip variant="accent">Micro-Frontends</Chip>

// Clickable chip
<Chip clickable onClick={() => console.log('clicked')}>
  Click me
</Chip>

// Sizes
<Chip size="sm">Small</Chip>
<Chip size="md">Medium</Chip>
<Chip size="lg">Large</Chip>
```

---

### Modal

Accessible dialog component built on Radix Dialog with compound components.

**Main Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controlled open state |
| onOpenChange | (open: boolean) => void | - | Open state change handler |
| children | ReactNode | - | Modal content |

**ModalContent Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full' | 'md' | Modal width |
| children | ReactNode | - | Modal content |
| className | string | - | Additional CSS classes |

**Sub-Components**

- `ModalTrigger` - Element that opens the modal
- `ModalContent` - Modal container with overlay
- `ModalHeader` - Header section with border
- `ModalTitle` - Modal heading
- `ModalDescription` - Descriptive text
- `ModalBody` - Main content area
- `ModalFooter` - Footer section for actions
- `ModalClose` - Button that closes the modal

**Convenience Component: ModalDialog**

Combines common modal structure into a single component with trigger, title, description, and children.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| trigger | ReactNode | - | Trigger element |
| title | string | - | Modal title |
| description | string | - | Modal description |
| size | 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full' | 'md' | Modal width |
| showCloseButton | boolean | true | Show X close button |
| children | ReactNode | - | Modal body content |

**Examples**

```tsx
// Basic modal with trigger
<Modal>
  <ModalTrigger asChild>
    <Button>Open Modal</Button>
  </ModalTrigger>
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Modal Title</ModalTitle>
      <ModalDescription>Optional description text</ModalDescription>
    </ModalHeader>
    <ModalBody>
      <p>Modal content goes here</p>
    </ModalBody>
    <ModalFooter>
      <ModalClose asChild>
        <Button variant="outline">Cancel</Button>
      </ModalClose>
      <Button variant="primary">Confirm</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
```

```tsx
// Convenient ModalDialog wrapper
<ModalDialog
  trigger={<Button>Simple Dialog</Button>}
  title="Simple Dialog"
  description="This uses the ModalDialog convenience wrapper."
>
  <ModalBody>
    <p>Content goes here</p>
  </ModalBody>
  <ModalFooter>
    <ModalClose asChild>
      <Button variant="outline">Close</Button>
    </ModalClose>
    <Button variant="primary">Save</Button>
  </ModalFooter>
</ModalDialog>
```

```tsx
// Confirmation dialog
<ModalDialog
  trigger={<Button variant="outline">Delete Playlist</Button>}
  title="Delete Playlist"
  description="Are you sure you want to delete this playlist?"
>
  <ModalBody>
    <p>This action cannot be undone.</p>
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
```

---

### Tabs

Tab navigation component built on Radix Tabs with three visual variants.

**Main Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | string | - | Default active tab value |
| value | string | - | Controlled active tab value |
| onValueChange | (value: string) => void | - | Value change handler |
| children | ReactNode | - | Tabs content |

**TabsList Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'underline' \| 'pills' \| 'enclosed' | 'underline' | Visual variant |
| fullWidth | boolean | false | Stretch tabs to fill width |

**TabsTrigger Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Tab value to activate |
| variant | 'underline' \| 'pills' \| 'enclosed' | 'underline' | Must match TabsList variant |
| icon | ReactNode | - | Icon element (use Lucide icons) |
| badge | number \| string | - | Badge count or text |
| disabled | boolean | false | Disables the tab |

**Examples**

```tsx
// Underline variant with icons
<Tabs defaultValue="songs">
  <TabsList variant="underline">
    <TabsTrigger variant="underline" value="songs" icon={<Music className="w-4 h-4" />}>
      All Songs
    </TabsTrigger>
    <TabsTrigger variant="underline" value="playlists" icon={<PlaySquare className="w-4 h-4" />}>
      Playlists
    </TabsTrigger>
  </TabsList>
  <TabsContent value="songs">
    <p>All your songs will appear here.</p>
  </TabsContent>
  <TabsContent value="playlists">
    <p>Your playlists will appear here.</p>
  </TabsContent>
</Tabs>
```

```tsx
// Pills variant
<Tabs defaultValue="following">
  <TabsList variant="pills">
    <TabsTrigger variant="pills" value="following">Following</TabsTrigger>
    <TabsTrigger variant="pills" value="trending">Trending</TabsTrigger>
    <TabsTrigger variant="pills" value="latest">Latest</TabsTrigger>
  </TabsList>
  <TabsContent value="following">
    <p>Posts from people you follow.</p>
  </TabsContent>
</Tabs>

// With badges
<Tabs defaultValue="all">
  <TabsList variant="underline">
    <TabsTrigger variant="underline" value="all" badge={24}>All</TabsTrigger>
    <TabsTrigger variant="underline" value="unread" badge={5}>Unread</TabsTrigger>
  </TabsList>
</Tabs>
```

```tsx
// Controlled tabs
const [activeTab, setActiveTab] = useState('songs');

<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList variant="underline">
    <TabsTrigger variant="underline" value="songs">Songs</TabsTrigger>
    <TabsTrigger variant="underline" value="playlists">Playlists</TabsTrigger>
  </TabsList>
</Tabs>
```

---

### SearchBar

Search input with debouncing, suggestions, and loading state.

**Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Controlled input value |
| onChange | (value: string) => void | - | Value change handler (debounced) |
| onSearch | (value: string) => void | - | Called on Enter or after debounce |
| placeholder | string | 'Search...' | Placeholder text |
| debounceMs | number | 300 | Debounce delay in ms |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Input size |
| variant | 'default' \| 'minimal' \| 'filled' | 'default' | Visual variant |
| showSearchIcon | boolean | true | Show search icon |
| showClearButton | boolean | true | Show clear button |
| loading | boolean | false | Show loading spinner |
| suggestions | string[] | [] | Suggestions to display |
| onSuggestionSelect | (suggestion: string) => void | - | Suggestion click handler |
| className | string | - | Additional CSS classes |

**Examples**

```tsx
// Basic search
const [search, setSearch] = useState('');

<SearchBar
  value={search}
  onChange={setSearch}
  placeholder="Search music, artists, albums..."
/>

// With search handler and variant
<SearchBar
  value={search}
  onChange={setSearch}
  onSearch={(value) => console.log('Searching:', value)}
  variant="filled"
  placeholder="Search products..."
/>
```

```tsx
// With suggestions
const [query, setQuery] = useState('');
const suggestions = ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
  .filter(s => s.toLowerCase().includes(query.toLowerCase()));

<SearchBar
  value={query}
  onChange={setQuery}
  suggestions={suggestions}
  onSuggestionSelect={(suggestion) => setQuery(suggestion)}
/>

// With loading state
<SearchBar
  value={query}
  onChange={setQuery}
  loading={isSearching}
  debounceMs={500}
/>
```

---

### DropdownMenu

Contextual menu built on Radix Dropdown Menu with full keyboard navigation.

**Sub-Components**

- `DropdownMenu` - Root component
- `DropdownMenuTrigger` - Trigger element
- `DropdownMenuContent` - Menu container
- `DropdownMenuItem` - Menu item
- `DropdownMenuLabel` - Section label
- `DropdownMenuSeparator` - Visual separator
- `DropdownMenuSub` - Sub-menu root
- `DropdownMenuSubTrigger` - Sub-menu trigger
- `DropdownMenuSubContent` - Sub-menu content

**DropdownMenuContent Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | 'start' \| 'center' \| 'end' | 'center' | Horizontal alignment |
| side | 'top' \| 'right' \| 'bottom' \| 'left' | 'bottom' | Open direction |

**DropdownMenuItem Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | ReactNode | - | Leading icon (use Lucide icons) |
| shortcut | string | - | Keyboard shortcut text |
| destructive | boolean | false | Destructive action styling |
| disabled | boolean | false | Disables the item |
| onClick | () => void | - | Click handler |

**Examples**

```tsx
// Basic dropdown
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

```tsx
// With icons and shortcuts
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      <MoreVertical className="w-4 h-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuItem icon={<Edit className="w-4 h-4" />} shortcut="⌘E">
      Edit
    </DropdownMenuItem>
    <DropdownMenuItem icon={<Copy className="w-4 h-4" />} shortcut="⌘D">
      Duplicate
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem icon={<Trash className="w-4 h-4" />} destructive>
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

```tsx
// With submenu
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
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>
```

---

### Toast

Notification system built on Radix Toast with provider pattern.

**Provider Setup**

```tsx
// Wrap your app with ToastProvider
import { ToastProvider } from '@portfolio/ui';

function App() {
  return (
    <ToastProvider>
      <YourAppContent />
    </ToastProvider>
  );
}
```

**useToast Hook**

```tsx
// Use the useToast hook in any component
import { useToast } from '@portfolio/ui';

function YourComponent() {
  const { toast } = useToast();
  
  const handleClick = () => {
    toast({
      title: 'Success!',
      description: 'Your action was completed.',
      variant: 'success',
    });
  };
  
  return <button onClick={handleClick}>Trigger Toast</button>;
}
```

**Toast Options**

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| title | string | - | Toast title |
| description | string | - | Toast description |
| variant | 'default' \| 'success' \| 'error' \| 'warning' \| 'info' | 'default' | Visual variant |
| duration | number | 5000 | Auto-dismiss time in ms |
| action | { label: string; onClick: () => void } | - | Action button |

**Examples**

```tsx
// Success toast
toast({
  title: 'Added to playlist',
  description: 'Track added to "Summer Vibes"',
  variant: 'success',
});

// Error toast
toast({
  title: 'Error',
  description: 'Something went wrong. Please try again.',
  variant: 'error',
});

// Warning toast
toast({
  title: 'Warning',
  description: 'Please review your information.',
  variant: 'warning',
});

// Info toast
toast({
  title: 'Information',
  description: 'New updates are available.',
  variant: 'info',
});
```

```tsx
// Error toast
toast({
  title: 'Error',
  description: 'Something went wrong. Please try again.',
  variant: 'error',
});

// Warning toast
toast({
  title: 'Warning',
  description: 'Please review your information before continuing.',
  variant: 'warning',
});

// Info toast
toast({
  title: 'Information',
  description: 'New updates are available for your app.',
  variant: 'info',
});

// Default toast
toast({
  title: 'Default Toast',
  description: 'This is a default notification message.',
});
```

```tsx
// Toast with action button
toast({
  title: 'Added to cart',
  description: 'Product added to your cart',
  variant: 'success',
  action: {
    label: 'View Cart',
    onClick: () => navigateToCart(),
  },
});

// Custom duration (in milliseconds)
toast({
  title: 'Quick toast',
  description: 'This disappears in 2 seconds',
  duration: 2000,
});
```

---

### Skeleton

Loading placeholder components with multiple pre-built patterns.

**Base Skeleton Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'text' \| 'circular' \| 'rectangular' \| 'rounded' | 'text' | Shape variant |
| animation | 'pulse' \| 'wave' \| 'none' | 'pulse' | Animation style |
| width | string \| number | - | Element width |
| height | string \| number | - | Element height |

**Pre-Built Skeletons**

- `SkeletonText` - Multiple text lines (props: lines, spacing, lastLineWidth)
- `SkeletonAvatar` - Circular avatar (props: size 'sm' \| 'md' \| 'lg' \| 'xl')
- `SkeletonCard` - Content card (props: hasImage, hasFooter)
- `SkeletonTable` - Data table (props: rows, columns, hasHeader)
- `SkeletonList` - List items with avatars (props: items, hasAvatar, hasThumbnail)
- `SkeletonGrid` - Grid of cards (props: items, columns 2-6, hasImage)
- `SkeletonChart` - Chart placeholder (props: type 'line' \| 'bar' \| 'area')
- `SkeletonForm` - Form fields (props: fields)

**Examples**

```tsx
// Basic skeletons
<Skeleton variant="text" className="h-4 w-full" />
<Skeleton variant="circular" className="w-10 h-10" />
<Skeleton variant="rectangular" className="w-full h-40" />
<Skeleton variant="rounded" className="w-full h-20" />

// Text lines
<SkeletonText lines={3} />
<SkeletonText lines={5} spacing="sm" lastLineWidth="50%" />

// Avatar sizes
<SkeletonAvatar size="sm" />
<SkeletonAvatar size="md" />
<SkeletonAvatar size="lg" />
```

```tsx
// Product card skeleton
<SkeletonCard />

// Card without image
<SkeletonCard hasImage={false} />

// Grid of cards
<SkeletonGrid items={6} columns={3} />
```

```tsx
// List with avatars
<SkeletonList items={5} />

// List with thumbnails, no avatars
<SkeletonList items={4} hasAvatar={false} hasThumbnail={true} />

// Table skeleton
<SkeletonTable rows={5} columns={4} />

// Form skeleton
<SkeletonForm fields={4} />

// Chart skeleton
<SkeletonChart type="line" />
```

---

### EmptyState

Zero-data state component with pre-built variants for common scenarios.

**Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | - | Main heading |
| description | string | - | Supporting text |
| icon | LucideIcon | - | Icon component (use Lucide icons) |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Component size |
| action | { label: string; onClick: () => void } | - | Action button |
| className | string | - | Additional CSS classes |

**Pre-Built Variants**

- `NoSearchResults` - No results found state
- `NoItems` - Generic empty items (props: itemType)
- `EmptyCart` - Empty shopping cart
- `NoNotifications` - No notifications state
- `NoMessages` - No messages state
- `NoData` - No data available state
- `ErrorState` - Error with retry (props: error, onRetry)
- `ComingSoon` - Feature coming soon
- `NoFolderItems` - Empty folder

**Examples**

```tsx
// Basic empty state with action
<EmptyState
  title="No items found"
  description="There are no items to display at this time."
  icon={Package}
  size="md"
  action={{
    label: 'Create Item',
    onClick: () => console.log('Create clicked'),
  }}
/>
```

```tsx
// Pre-built empty states
<NoSearchResults />
<NoItems itemType="playlists" />
<EmptyCart />
<NoNotifications />
<NoMessages />
<NoData />
<NoFolderItems />

// With actions
<NoItems 
  itemType="playlists"
  action={{
    label: 'Create Playlist',
    onClick: () => console.log('Create'),
  }}
/>
```

```tsx
// Custom icon with color
<EmptyState
  title="No favorites yet"
  description="Tap the heart to save your favorites."
  icon={Heart}
  size="sm"
/>

// Error state with retry
<ErrorState
  error="Unable to load data. Please check your connection."
  onRetry={() => refetch()}
/>

// Coming soon
<ComingSoon size="md" />
```

---

### Tooltip

Hover-activated tooltip built on Radix Tooltip with multiple variants and instant display.

**Setup**

```tsx
// Wrap your app with TooltipProvider (do this once at the root)
import { TooltipProvider } from '@portfolio/ui';

function App() {
  return (
    <TooltipProvider>
      <YourAppContent />
    </TooltipProvider>
  );
}
```

**Content Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'default' \| 'secondary' \| 'light' \| 'dark' | 'default' | Visual style variant |
| side | 'top' \| 'right' \| 'bottom' \| 'left' | 'bottom' | Open direction |
| sideOffset | number | 4 | Distance from trigger |
| children | ReactNode | - | Tooltip content |
| className | string | - | Additional CSS classes |

**Examples**

```tsx
// Basic tooltip
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>This is a tooltip</p>
  </TooltipContent>
</Tooltip>
```

```tsx
// Available variants
<Tooltip>
  <TooltipTrigger asChild>
    <span>Default</span>
  </TooltipTrigger>
  <TooltipContent variant="default">
    <p>Default tooltip</p>
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <span>Light</span>
  </TooltipTrigger>
  <TooltipContent variant="light">
    <p>Light tooltip with border</p>
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <span>Dark</span>
  </TooltipTrigger>
  <TooltipContent variant="dark">
    <p>Dark tooltip</p>
  </TooltipContent>
</Tooltip>
```

```tsx
// Icon-only button with tooltip
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
```

```tsx
// Rich content with title, description, and shortcut
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
```

```tsx
// Tooltip on disabled button (wrap with span)
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
```

---

## Design Tokens

### Earth Theme Colors

The library uses semantic color tokens mapped to an earth-inspired palette.

| Token | Hex | Usage |
|-------|-----|-------|
| primary | #344b33 | Primary actions, active states |
| primary-hover | #4a5d3e | Primary hover states |
| secondary | #7f886e | Secondary text, icons |
| secondary-hover | #6b7359 | Secondary hover states |
| accent | #b78d6a | Accent elements |
| accent-hover | #a07d5c | Accent hover states |
| muted | #c5ae96 | Borders, backgrounds |
| muted-hover | #d4bfa8 | Muted hover states |

Opacity variants are available using Tailwind's opacity modifier syntax:
- `bg-muted/10` - 10% opacity muted background
- `bg-muted/20` - 20% opacity muted background
- `border-primary/30` - 30% opacity primary border

### Variants

Components use class-variance-authority (CVA) for consistent variant management. Common patterns:
- `variant` - Visual style (primary, secondary, outline, etc.)
- `size` - Component size (sm, md, lg)
- `disabled` - Disabled state
- `className` - Always accepted for style overrides

## Accessibility

All components are built with accessibility in mind:
- Radix UI primitives provide WAI-ARIA compliance
- Keyboard navigation support
- Focus management
- Screen reader support via roles and labels
- Reduced motion support via CSS prefers-reduced-motion

## Development

```bash
npm install
npm run build
npm run dev
npm run storybook
```

## Local Publishing (Verdaccio)

```bash
# Start Verdaccio (in separate terminal)
verdaccio

# Build and publish
npm run build
npm version patch
npm publish --registry http://localhost:4873

# Install in consuming apps
npm install @portfolio/ui@latest --registry http://localhost:4873
```

## License

MIT