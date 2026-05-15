import type { Meta, StoryObj } from '@storybook/react';
import { Table, type ColumnDef } from '../Table';
import { Chip } from '../Chip';
import { TrendingUp, TrendingDown } from 'lucide-react';
import '../../dist/index.css';

const meta: Meta<typeof Table> = {
  title: 'Portfolio/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// Sample data
interface StockPosition {
  symbol: string;
  companyName: string;
  lastPrice: number;
  change: number;
  changePercent: number;
  todayGain: number;
  todayGainPercent: number;
  totalGain: number;
  totalGainPercent: number;
  value: number;
  accountPercent: number;
  quantity: number;
  avgCost: number;
  costBasis: number;
}

const stockColumns: ColumnDef<StockPosition, unknown>[] = [
  {
    accessorKey: 'symbol',
    header: 'Symbol',
    cell: ({ row }) => (
      <div>
        <p className="font-semibold text-earth-forest">{row.original.symbol}</p>
        <p className="text-xs text-earth-moss">{row.original.companyName}</p>
      </div>
    ),
    size: 120,
    meta: { align: 'left' },
  },
  {
    accessorKey: 'lastPrice',
    header: 'Last Price',
    cell: ({ row }) => `$${row.original.lastPrice.toFixed(2)}`,
    meta: { align: 'right' },
  },
  {
    accessorKey: 'change',
    header: 'Change',
    cell: ({ row }) => {
      const isPositive = row.original.change >= 0;
      return (
        <div className="flex items-center justify-end gap-1">
          {isPositive ? (
            <TrendingUp className="w-3 h-3 text-earth-forest" />
          ) : (
            <TrendingDown className="w-3 h-3 text-danger" />
          )}
          <span className={`font-medium ${isPositive ? 'text-earth-forest' : 'text-danger'}`}>
            {isPositive ? '+' : ''}
            {row.original.change.toFixed(2)} ({isPositive ? '+' : ''}
            {row.original.changePercent.toFixed(2)}%)
          </span>
        </div>
      );
    },
    meta: { align: 'right' },
  },
  {
    accessorKey: 'todayGain',
    header: "Today's Gain",
    cell: ({ row }) => (
      <span
        className={`font-medium ${
          row.original.todayGain >= 0 ? 'text-earth-forest' : 'text-danger'
        }`}
      >
        {row.original.todayGain >= 0 ? '+' : ''}${row.original.todayGain.toFixed(2)}
        <br />
        <span className="text-xs">
          ({row.original.todayGainPercent >= 0 ? '+' : ''}
          {row.original.todayGainPercent.toFixed(2)}%)
        </span>
      </span>
    ),
    meta: { align: 'right' },
  },
  {
    accessorKey: 'totalGain',
    header: 'Total Gain',
    cell: ({ row }) => (
      <span
        className={`font-medium ${
          row.original.totalGain >= 0 ? 'text-earth-forest' : 'text-danger'
        }`}
      >
        {row.original.totalGain >= 0 ? '+' : ''}${row.original.totalGain.toFixed(2)}
        <br />
        <span className="text-xs">
          ({row.original.totalGainPercent >= 0 ? '+' : ''}
          {row.original.totalGainPercent.toFixed(2)}%)
        </span>
      </span>
    ),
    meta: { align: 'right' },
  },
  {
    accessorKey: 'value',
    header: 'Value',
    cell: ({ row }) => `$${row.original.value.toFixed(2)}`,
    meta: { align: 'right' },
  },
  {
    accessorKey: 'accountPercent',
    header: '% Account',
    cell: ({ row }) => `${row.original.accountPercent.toFixed(2)}%`,
    meta: { align: 'right' },
  },
  {
    accessorKey: 'quantity',
    header: 'Qty',
    cell: ({ row }) => row.original.quantity,
    meta: { align: 'right' },
  },
  {
    accessorKey: 'avgCost',
    header: 'Avg Cost',
    cell: ({ row }) => `$${row.original.avgCost.toFixed(2)}`,
    meta: { align: 'right' },
  },
  {
    accessorKey: 'costBasis',
    header: 'Cost Basis',
    cell: ({ row }) => `$${row.original.costBasis.toFixed(2)}`,
    meta: { align: 'right' },
  },
];

const sampleData: StockPosition[] = [
  {
    symbol: 'AAPL',
    companyName: 'Apple Inc.',
    lastPrice: 189.84,
    change: 2.34,
    changePercent: 1.25,
    todayGain: 234.0,
    todayGainPercent: 1.25,
    totalGain: 8940.0,
    totalGainPercent: 45.2,
    value: 18984.0,
    accountPercent: 24.5,
    quantity: 100,
    avgCost: 150.0,
    costBasis: 15000.0,
  },
  {
    symbol: 'MSFT',
    companyName: 'Microsoft Corp.',
    lastPrice: 415.5,
    change: -3.2,
    changePercent: -0.76,
    todayGain: -320.0,
    todayGainPercent: -0.76,
    totalGain: 1550.0,
    totalGainPercent: 8.9,
    value: 16620.0,
    accountPercent: 21.4,
    quantity: 40,
    avgCost: 380.0,
    costBasis: 15200.0,
  },
  {
    symbol: 'GOOGL',
    companyName: 'Alphabet Inc.',
    lastPrice: 142.75,
    change: 1.5,
    changePercent: 1.06,
    todayGain: 225.0,
    todayGainPercent: 1.06,
    totalGain: -850.0,
    totalGainPercent: -5.2,
    value: 11420.0,
    accountPercent: 14.7,
    quantity: 80,
    avgCost: 153.0,
    costBasis: 12240.0,
  },
  {
    symbol: 'AMZN',
    companyName: 'Amazon.com',
    lastPrice: 178.25,
    change: -0.8,
    changePercent: -0.45,
    todayGain: -40.0,
    todayGainPercent: -0.45,
    totalGain: 2125.0,
    totalGainPercent: 15.6,
    value: 8912.5,
    accountPercent: 11.5,
    quantity: 50,
    avgCost: 135.0,
    costBasis: 6750.0,
  },
  {
    symbol: 'TSLA',
    companyName: 'Tesla Inc.',
    lastPrice: 245.3,
    change: 5.2,
    changePercent: 2.17,
    todayGain: 520.0,
    todayGainPercent: 2.17,
    totalGain: 4530.0,
    totalGainPercent: 32.1,
    value: 12265.0,
    accountPercent: 15.8,
    quantity: 50,
    avgCost: 155.0,
    costBasis: 7750.0,
  },
];

export const PositionsTable: Story = {
  render: () => (
    <div className="w-[1100px]">
      <Table
        data={sampleData}
        columns={stockColumns}
        rowKey={(row) => row.symbol}
        title="Positions"
        collapsible
        clickableRows
        onRowClick={(row) => console.log('Clicked:', row.symbol)}
        maxHeight="400px"
      />
    </div>
  ),
};

export const WithPagination: Story = {
  render: () => (
    <div className="w-[1100px]">
      <Table
        data={sampleData}
        columns={stockColumns}
        rowKey={(row) => row.symbol}
        title="Positions (Paginated)"
        collapsible
        clickableRows
        pagination
        pageSize={3}
        maxHeight="400px"
      />
    </div>
  ),
};

export const SimpleTable: Story = {
  render: () => {
    interface SimpleRow {
      name: string;
      role: string;
      status: 'active' | 'inactive';
    }

    const columns: ColumnDef<SimpleRow, unknown>[] = [
      {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row }) => row.original.name,
        meta: { align: 'left' },
      },
      {
        accessorKey: 'role',
        header: 'Role',
        cell: ({ row }) => row.original.role,
        meta: { align: 'left' },
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => (
          <Chip size="sm" variant={row.original.status === 'active' ? 'primary' : 'default'}>
            {row.original.status}
          </Chip>
        ),
        meta: { align: 'center' },
      },
    ];

    const data: SimpleRow[] = [
      { name: 'John Doe', role: 'Admin', status: 'active' },
      { name: 'Jane Smith', role: 'Editor', status: 'active' },
      { name: 'Bob Johnson', role: 'Viewer', status: 'inactive' },
    ];

    return (
      <div className="w-[500px]">
        <Table
          data={data}
          columns={columns}
          rowKey={(row) => row.name}
          title="Team Members"
          variant="outlined"
        />
      </div>
    );
  },
};

export const EmptyState: Story = {
  render: () => {
    interface EmptyRow {
      name: string;
      role: string;
    }

    const columns: ColumnDef<EmptyRow, unknown>[] = [
      { accessorKey: 'name', header: 'Name', cell: ({ row }) => row.original.name },
      { accessorKey: 'role', header: 'Role', cell: ({ row }) => row.original.role },
    ];

    return (
      <div className="w-[500px]">
        <Table
          data={[]}
          columns={columns}
          rowKey={(row) => row.name}
          title="Empty Table"
          emptyMessage="No team members found. Invite someone to get started."
        />
      </div>
    );
  },
};
