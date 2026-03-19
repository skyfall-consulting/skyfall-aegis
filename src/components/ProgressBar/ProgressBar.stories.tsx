import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Data Display/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: { value: 60, label: 'Progress', showValue: true },
};

export const Small: Story = {
  args: { value: 45, size: 'sm' },
};

export const Variants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <ProgressBar value={75} variant="default" label="Default" showValue />
      <ProgressBar value={90} variant="success" label="Complete" showValue />
      <ProgressBar value={50} variant="warning" label="In Progress" showValue />
      <ProgressBar value={25} variant="error" label="At Risk" showValue />
    </div>
  ),
};

export const PatientIntake: Story = {
  name: 'Patient Intake Progress',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <ProgressBar value={100} variant="success" label="Demographics" showValue size="sm" />
      <ProgressBar value={100} variant="success" label="Insurance" showValue size="sm" />
      <ProgressBar value={60} variant="default" label="Medical History" showValue size="sm" />
      <ProgressBar value={0} variant="default" label="Consent Forms" showValue size="sm" />
    </div>
  ),
};
