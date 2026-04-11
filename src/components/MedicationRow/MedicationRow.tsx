import { type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { StatusBadge, type StatusBadgeStatus } from '../StatusBadge/StatusBadge';
import { Typography } from '../Typography/Typography';
import styles from './MedicationRow.module.css';

export type MedicationStatus = 'active' | 'discontinued' | 'hold' | 'prn';

export interface MedicationRowProps extends HTMLAttributes<HTMLDivElement> {
  /** Medication name */
  name: string;
  /** Dosage (e.g., "10mg") */
  dosage: string;
  /** Frequency (e.g., "Once daily") */
  frequency: string;
  /** Route of administration (e.g., "Oral") */
  route: string;
  /** Prescribing physician */
  prescribedBy: string;
  /** Start date */
  startDate: string;
  /** End date */
  endDate?: string;
  /** Medication status */
  status: MedicationStatus;
}

/** Map MedicationStatus → StatusBadge status */
const statusBadgeMap: Record<MedicationStatus, { badge: StatusBadgeStatus; label: string }> = {
  active: { badge: 'active', label: 'Active' },
  discontinued: { badge: 'inactive', label: 'Discontinued' },
  hold: { badge: 'pending', label: 'On Hold' },
  prn: { badge: 'scheduled', label: 'PRN' },
};

/**
 * MedicationRow — compact horizontal display of medication details.
 *
 * Composes: StatusBadge, Typography
 *
 * Accessibility:
 * - Status communicated via text label, not color alone
 * - All information is available as text content for screen readers
 */
export function MedicationRow({
  name,
  dosage,
  frequency,
  route,
  prescribedBy,
  startDate,
  endDate,
  status,
  className,
  ...props
}: MedicationRowProps) {
  const badgeConfig = statusBadgeMap[status];

  return (
    <div
      className={cn(styles.row, status === 'discontinued' && styles.discontinued, className)}
      {...props}
    >
      <div className={styles.primary}>
        <StatusBadge status={badgeConfig.badge} size="sm" dot>
          {badgeConfig.label}
        </StatusBadge>
        <Typography
          variant="body-md"
          weight="semibold"
          as="span"
          className={cn(status === 'discontinued' && styles.strikethrough)}
        >
          {name}
        </Typography>
        <Typography variant="body-sm" color="secondary" as="span">
          {dosage}
        </Typography>
      </div>
      <div className={styles.secondary}>
        <span className={styles.detail}>
          <Typography variant="caption" color="muted" weight="medium" as="span">Freq:</Typography>
          {' '}
          <Typography variant="caption" color="secondary" as="span">{frequency}</Typography>
        </span>
        <span className={styles.detail}>
          <Typography variant="caption" color="muted" weight="medium" as="span">Route:</Typography>
          {' '}
          <Typography variant="caption" color="secondary" as="span">{route}</Typography>
        </span>
        <span className={styles.detail}>
          <Typography variant="caption" color="muted" weight="medium" as="span">By:</Typography>
          {' '}
          <Typography variant="caption" color="secondary" as="span">{prescribedBy}</Typography>
        </span>
        <span className={styles.detail}>
          <Typography variant="caption" color="muted" weight="medium" as="span">Start:</Typography>
          {' '}
          <Typography variant="caption" color="secondary" as="span">{startDate}</Typography>
        </span>
        {endDate && (
          <span className={styles.detail}>
            <Typography variant="caption" color="muted" weight="medium" as="span">End:</Typography>
            {' '}
            <Typography variant="caption" color="secondary" as="span">{endDate}</Typography>
          </span>
        )}
      </div>
    </div>
  );
}
