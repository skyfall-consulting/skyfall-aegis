import { type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { Card } from '../Card/Card';
import { Badge } from '../Badge/Badge';
import { Typography } from '../Typography/Typography';
import { DescriptionList, type DescriptionListItem } from '../DescriptionList/DescriptionList';
import { Divider } from '../Divider/Divider';
import styles from './InsuranceCard.module.css';

export type InsurancePlanType = 'PPO' | 'HMO' | 'EPO' | 'POS' | 'Medicare' | 'Medicaid' | 'Other';
export type InsuranceStatus = 'active' | 'inactive' | 'pending';

export interface InsuranceCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Plan name */
  planName: string;
  /** Member ID */
  memberId: string;
  /** Group number */
  groupNumber: string;
  /** Plan type */
  planType: InsurancePlanType;
  /** Coverage status */
  status: InsuranceStatus;
  /** Coverage effective date */
  effectiveDate: string;
  /** Coverage expiration date */
  expirationDate?: string;
}

const statusBadgeMap: Record<InsuranceStatus, { status: 'success' | 'neutral' | 'warning'; label: string }> = {
  active: { status: 'success', label: 'Active' },
  inactive: { status: 'neutral', label: 'Inactive' },
  pending: { status: 'warning', label: 'Pending' },
};

/**
 * InsuranceCard — displays insurance plan summary information.
 *
 * Composes: Card, Badge, Typography, DescriptionList, Divider
 *
 * Accessibility:
 * - Uses role="region" with aria-label for screen reader context
 * - Status communicated via text label, not color alone
 * - DescriptionList provides semantic label-value pairs
 */
export function InsuranceCard({
  planName,
  memberId,
  groupNumber,
  planType,
  status,
  effectiveDate,
  expirationDate,
  className,
  ...props
}: InsuranceCardProps) {
  const badgeConfig = statusBadgeMap[status];

  const items: DescriptionListItem[] = [
    { label: 'Member ID', value: memberId },
    { label: 'Group #', value: groupNumber },
    { label: 'Effective', value: effectiveDate },
    ...(expirationDate ? [{ label: 'Expires', value: expirationDate }] : []),
  ];

  return (
    <Card
      elevation="raised"
      padding="lg"
      className={cn(styles.card, className)}
      role="region"
      aria-label={`Insurance: ${planName}`}
      {...props}
    >
      <div className={styles.header}>
        <div className={styles.planInfo}>
          <Typography variant="heading-sm" as="h3">{planName}</Typography>
          <Typography variant="caption" color="muted" weight="medium" as="span">
            {planType}
          </Typography>
        </div>
        <Badge status={badgeConfig.status}>{badgeConfig.label}</Badge>
      </div>

      <Divider spacing="sm" />

      <DescriptionList items={items} layout="grid" columns={2} />
    </Card>
  );
}
