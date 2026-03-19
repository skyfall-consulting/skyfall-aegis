import { type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
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

const statusLabels: Record<InsuranceStatus, string> = {
  active: 'Active',
  inactive: 'Inactive',
  pending: 'Pending',
};

/**
 * InsuranceCard — displays insurance plan summary information.
 *
 * Accessibility:
 * - Uses role="region" with aria-label for screen reader context
 * - Status communicated via text label, not color alone
 * - Structured layout for easy scanning
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
  return (
    <div
      className={cn(styles.card, className)}
      role="region"
      aria-label={`Insurance: ${planName}`}
      {...props}
    >
      <div className={styles.header}>
        <div className={styles.planInfo}>
          <h3 className={styles.planName}>{planName}</h3>
          <span className={styles.planType}>{planType}</span>
        </div>
        <span className={cn(styles.statusBadge, styles[`status-${status}`])}>
          {statusLabels[status]}
        </span>
      </div>

      <div className={styles.details}>
        <div className={styles.field}>
          <span className={styles.label}>Member ID</span>
          <span className={styles.value}>{memberId}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>Group #</span>
          <span className={styles.value}>{groupNumber}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>Effective</span>
          <span className={styles.value}>{effectiveDate}</span>
        </div>
        {expirationDate && (
          <div className={styles.field}>
            <span className={styles.label}>Expires</span>
            <span className={styles.value}>{expirationDate}</span>
          </div>
        )}
      </div>
    </div>
  );
}
