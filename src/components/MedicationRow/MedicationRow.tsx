import { type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
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

const statusLabels: Record<MedicationStatus, string> = {
  active: 'Active',
  discontinued: 'Discontinued',
  hold: 'On Hold',
  prn: 'PRN',
};

/**
 * MedicationRow — compact horizontal display of medication details.
 *
 * Accessibility:
 * - Uses role="row" semantics through div structure
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
  return (
    <div
      className={cn(styles.row, styles[status], className)}
      {...props}
    >
      <div className={styles.primary}>
        <span className={cn(styles.statusIndicator, styles[`indicator-${status}`])} aria-hidden="true" />
        <span className={styles.name}>{name}</span>
        <span className={styles.dosage}>{dosage}</span>
        <span className={cn(styles.statusBadge, styles[`badge-${status}`])}>
          {statusLabels[status]}
        </span>
      </div>
      <div className={styles.secondary}>
        <span className={styles.detail}>
          <span className={styles.detailLabel}>Freq:</span> {frequency}
        </span>
        <span className={styles.detail}>
          <span className={styles.detailLabel}>Route:</span> {route}
        </span>
        <span className={styles.detail}>
          <span className={styles.detailLabel}>By:</span> {prescribedBy}
        </span>
        <span className={styles.detail}>
          <span className={styles.detailLabel}>Start:</span> {startDate}
        </span>
        {endDate && (
          <span className={styles.detail}>
            <span className={styles.detailLabel}>End:</span> {endDate}
          </span>
        )}
      </div>
    </div>
  );
}
