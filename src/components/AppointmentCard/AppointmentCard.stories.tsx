import type { Meta, StoryObj } from '@storybook/react';
import { AppointmentCard } from './AppointmentCard';

const meta: Meta<typeof AppointmentCard> = {
  title: 'Aegis X/Healthcare/AppointmentCard',
  component: AppointmentCard,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ maxWidth: 480 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof AppointmentCard>;

export const Scheduled: Story = {
  args: {
    patientName: 'Maria Santos',
    date: '03/25/2026',
    time: '10:30 AM',
    type: 'Follow-up',
    provider: 'Dr. James Chen',
    status: 'scheduled',
    location: 'Room 204',
  },
};

export const CheckedIn: Story = {
  args: {
    patientName: 'Robert Johnson',
    date: '03/19/2026',
    time: '2:00 PM',
    type: 'Annual Physical',
    provider: 'Dr. Sarah Kim',
    status: 'checked-in',
    location: 'Exam Room 3',
  },
};

export const InProgress: Story = {
  args: {
    patientName: 'Emily Nguyen',
    date: '03/19/2026',
    time: '11:00 AM',
    type: 'Lab Review',
    provider: 'Dr. Michael Torres',
    status: 'in-progress',
    location: 'Room 105',
  },
};

export const Completed: Story = {
  args: {
    patientName: 'James Wilson',
    date: '03/18/2026',
    time: '9:15 AM',
    type: 'Post-Op Follow-up',
    provider: 'Dr. Lisa Park',
    status: 'completed',
    location: 'Suite 301',
  },
};

export const Cancelled: Story = {
  args: {
    patientName: 'Ana Garcia',
    date: '03/20/2026',
    time: '3:45 PM',
    type: 'New Patient',
    provider: 'Dr. James Chen',
    status: 'cancelled',
    location: 'Room 204',
  },
};

export const NoShow: Story = {
  args: {
    patientName: 'David Lee',
    date: '03/17/2026',
    time: '1:00 PM',
    type: 'Follow-up',
    provider: 'Dr. Sarah Kim',
    status: 'no-show',
    location: 'Room 112',
  },
};

export const DailySchedule: Story = {
  name: 'Daily Schedule',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <AppointmentCard
        patientName="Maria Santos"
        date="03/25/2026"
        time="9:00 AM"
        type="Follow-up"
        provider="Dr. James Chen"
        status="completed"
        location="Room 204"
      />
      <AppointmentCard
        patientName="Robert Johnson"
        date="03/25/2026"
        time="10:30 AM"
        type="Annual Physical"
        provider="Dr. James Chen"
        status="in-progress"
        location="Exam Room 3"
      />
      <AppointmentCard
        patientName="Emily Nguyen"
        date="03/25/2026"
        time="1:00 PM"
        type="Lab Review"
        provider="Dr. James Chen"
        status="checked-in"
        location="Room 105"
      />
      <AppointmentCard
        patientName="David Lee"
        date="03/25/2026"
        time="2:30 PM"
        type="New Patient"
        provider="Dr. James Chen"
        status="scheduled"
        location="Room 204"
      />
    </div>
  ),
};
