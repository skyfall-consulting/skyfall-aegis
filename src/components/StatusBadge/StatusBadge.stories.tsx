import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from './StatusBadge';
import type { StatusBadgeStatus } from './StatusBadge';

const meta: Meta<typeof StatusBadge> = {
  title: 'Data Display/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Active: Story = {
  args: { status: 'active', dot: true },
};

export const Critical: Story = {
  args: { status: 'critical', dot: true },
};

export const Pending: Story = {
  args: { status: 'pending', dot: true },
};

export const AllStatuses: Story = {
  name: 'All Healthcare Statuses',
  render: () => {
    const statuses: StatusBadgeStatus[] = [
      'active', 'inactive', 'pending', 'critical',
      'discharged', 'scheduled', 'cancelled', 'in-progress',
    ];
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {statuses.map((s) => (
          <StatusBadge key={s} status={s} dot />
        ))}
      </div>
    );
  },
};

export const Small: Story = {
  name: 'Small Size',
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <StatusBadge status="active" size="sm" dot />
      <StatusBadge status="critical" size="sm" dot />
      <StatusBadge status="pending" size="sm" dot />
    </div>
  ),
};
