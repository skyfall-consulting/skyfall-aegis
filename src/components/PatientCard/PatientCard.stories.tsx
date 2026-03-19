import type { Meta, StoryObj } from '@storybook/react';
import { PatientCard } from './PatientCard';

const meta: Meta<typeof PatientCard> = {
  title: 'Healthcare/PatientCard',
  component: PatientCard,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ maxWidth: 480 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof PatientCard>;

export const Active: Story = {
  args: {
    name: 'Maria Santos',
    mrn: 'MRN-2024-001542',
    dob: '03/15/1985',
    age: 41,
    gender: 'Female',
    status: 'active',
    allergies: ['Penicillin', 'Sulfa'],
    primaryPhysician: 'Dr. James Chen',
  },
};

export const Critical: Story = {
  args: {
    name: 'Robert Johnson',
    mrn: 'MRN-2024-003891',
    dob: '11/02/1958',
    age: 67,
    gender: 'Male',
    status: 'critical',
    allergies: ['Aspirin', 'Latex', 'Iodine'],
    primaryPhysician: 'Dr. Sarah Kim',
  },
};

export const Inactive: Story = {
  args: {
    name: 'Emily Nguyen',
    mrn: 'MRN-2024-007230',
    dob: '07/22/1992',
    age: 33,
    gender: 'Female',
    status: 'inactive',
    primaryPhysician: 'Dr. Michael Torres',
  },
};

export const WithAvatar: Story = {
  args: {
    name: 'James Wilson',
    mrn: 'MRN-2024-005612',
    dob: '01/30/1975',
    age: 51,
    gender: 'Male',
    status: 'active',
    allergies: ['Codeine'],
    primaryPhysician: 'Dr. Lisa Park',
    avatar: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#E2E8F0" />
        <text x="24" y="28" textAnchor="middle" fontSize="18" fill="#64748B">JW</text>
      </svg>
    ),
  },
};
