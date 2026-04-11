import type { Meta, StoryObj } from '@storybook/react';
import { PatientCard } from './PatientCard';

const meta: Meta<typeof PatientCard> = {
  title: 'Aegis X/Healthcare/PatientCard',
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
    avatarSrc: 'https://i.pravatar.cc/96?u=jameswilson',
  },
};

export const FullDemographics: Story = {
  name: 'Full Demographics',
  args: {
    name: 'Ana Garcia',
    mrn: 'MRN-2024-009145',
    dob: '06/12/1970',
    age: 55,
    gender: 'Female',
    status: 'active',
    allergies: ['Penicillin', 'Sulfa', 'Latex', 'Codeine'],
    primaryPhysician: 'Dr. Michael Torres',
    avatarSrc: 'https://i.pravatar.cc/96?u=anagarcia',
  },
};
