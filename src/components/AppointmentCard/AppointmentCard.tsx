import { type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { Card } from '../Card/Card';
import { StatusBadge } from '../StatusBadge/StatusBadge';
import { Typography } from '../Typography/Typography';
import styles from './AppointmentCard.module.css';

export type AppointmentStatus =
  | 'scheduled'
  | 'checked-in'
  | 'in-progress'
  | 'completed'
  | 'cancelled'
  | 'no-show';

export interface AppointmentCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Patient name */
  patientName: string;
  /** Appointment date */
  date: string;
  /** Appointment time */
  time: string;
  /** Appointment type (e.g., "Follow-up", "New Patient") */
  type: string;
  /** Provider / physician name */
  provider: string;
  /** Current appointment status */
  status: AppointmentStatus;
  /** Location or room */
  location?: string;
}

/** Map AppointmentStatus → StatusBadge status */
const statusBadgeMap: Record<AppointmentStatus, 'scheduled' | 'active' | 'in-progress' | 'inactive' | 'cancelled' | 'critical'> = {
  scheduled: 'scheduled',
  'checked-in': 'active',
  'in-progress': 'in-progress',
  completed: 'active',
  cancelled: 'cancelled',
  'no-show': 'critical',
};

const statusLabels: Record<AppointmentStatus, string> = {
  scheduled: 'Scheduled',
  'checked-in': 'Checked In',
  'in-progress': 'In Progress',
  completed: 'Completed',
  cancelled: 'Cancelled',
  'no-show': 'No Show',
};

/**
 * AppointmentCard — displays appointment summary with status indicator.
 *
 * Composes: Card, StatusBadge, Typography
 *
 * Accessibility:
 * - Uses role="region" with aria-label for context
 * - Status conveyed via text label, not color alone
 */
export function AppointmentCard({
  patientName,
  date,
  time,
  type,
  provider,
  status,
  location,
  className,
  ...props
}: AppointmentCardProps) {
  return (
    <Card
      elevation="raised"
      padding="none"
      className={cn(styles.card, className)}
      role="region"
      aria-label={`Appointment for ${patientName}`}
      {...props}
    >
      <div className={cn(styles.statusBar, styles[`bar-${status}`])} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.header}>
          <Typography variant="body-md" weight="semibold" as="h3">
            {patientName}
          </Typography>
          <StatusBadge status={statusBadgeMap[status]}>
            {statusLabels[status]}
          </StatusBadge>
        </div>

        <Typography variant="body-sm" color="secondary" as="p" className={styles.type}>
          {type}
        </Typography>

        <div className={styles.details}>
          <span className={styles.field}>
            <CalendarIcon />
            <Typography variant="body-sm" color="secondary" as="span">{date}</Typography>
          </span>
          <span className={styles.field}>
            <ClockIcon />
            <Typography variant="body-sm" color="secondary" as="span">{time}</Typography>
          </span>
          <span className={styles.field}>
            <UserIcon />
            <Typography variant="body-sm" color="secondary" as="span">{provider}</Typography>
          </span>
          {location && (
            <span className={styles.field}>
              <LocationIcon />
              <Typography variant="body-sm" color="secondary" as="span">{location}</Typography>
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}

/* ---- Inline icons (16×16, minimal healthcare-context icons) ---- */

function CalendarIcon() {
  return (
    <svg className={styles.icon} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M5 0a1 1 0 011 1v1h4V1a1 1 0 112 0v1h1.5A2.5 2.5 0 0116 4.5v9a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 010 13.5v-9A2.5 2.5 0 012.5 2H4V1a1 1 0 011-1zM2 6v7.5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V6H2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className={styles.icon} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2zm.5 2a.5.5 0 01.5.5V8h2a.5.5 0 010 1H8a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className={styles.icon} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0a5 5 0 014.9 5.9L8 14.5 3.1 5.9A5 5 0 018 0zm0 3a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className={styles.icon} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M2 2a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm2 0v12h8V2H4zm2 1h4v2H6V3z" />
    </svg>
  );
}
