import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SearchBar } from '../SearchBar';
import { Card, CardContent, CardTitle } from '../Card';
import '../../dist/index.css';

const meta: Meta<typeof SearchBar> = {
  title: 'Portfolio/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'filled'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    debounceMs: {
      control: { type: 'number', min: 0, max: 1000, step: 50 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

// Wrapper for controlled state
const SearchBarWrapper = ({ children, ...props }: any) => {
  const [value, setValue] = useState(props.value || '');

  return children({ value, setValue, ...props });
};

export const Default: Story = {
  render: () => (
    <SearchBarWrapper>
      {({ value, setValue }: any) => (
        <div className="w-[400px]">
          <SearchBar
            value={value}
            onChange={setValue}
            placeholder="Search music, artists, albums..."
          />
        </div>
      )}
    </SearchBarWrapper>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-[400px]">
      <div>
        <h3 className="text-sm font-medium text-primary mb-2">Default</h3>
        <SearchBarWrapper>
          {({ value, setValue }: any) => (
            <SearchBar
              value={value}
              onChange={setValue}
              variant="default"
              placeholder="Default variant..."
            />
          )}
        </SearchBarWrapper>
      </div>

      <div>
        <h3 className="text-sm font-medium text-primary mb-2">Minimal</h3>
        <SearchBarWrapper>
          {({ value, setValue }: any) => (
            <SearchBar
              value={value}
              onChange={setValue}
              variant="minimal"
              placeholder="Minimal variant..."
            />
          )}
        </SearchBarWrapper>
      </div>

      <div>
        <h3 className="text-sm font-medium text-primary mb-2">Filled</h3>
        <SearchBarWrapper>
          {({ value, setValue }: any) => (
            <SearchBar
              value={value}
              onChange={setValue}
              variant="filled"
              placeholder="Filled variant..."
            />
          )}
        </SearchBarWrapper>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-[400px]">
      <SearchBarWrapper>
        {({ value, setValue }: any) => (
          <SearchBar value={value} onChange={setValue} size="sm" placeholder="Small search..." />
        )}
      </SearchBarWrapper>

      <SearchBarWrapper>
        {({ value, setValue }: any) => (
          <SearchBar value={value} onChange={setValue} size="md" placeholder="Medium search..." />
        )}
      </SearchBarWrapper>

      <SearchBarWrapper>
        {({ value, setValue }: any) => (
          <SearchBar value={value} onChange={setValue} size="lg" placeholder="Large search..." />
        )}
      </SearchBarWrapper>
    </div>
  ),
};

export const WithSuggestions: Story = {
  render: () => {
    const suggestions = [
      'React Components',
      'TypeScript Handbook',
      'Tailwind CSS',
      'Next.js Documentation',
      'Vite Guide',
      'Storybook Tutorial',
    ];

    return (
      <SearchBarWrapper>
        {({ value, setValue }: any) => (
          <div className="w-[400px]">
            <SearchBar
              value={value}
              onChange={setValue}
              placeholder="Search technologies..."
              suggestions={suggestions.filter((s) => s.toLowerCase().includes(value.toLowerCase()))}
              onSuggestionSelect={(suggestion) => console.log('Selected:', suggestion)}
            />
          </div>
        )}
      </SearchBarWrapper>
    );
  },
};

export const MusicAppExample: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState('');
    const suggestions = [
      'Bohemian Rhapsody - Queen',
      'Stairway to Heaven - Led Zeppelin',
      'Hotel California - Eagles',
      "Sweet Child O' Mine - Guns N' Roses",
      'Smells Like Teen Spirit - Nirvana',
    ].filter((s) => s.toLowerCase().includes(searchValue.toLowerCase()));

    return (
      <Card className="w-[500px]">
        <CardContent>
          <CardTitle className="mb-4">Music Library</CardTitle>
          <SearchBar
            value={searchValue}
            onChange={setSearchValue}
            onSearch={(value) => console.log('Searching for:', value)}
            placeholder="Search tracks, artists, albums..."
            suggestions={suggestions}
            onSuggestionSelect={setSearchValue}
          />
        </CardContent>
      </Card>
    );
  },
};

export const ShopAppExample: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = async (value: string) => {
      setLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Searching products:', value);
      setLoading(false);
    };

    return (
      <Card className="w-[500px]">
        <CardContent>
          <CardTitle className="mb-4">Shop Products</CardTitle>
          <SearchBar
            value={searchValue}
            onChange={setSearchValue}
            onSearch={handleSearch}
            placeholder="Search products, categories, brands..."
            loading={loading}
            variant="filled"
          />
        </CardContent>
      </Card>
    );
  },
};

export const TradeAppExample: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState('');
    const suggestions = [
      'AAPL - Apple Inc.',
      'GOOGL - Alphabet Inc.',
      'MSFT - Microsoft Corp.',
      'AMZN - Amazon.com Inc.',
      'TSLA - Tesla Inc.',
      'BTC-USD - Bitcoin',
      'ETH-USD - Ethereum',
    ].filter((s) => s.toLowerCase().includes(searchValue.toLowerCase()));

    return (
      <Card className="w-[500px]">
        <CardContent>
          <CardTitle className="mb-4">Trade Stocks & Crypto</CardTitle>
          <SearchBar
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Search symbols..."
            suggestions={suggestions}
            onSuggestionSelect={setSearchValue}
            variant="minimal"
          />
        </CardContent>
      </Card>
    );
  },
};

export const WithoutIcons: Story = {
  render: () => (
    <SearchBarWrapper>
      {({ value, setValue }: any) => (
        <div className="w-[400px]">
          <SearchBar
            value={value}
            onChange={setValue}
            placeholder="No icons..."
            showSearchIcon={false}
            showClearButton={false}
          />
        </div>
      )}
    </SearchBarWrapper>
  ),
};

export const InstantSearch: Story = {
  render: () => (
    <SearchBarWrapper>
      {({ value, setValue }: any) => (
        <div className="w-[400px]">
          <SearchBar
            value={value}
            onChange={setValue}
            placeholder="Instant search (0ms debounce)..."
            debounceMs={0}
          />
          {value && <p className="text-sm text-secondary mt-2">Searching for: {value}</p>}
        </div>
      )}
    </SearchBarWrapper>
  ),
};
