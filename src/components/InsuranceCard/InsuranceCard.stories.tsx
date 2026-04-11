import type { Meta, StoryObj } from '@storybook/react';
import { InsuranceCard } from './InsuranceCard';

const meta: Meta<typeof InsuranceCard> = {
  title: 'Healthcare/InsuranceCard',
  component: InsuranceCard,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ maxWidth: 420 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof InsuranceCard>;

export const ActivePPO: Story = {
  args: {
    planName: 'Blue Cross Blue Shield',
    memberId: 'XYZ123456789',
    groupNumber: 'GRP-98765',
    planType: 'PPO',
    status: 'active',
    effectiveDate: '01/01/2026',
    expirationDate: '12/31/2026',
  },
};

export const MedicareActive: Story = {
  args: {
    planName: 'Medicare Part B',
    memberId: '1EG4-TE5-MK72',
    groupNumber: 'N/A',
    planType: 'Medicare',
    status: 'active',
    effectiveDate: '07/01/2025',
  },
};

export const PendingHMO: Story = {
  args: {
    planName: 'Kaiser Permanente',
    memberId: 'KP-2026-88431',
    groupNumber: 'GRP-44210',
    planType: 'HMO',
    status: 'pending',
    effectiveDate: '04/01/2026',
    expirationDate: '03/31/2027',
  },
};

export const InactivePlan: Story = {
  args: {
    planName: 'Aetna Health',
    memberId: 'W123456789',
    groupNumber: 'GRP-55123',
    planType: 'EPO',
    status: 'inactive',
    effectiveDate: '01/01/2025',
    expirationDate: '12/31/2025',
  },
};

export const Medicaid: Story = {
  args: {
    planName: 'State Medicaid Program',
    memberId: 'MCD-9876543',
    groupNumber: 'N/A',
    planType: 'Medicaid',
    status: 'active',
    effectiveDate: '01/01/2026',
  },
};

export const InsuranceList: Story = {
  name: 'Coverage Summary',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <InsuranceCard
        planName="Blue Cross Blue Shield"
        memberId="XYZ123456789"
        groupNumber="GRP-98765"
        planType="PPO"
        status="active"
        effectiveDate="01/01/2026"
        expirationDate="12/31/2026"
      />
      <InsuranceCard
        planName="Delta Dental"
        memberId="DD-5551234"
        groupNumber="GRP-98765"
        planType="PPO"
        status="active"
        effectiveDate="01/01/2026"
        expirationDate="12/31/2026"
      />
    </div>
  ),
};
