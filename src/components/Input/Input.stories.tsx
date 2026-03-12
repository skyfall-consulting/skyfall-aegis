import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: 'Enter patient name...', fullWidth: true },
};

export const Small: Story = {
  args: { placeholder: 'Search...', size: 'sm', fullWidth: true },
};

export const Large: Story = {
  args: { placeholder: 'Enter value', size: 'lg', fullWidth: true },
};

export const WithError: Story = {
  args: { defaultValue: 'invalid@', error: true, fullWidth: true },
};

export const Disabled: Story = {
  args: { defaultValue: 'Read only value', disabled: true, fullWidth: true },
};
