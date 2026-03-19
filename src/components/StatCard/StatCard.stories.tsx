import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './StatCard';

const PatientsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-8 10a8 8 0 0116 0H4z" /></svg>
);
const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 4v6l4.2 2.5-.8 1.4L11 13V6h1z" /></svg>
);
const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
);
const BedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v15h2v-3h18v3h2V11a4 4 0 00-4-4z" /></svg>
);

const meta: Meta<typeof StatCard> = {
  title: 'Components/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 280 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const TotalPatients: Story = {
  args: {
    label: 'Total Patients',
    value: '1,247',
    change: 12,
    changeLabel: 'vs last month',
    trend: 'up',
    icon: <PatientsIcon />,
  },
};

export const AvgWaitTime: Story = {
  args: {
    label: 'Avg Wait Time',
    value: '14 min',
    change: -8,
    changeLabel: 'vs last week',
    trend: 'down',
    icon: <ClockIcon />,
  },
};

export const PatientSatisfaction: Story = {
  args: {
    label: 'Patient Satisfaction',
    value: '94.2%',
    change: 2.1,
    changeLabel: 'vs last quarter',
    trend: 'up',
    icon: <HeartIcon />,
  },
};

export const BedOccupancy: Story = {
  args: {
    label: 'Bed Occupancy',
    value: '78%',
    change: 0,
    changeLabel: 'no change',
    trend: 'neutral',
    icon: <BedIcon />,
  },
};

export const GridLayout: Story = {
  decorators: [(Story) => <div style={{ width: 600 }}><Story /></div>],
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <StatCard label="Total Patients" value="1,247" change={12} changeLabel="vs last month" trend="up" icon={<PatientsIcon />} />
      <StatCard label="Avg Wait Time" value="14 min" change={-8} changeLabel="vs last week" trend="down" icon={<ClockIcon />} />
      <StatCard label="Satisfaction" value="94.2%" change={2.1} trend="up" icon={<HeartIcon />} />
      <StatCard label="Bed Occupancy" value="78%" change={0} trend="neutral" icon={<BedIcon />} />
    </div>
  ),
};
