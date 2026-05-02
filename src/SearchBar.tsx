'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Search, X, Loader2 } from 'lucide-react';
import { cn } from './lib/utils';
import { Button } from './Button';

const searchBarWrapper = cva('relative w-full', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const searchBarInput = cva(
  'w-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: cn(
          'border border-muted rounded-lg bg-white',
          'focus:border-primary',
          'placeholder:text-muted'
        ),
        minimal: cn(
          'border-0 border-b border-muted rounded-none bg-transparent',
          'focus:border-b-primary',
          'placeholder:text-muted'
        ),
        filled: cn(
          'border border-transparent rounded-lg bg-muted/10',
          'focus:bg-white focus:border-primary',
          'placeholder:text-muted'
        ),
      },
      size: {
        sm: 'px-3 py-1.5',
        md: 'px-4 py-2',
        lg: 'px-5 py-2.5',
      },
      hasSearchIcon: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        size: 'sm',
        hasSearchIcon: true,
        className: 'pl-9',
      },
      {
        size: 'md',
        hasSearchIcon: true,
        className: 'pl-10',
      },
      {
        size: 'lg',
        hasSearchIcon: true,
        className: 'pl-11',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
      hasSearchIcon: false,
    },
  }
);

export interface SearchBarProps extends VariantProps<typeof searchBarInput> {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  debounceMs?: number;
  showSearchIcon?: boolean;
  showClearButton?: boolean;
  loading?: boolean;
  suggestions?: string[];
  onSuggestionSelect?: (suggestion: string) => void;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  id,
  value,
  onChange,
  onSearch,
  placeholder = 'Search...',
  debounceMs = 300,
  size = 'md',
  variant = 'default',
  showSearchIcon = true,
  showClearButton = true,
  loading = false,
  suggestions = [],
  onSuggestionSelect,
  className,
}) => {
  const [localValue, setLocalValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (localValue !== value) {
      debounceTimerRef.current = setTimeout(() => {
        onChange(localValue);
        if (onSearch && localValue.trim()) {
          onSearch(localValue);
        }
      }, debounceMs);
    }

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [localValue, value, onChange, onSearch, debounceMs]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
    setShowSuggestions(true);
  };

  const handleClear = () => {
    setLocalValue('');
    onChange('');
    inputRef.current?.focus();
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(localValue);
      setShowSuggestions(false);
    }
    if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setLocalValue(suggestion);
    onChange(suggestion);
    onSuggestionSelect?.(suggestion);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  const getIconPositionClass = () => {
    switch (size) {
      case 'sm':
        return 'left-3';
      case 'lg':
        return 'left-4';
      default:
        return 'left-3.5';
    }
  };

  const getClearButtonPositionClass = () => {
    switch (size) {
      case 'sm':
        return 'right-2';
      case 'lg':
        return 'right-3';
      default:
        return 'right-2.5';
    }
  };

  return (
    <div ref={wrapperRef} className={cn(searchBarWrapper({ size }), className)}>
      <div className="relative">
        {showSearchIcon && (
          <div className={cn('absolute top-1/2 -translate-y-1/2', getIconPositionClass())}>
            <Search className="w-4 h-4 text-muted" />
          </div>
        )}

        <input
          ref={inputRef}
          id={id}
          type="text"
          value={localValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={loading}
          className={cn(
            searchBarInput({
              variant,
              size,
              hasSearchIcon: showSearchIcon,
            })
          )}
          aria-label={placeholder}
        />

        <div
          className={cn(
            'absolute top-1/2 -translate-y-1/2 flex items-center gap-1',
            getClearButtonPositionClass()
          )}
        >
          {loading && <Loader2 className="w-4 h-4 text-primary animate-spin" />}

          {showClearButton && localValue && !loading && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleClear}
              className="!p-1 !rounded-full !border-0"
              aria-label="Clear search"
            >
              <X className="w-3 h-3" />
            </Button>
          )}
        </div>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-muted rounded-lg shadow-lg overflow-hidden">
          <ul className="py-1">
            {suggestions.map((suggestion, index) => (
              <li key={index}>
                <button
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full px-4 py-2 text-left text-secondary hover:bg-muted/10 hover:text-primary transition-colors duration-150"
                >
                  {suggestion}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
