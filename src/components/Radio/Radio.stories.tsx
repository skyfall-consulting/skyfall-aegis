import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Inputs/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: { label: 'Option A', name: 'demo' },
};

export const Group: Story = {
  render: () => (
    <fieldset style={{ border: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
      <legend style={{ fontWeight: 500, marginBottom: 8, fontFamily: 'var(--aegis-font-family-sans)' }}>
        Appointment type
      </legend>
      <Radio name="appointment" label="In-person visit" defaultChecked />
      <Radio name="appointment" label="Telehealth" />
      <Radio name="appointment" label="Phone consultation" />
    </fieldset>
  ),
};

export const Disabled: Story = {
  args: { label: 'Unavailable', disabled: true, name: 'disabled' },
};
