'use client';

import { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
  type PaginationState,
  type Updater,
} from '@tanstack/react-table';
import { cva } from 'class-variance-authority';
import { ChevronDown, ChevronUp, ChevronsUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from './lib/utils';
import { Button } from './Button';

// Column meta type
export interface TableColumnMeta {
  align?: 'left' | 'center' | 'right';
  minWidth?: string | number;
  maxWidth?: string | number;
}

// Table Container
const tableContainer = cva('bg-white rounded-lg border border-earth-stone/30 flex flex-col', {
  variants: {
    variant: {
      default: '',
      outlined: 'border-earth-stone/50',
      elevated: 'shadow-md border-transparent',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface TableProps<TData> {
  /** Row data */
  data: TData[];
  /** Column definitions - use accessorKey for sortable columns */
  columns: ColumnDef<TData, unknown>[];
  /** Unique key accessor for each row */
  rowKey: (row: TData) => string | number;
  /** Table title shown in the header */
  title?: string;
  /** Makes the table collapsible (requires title) */
  collapsible?: boolean;
  /** Whether the table is open by default */
  defaultOpen?: boolean;
  /** Makes rows clickable */
  clickableRows?: boolean;
  /** Row click handler */
  onRowClick?: (row: TData) => void;
  /** Controlled sorting state */
  sorting?: SortingState;
  /** Sorting change handler */
  onSortingChange?: (sorting: SortingState) => void;
  /** Enable pagination */
  pagination?: boolean;
  /** Page size for pagination */
  pageSize?: number;
  /** Visual variant */
  variant?: 'default' | 'outlined' | 'elevated';
  /** Additional CSS classes for the container */
  className?: string;
  /** Table caption */
  caption?: string;
  /** Maximum height before scrolling */
  maxHeight?: string;
  /** Empty state message */
  emptyMessage?: string;
}

export function Table<TData>({
  data,
  columns,
  rowKey,
  title,
  collapsible = false,
  defaultOpen = true,
  clickableRows = false,
  onRowClick,
  sorting: controlledSorting,
  onSortingChange,
  pagination = false,
  pageSize = 20,
  variant = 'default',
  className,
  caption,
  maxHeight,
  emptyMessage = 'No data available.',
}: TableProps<TData>) {
  const [collapsed, setCollapsed] = useState(!defaultOpen);
  const [internalSorting, setInternalSorting] = useState<SortingState>([]);
  const [internalPagination, setInternalPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize,
  });

  const sorting = controlledSorting !== undefined ? controlledSorting : internalSorting;

  const handleSortingChange = (newSorting: SortingState) => {
    if (onSortingChange) {
      onSortingChange(newSorting);
    } else {
      setInternalSorting(newSorting);
    }
  };

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      ...(pagination && { pagination: internalPagination }),
    },
    onSortingChange: (updater) => {
      const newSorting = typeof updater === 'function' ? updater(sorting) : updater;
      handleSortingChange(newSorting);
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...(pagination && {
      onPaginationChange: (updater: Updater<PaginationState>) => {
        const newPagination = typeof updater === 'function' ? updater(internalPagination) : updater;
        setInternalPagination(newPagination);
      },
    }),
  });

  const getColumnMeta = (columnDef: ColumnDef<TData, unknown>): TableColumnMeta => {
    return (columnDef.meta as TableColumnMeta) || {};
  };

  const tableContent = (
    <div>
      <div
        className={maxHeight ? 'overflow-auto' : 'overflow-x-auto'}
        style={maxHeight ? { maxHeight } : undefined}
      >
        <table className="w-full text-sm">
          <thead className="sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-y border-earth-stone/20 bg-earth-stone/5">
                {headerGroup.headers.map((header) => {
                  const canSort = header.column.getCanSort();
                  const isSorted = header.column.getIsSorted();
                  const meta = getColumnMeta(header.column.columnDef);

                  return (
                    <th
                      key={header.id}
                      className={cn(
                        'py-2 text-earth-moss font-medium',
                        meta.align === 'center' && 'text-center',
                        meta.align === 'right' && 'text-right',
                        !meta.align && 'text-left',
                        meta.align === 'left' ? 'px-4' : 'px-3',
                        canSort &&
                          'cursor-pointer select-none hover:text-earth-forest transition-colors'
                      )}
                      style={{
                        width: header.getSize() !== 150 ? header.getSize() : undefined,
                        minWidth: meta.minWidth,
                        maxWidth: meta.maxWidth,
                      }}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <div
                        className={cn(
                          'flex items-center gap-1',
                          meta.align === 'right' && 'justify-end',
                          meta.align === 'center' && 'justify-center'
                        )}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {canSort &&
                          (isSorted === 'desc' ? (
                            <ChevronDown className="w-4 h-4 text-earth-forest" />
                          ) : isSorted === 'asc' ? (
                            <ChevronUp className="w-4 h-4 text-earth-forest" />
                          ) : (
                            <ChevronsUpDown className="w-4 h-4 text-earth-moss/50" />
                          ))}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center py-8 text-earth-moss">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={rowKey(row.original)}
                  onClick={() => clickableRows && onRowClick?.(row.original)}
                  className={cn(
                    'border-b border-earth-stone/10 transition-colors',
                    clickableRows && 'cursor-pointer hover:bg-earth-stone/20'
                  )}
                >
                  {row.getVisibleCells().map((cell) => {
                    const meta = getColumnMeta(cell.column.columnDef);
                    return (
                      <td
                        key={cell.id}
                        className={cn(
                          'py-2.5',
                          meta.align === 'center' && 'text-center',
                          meta.align === 'right' && 'text-right',
                          !meta.align && 'text-left',
                          meta.align === 'left' ? 'px-4' : 'px-3'
                        )}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && table.getPageCount() > 1 && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-earth-stone/20">
          <p className="text-xs text-earth-moss">
            Showing{' '}
            {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to{' '}
            {Math.min(
              (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
              data.length
            )}{' '}
            of {data.length} results
          </p>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="!p-1"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {Array.from({ length: table.getPageCount() }, (_, i) => (
              <Button
                key={i}
                variant={table.getState().pagination.pageIndex === i ? 'primary' : 'outline'}
                size="sm"
                onClick={() => table.setPageIndex(i)}
                className="!px-2 !py-1 min-w-[2rem]"
              >
                {i + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="!p-1"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );

  // Collapsible wrapper
  if (collapsible && title) {
    return (
      <div className={cn(tableContainer({ variant }), className)}>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-between w-full p-4 hover:bg-earth-stone/5 transition-colors border-none h-auto"
        >
          <p className="text-xs font-semibold text-earth-sage uppercase tracking-wider">{title}</p>
          {collapsed ? (
            <ChevronDown className="w-4 h-4 text-earth-moss" />
          ) : (
            <ChevronUp className="w-4 h-4 text-earth-moss" />
          )}
        </Button>
        {caption && !collapsed && <p className="px-4 pb-2 text-xs text-earth-moss">{caption}</p>}
        {!collapsed && tableContent}
      </div>
    );
  }

  // Non-collapsible
  return (
    <div className={cn(tableContainer({ variant }), className)}>
      {title && (
        <div className="p-4 border-b border-earth-stone/20">
          <p className="text-xs font-semibold text-earth-sage uppercase tracking-wider">{title}</p>
          {caption && <p className="mt-1 text-xs text-earth-moss">{caption}</p>}
        </div>
      )}
      {tableContent}
    </div>
  );
}

export type { ColumnDef };

export default Table;
