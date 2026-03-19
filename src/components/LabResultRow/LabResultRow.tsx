import { type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import styles from './LabResultRow.module.css';

export type LabResultStatus = 'normal' | 'abnormal-high' | 'abnormal-low' | 'critical';

export interface LabResultRowProps extends HTMLAttributes<HTMLDivElement> {
  /** Test name (e.g., "White Blood Cells") */
  testName: string;
  /** Result value */
  value: string | number;
  /** Unit of measurement (e.g., "K/uL") */
  unit: string;
  /** Reference range (e.g., "4.5-11.0") */
  referenceRange: string;
  /** Result status */
  status: LabResultStatus;
  /** Date collected */
  collectedDate: string;
}

const statusLabels: Record<LabResultStatus, string> = {
  normal: 'Normal',
  'abnormal-high': 'High',
  'abnormal-low': 'Low',
  critical: 'Critical',
};

const statusArrow: Record<LabResultStatus, string> = {
  normal: '',
  'abnormal-high': '\u2191',
  'abnormal-low': '\u2193',
  critical: '\u2191\u2191',
};

/**
 * LabResultRow — displays a single lab test result with visual status indicator.
 *
 * Accessibility:
 * - Status conveyed via text label ("High", "Low", "Critical"), not color alone
 * - Arrow indicators are supplementary (aria-hidden)
 * - Screen readers receive full context through text content
 */
export function LabResultRow({
  testName,
  value,
  unit,
  referenceRange,
  status,
  collectedDate,
  className,
  ...props
}: LabResultRowProps) {
  const isAbnormal = status !== 'normal';

  return (
    <div
      className={cn(styles.row, styles[status], className)}
      {...props}
    >
      <div className={styles.testInfo}>
        <span className={styles.testName}>{testName}</span>
      </div>
      <div className={styles.result}>
        <span className={cn(styles.value, isAbnormal && styles.abnormalValue)}>
          {value}
          {statusArrow[status] && (
            <span className={styles.arrow} aria-hidden="true"> {statusArrow[status]}</span>
          )}
        </span>
        <span className={styles.unit}>{unit}</span>
      </div>
      <div className={styles.range}>
        <span className={styles.rangeLabel}>Ref:</span>
        <span className={styles.rangeValue}>{referenceRange}</span>
      </div>
      <div className={styles.meta}>
        <span className={cn(styles.statusBadge, styles[`badge-${status}`])}>
          {statusLabels[status]}
        </span>
        <span className={styles.date}>{collectedDate}</span>
      </div>
    </div>
  );
}
