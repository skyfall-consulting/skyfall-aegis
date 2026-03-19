import { type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import styles from './StatusBadge.module.css';

export type StatusBadgeStatus =
  | 'active'
  | 'inactive'
  | 'pending'
  | 'critical'
  | 'discharged'
  | 'scheduled'
  | 'cancelled'
  | 'in-progress';

export interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Healthcare status */
  status: StatusBadgeStatus;
  /** Size variant */
  size?: 'sm' | 'md';
  /** Show a colored status dot before the label */
  dot?: boolean;
}

const statusLabels: Record<StatusBadgeStatus, string> = {
  active: 'Active',
  inactive: 'Inactive',
  pending: 'Pending',
  critical: 'Critical',
  discharged: 'Discharged',
  scheduled: 'Scheduled',
  cancelled: 'Cancelled',
  'in-progress': 'In Progress',
};

/**
 * StatusBadge — enhanced badge for healthcare workflow statuses.
 *
 * Accessibility:
 * - Always displays text label alongside color to avoid color-only indication
 * - Healthcare note: maps each clinical status to an appropriate semantic
 *   color (critical = red, active = green, pending = amber, etc.)
 */
export function StatusBadge({
  status,
  size = 'md',
  dot = false,
  className,
  children,
  ...props
}: StatusBadgeProps) {
  return (
    <span
      className={cn(styles.badge, styles[status], styles[size], className)}
      {...props}
    >
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {children ?? statusLabels[status]}
    </span>
  );
}
