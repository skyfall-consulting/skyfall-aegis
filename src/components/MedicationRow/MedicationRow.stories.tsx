import type { Meta, StoryObj } from '@storybook/react-vite';
import { MedicationRow } from './MedicationRow';

const meta: Meta<typeof MedicationRow> = {
  title: 'Aegis X/Healthcare/MedicationRow',
  component: MedicationRow,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ maxWidth: 700, border: '1px solid var(--aegis-color-border-default)', borderRadius: 8, overflow: 'hidden' }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof MedicationRow>;

export const Active: Story = {
  args: {
    name: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    route: 'Oral',
    prescribedBy: 'Dr. James Chen',
    startDate: '01/15/2026',
    status: 'active',
  },
};

export const Discontinued: Story = {
  args: {
    name: 'Amoxicillin',
    dosage: '500mg',
    frequency: 'Three times daily',
    route: 'Oral',
    prescribedBy: 'Dr. Sarah Kim',
    startDate: '02/01/2026',
    endDate: '02/10/2026',
    status: 'discontinued',
  },
};

export const OnHold: Story = {
  args: {
    name: 'Metformin',
    dosage: '850mg',
    frequency: 'Twice daily',
    route: 'Oral',
    prescribedBy: 'Dr. Michael Torres',
    startDate: '12/01/2025',
    status: 'hold',
  },
};

export const PRN: Story = {
  args: {
    name: 'Ondansetron',
    dosage: '4mg',
    frequency: 'Every 8 hours as needed',
    route: 'Oral',
    prescribedBy: 'Dr. Lisa Park',
    startDate: '03/10/2026',
    status: 'prn',
  },
};

export const MedicationList: Story = {
  name: 'Medication List',
  render: () => (
    <div>
      <MedicationRow
        name="Lisinopril"
        dosage="10mg"
        frequency="Once daily"
        route="Oral"
        prescribedBy="Dr. James Chen"
        startDate="01/15/2026"
        status="active"
      />
      <MedicationRow
        name="Metoprolol"
        dosage="25mg"
        frequency="Twice daily"
        route="Oral"
        prescribedBy="Dr. James Chen"
        startDate="01/15/2026"
        status="active"
      />
      <MedicationRow
        name="Ondansetron"
        dosage="4mg"
        frequency="Every 8 hours as needed"
        route="Oral"
        prescribedBy="Dr. Lisa Park"
        startDate="03/10/2026"
        status="prn"
      />
      <MedicationRow
        name="Metformin"
        dosage="850mg"
        frequency="Twice daily"
        route="Oral"
        prescribedBy="Dr. Michael Torres"
        startDate="12/01/2025"
        status="hold"
      />
      <MedicationRow
        name="Amoxicillin"
        dosage="500mg"
        frequency="Three times daily"
        route="Oral"
        prescribedBy="Dr. Sarah Kim"
        startDate="02/01/2026"
        endDate="02/10/2026"
        status="discontinued"
      />
    </div>
  ),
};
