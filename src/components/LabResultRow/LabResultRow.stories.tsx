import type { Meta, StoryObj } from '@storybook/react-vite';
import { LabResultRow } from './LabResultRow';

const meta: Meta<typeof LabResultRow> = {
  title: 'Aegis X/Healthcare/LabResultRow',
  component: LabResultRow,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ maxWidth: 700, border: '1px solid #e2e8f0', borderRadius: 8, overflow: 'hidden' }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof LabResultRow>;

export const Normal: Story = {
  args: {
    testName: 'White Blood Cells',
    value: 7.2,
    unit: 'K/uL',
    referenceRange: '4.5-11.0',
    status: 'normal',
    collectedDate: '03/19/2026',
  },
};

export const AbnormalHigh: Story = {
  args: {
    testName: 'Glucose',
    value: 142,
    unit: 'mg/dL',
    referenceRange: '70-100',
    status: 'abnormal-high',
    collectedDate: '03/19/2026',
  },
};

export const AbnormalLow: Story = {
  args: {
    testName: 'Hemoglobin',
    value: 10.8,
    unit: 'g/dL',
    referenceRange: '12.0-16.0',
    status: 'abnormal-low',
    collectedDate: '03/19/2026',
  },
};

export const CriticalResult: Story = {
  args: {
    testName: 'Potassium',
    value: 6.2,
    unit: 'mEq/L',
    referenceRange: '3.5-5.0',
    status: 'critical',
    collectedDate: '03/19/2026',
  },
};

export const CBCPanel: Story = {
  render: () => (
    <div>
      <LabResultRow
        testName="White Blood Cells"
        value={7.2}
        unit="K/uL"
        referenceRange="4.5-11.0"
        status="normal"
        collectedDate="03/19/2026"
      />
      <LabResultRow
        testName="Red Blood Cells"
        value={4.1}
        unit="M/uL"
        referenceRange="4.2-5.4"
        status="abnormal-low"
        collectedDate="03/19/2026"
      />
      <LabResultRow
        testName="Hemoglobin"
        value={12.5}
        unit="g/dL"
        referenceRange="12.0-16.0"
        status="normal"
        collectedDate="03/19/2026"
      />
      <LabResultRow
        testName="Hematocrit"
        value={37.2}
        unit="%"
        referenceRange="36.0-46.0"
        status="normal"
        collectedDate="03/19/2026"
      />
      <LabResultRow
        testName="Platelets"
        value={142}
        unit="K/uL"
        referenceRange="150-400"
        status="abnormal-low"
        collectedDate="03/19/2026"
      />
    </div>
  ),
};

export const MetabolicPanel: Story = {
  render: () => (
    <div>
      <LabResultRow
        testName="Glucose"
        value={142}
        unit="mg/dL"
        referenceRange="70-100"
        status="abnormal-high"
        collectedDate="03/19/2026"
      />
      <LabResultRow
        testName="BUN"
        value={18}
        unit="mg/dL"
        referenceRange="7-20"
        status="normal"
        collectedDate="03/19/2026"
      />
      <LabResultRow
        testName="Creatinine"
        value={1.0}
        unit="mg/dL"
        referenceRange="0.6-1.2"
        status="normal"
        collectedDate="03/19/2026"
      />
      <LabResultRow
        testName="Sodium"
        value={140}
        unit="mEq/L"
        referenceRange="136-145"
        status="normal"
        collectedDate="03/19/2026"
      />
      <LabResultRow
        testName="Potassium"
        value={6.2}
        unit="mEq/L"
        referenceRange="3.5-5.0"
        status="critical"
        collectedDate="03/19/2026"
      />
    </div>
  ),
};
