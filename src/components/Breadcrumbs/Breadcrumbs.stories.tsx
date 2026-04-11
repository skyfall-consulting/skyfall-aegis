import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '#' },
      { label: 'Patients', href: '#' },
      { label: 'Jane Cooper' },
    ],
  },
};

export const TwoLevels: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '#' },
      { label: 'Appointments' },
    ],
  },
};

export const DeepNavigation: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '#' },
      { label: 'Patients', href: '#' },
      { label: 'Jane Cooper', href: '#' },
      { label: 'Lab Results', href: '#' },
      { label: 'Blood Panel' },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '#' },
      { label: 'Settings', href: '#' },
      { label: 'Notifications' },
    ],
    separator: '\u203A',
  },
};
