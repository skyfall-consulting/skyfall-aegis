import type { Meta, StoryObj } from '@storybook/react';
import { ClinicalBanner } from './ClinicalBanner';

const meta: Meta<typeof ClinicalBanner> = {
  title: 'Healthcare/ClinicalBanner',
  component: ClinicalBanner,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ maxWidth: 600 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof ClinicalBanner>;

export const Critical: Story = {
  args: {
    severity: 'critical',
    title: 'Allergy Alert: Penicillin',
    children: 'Patient has a documented severe allergy to penicillin and related antibiotics. Anaphylaxis risk.',
    dismissible: true,
  },
};

export const High: Story = {
  args: {
    severity: 'high',
    title: 'Fall Risk',
    children: 'Patient scored 45+ on Morse Fall Scale. Implement fall prevention protocol.',
    dismissible: true,
  },
};

export const Moderate: Story = {
  args: {
    severity: 'moderate',
    title: 'Isolation Precautions',
    children: 'Contact precautions in effect. Gown and gloves required.',
  },
};

export const Low: Story = {
  args: {
    severity: 'low',
    title: 'DNR on File',
    children: 'Advance directive on file. Do Not Resuscitate order is active.',
  },
};

export const Dismissible: Story = {
  args: {
    severity: 'critical',
    title: 'Drug Interaction Warning',
    children: 'Potential interaction between Warfarin and Aspirin. Review dosage.',
    dismissible: true,
    onDismiss: () => alert('Banner dismissed'),
  },
};
