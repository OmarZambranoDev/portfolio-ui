'use client';

import { useState, useRef, useEffect } from 'react';
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
import { ChevronDown, ChevronUp, ChevronsUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from './lib/utils';
import { Button } from './Button';

export interface TableColumnMeta {
  align?: 'left' | 'center' | 'right';
  minWidth?: string | number;
  maxWidth?: string | number;
}

export interface TableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData, unknown>[];
  rowKey: (row: TData, index: number) => string | number;
  title?: string;
  collapsible?: boolean;
  defaultOpen?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  clickableRows?: boolean;
  onRowClick?: (row: TData) => void;
  sorting?: SortingState;
  onSortingChange?: (sorting: SortingState) => void;
  pagination?: boolean;
  pageSize?: number;
  className?: string;
  caption?: string;
  emptyMessage?: string;
}

export function Table<TData>({
  data,
  columns,
  rowKey,
  title,
  collapsible = false,
  defaultOpen = true,
  onCollapsedChange,
  clickableRows = false,
  onRowClick,
  sorting: controlledSorting,
  onSortingChange,
  pagination = false,
  pageSize = 20,
  className,
  caption,
  emptyMessage = 'No data available.',
}: TableProps<TData>) {
  const [collapsed, setCollapsed] = useState(!defaultOpen);
  const [internalSorting, setInternalSorting] = useState<SortingState>([]);
  const [internalPagination, setInternalPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize,
  });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  const sorting = controlledSorting !== undefined ? controlledSorting : internalSorting;

  const handleToggle = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    onCollapsedChange?.(newCollapsed);
  };

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

  // Scroll detection for fade effect
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const check = () => {
      setCanScroll(el.scrollHeight > el.clientHeight + 2);
    };

    check();

    const observer = new ResizeObserver(check);
    observer.observe(el);

    return () => observer.disconnect();
  }, [data]);

  const getColumnMeta = (columnDef: ColumnDef<TData, unknown>): TableColumnMeta => {
    return (columnDef.meta as TableColumnMeta) || {};
  };

  return (
    <div
      className={cn(
        'flex flex-col border border-earth-stone/70 rounded-lg bg-white overflow-hidden',
        collapsed ? 'flex-none' : 'flex-1 min-h-0',
        className
      )}
    >
      {/* Header */}
      {collapsible && title ? (
        <button
          onClick={handleToggle}
          className="flex items-center justify-between w-full p-4 shrink-0"
        >
          <span className="text-xs font-semibold text-earth-forest uppercase tracking-wider">
            {title}
          </span>
          {collapsed ? (
            <ChevronDown className="w-4 h-4 text-earth-moss" />
          ) : (
            <ChevronUp className="w-4 h-4 text-earth-moss" />
          )}
        </button>
      ) : title ? (
        <div className="p-4 border-b border-earth-stone/20 shrink-0">
          <span className="text-xs font-semibold text-earth-forest uppercase tracking-wider">
            {title}
          </span>
          {caption && <p className="mt-1 text-xs text-earth-moss">{caption}</p>}
        </div>
      ) : null}

      {/* Caption for collapsible */}
      {collapsible && caption && !collapsed && (
        <p className="px-4 pb-2 text-xs text-earth-moss shrink-0">{caption}</p>
      )}

      {/* Content */}
      {(!collapsible || !collapsed) && (
        <div className="flex-1 min-h-0 flex flex-col border-t border-earth-stone/30">
          <div className="flex-1 min-h-0 relative">
            <div ref={scrollRef} className="h-full overflow-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 z-10 shadow-[0_2px_0_0_#7f886e]">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id} className="bg-white">
                      {headerGroup.headers.map((header) => {
                        const canSort = header.column.getCanSort();
                        const isSorted = header.column.getIsSorted();
                        const meta = getColumnMeta(header.column.columnDef);

                        return (
                          <th
                            key={header.id}
                            className={cn(
                              'py-2 text-earth-moss font-medium bg-white',
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
                    table.getRowModel().rows.map((row, index) => (
                      <tr
                        key={rowKey(row.original, index)}
                        onClick={() => clickableRows && onRowClick?.(row.original)}
                        className={cn(
                          'border-b border-earth-stone/10 transition-colors bg-white',
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
            {canScroll && (
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-earth-stone/20 to-transparent pointer-events-none" />
            )}
          </div>

          {/* Pagination */}
          {pagination && table.getPageCount() > 1 && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-earth-stone/20 shrink-0 bg-white">
              <span className="text-xs text-earth-moss">
                {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} -{' '}
                {Math.min(
                  (table.getState().pagination.pageIndex + 1) *
                    table.getState().pagination.pageSize,
                  data.length
                )}{' '}
                of {data.length}
              </span>
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
      )}
    </div>
  );
}

export type { ColumnDef };

export default Table;
