import { type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { Badge } from '../Badge/Badge';
import { Typography } from '../Typography/Typography';
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

const statusBadgeMap: Record<LabResultStatus, { status: 'success' | 'warning' | 'info' | 'error'; label: string }> = {
  normal: { status: 'success', label: 'Normal' },
  'abnormal-high': { status: 'warning', label: 'High' },
  'abnormal-low': { status: 'info', label: 'Low' },
  critical: { status: 'error', label: 'Critical' },
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
 * Composes: Badge, Typography
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
  const badgeConfig = statusBadgeMap[status];
  const arrow = statusArrow[status];

  return (
    <div
      className={cn(styles.row, styles[status], className)}
      {...props}
    >
      <div className={styles.testInfo}>
        <Typography variant="body-sm" weight="medium" as="span">{testName}</Typography>
      </div>
      <div className={styles.result}>
        <Typography
          variant="body-md"
          weight={isAbnormal ? 'bold' : 'semibold'}
          as="span"
          className={cn(styles.value, isAbnormal && styles[`value-${status}`])}
        >
          {value}
          {arrow && (
            <span className={styles.arrow} aria-hidden="true"> {arrow}</span>
          )}
        </Typography>
        <Typography variant="caption" color="muted" as="span">{unit}</Typography>
      </div>
      <div className={styles.range}>
        <Typography variant="caption" color="muted" weight="medium" as="span">Ref:</Typography>
        <Typography variant="caption" color="secondary" as="span">{referenceRange}</Typography>
      </div>
      <div className={styles.meta}>
        <Badge status={badgeConfig.status}>{badgeConfig.label}</Badge>
        <Typography variant="caption" color="muted" as="span">{collectedDate}</Typography>
      </div>
    </div>
  );
}
