import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './ClinicalBanner.module.css';

export type ClinicalSeverity = 'critical' | 'high' | 'moderate' | 'low';

export interface ClinicalBannerProps extends HTMLAttributes<HTMLDivElement> {
  /** Severity level */
  severity: ClinicalSeverity;
  /** Banner title */
  title: string;
  /** Dismissible banner */
  dismissible?: boolean;
  /** Called when dismiss button is clicked */
  onDismiss?: () => void;
  /** Detail content */
  children?: ReactNode;
}

const severityIcons: Record<ClinicalSeverity, ReactNode> = {
  critical: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 0a10 10 0 110 20 10 10 0 010-20zm3.5 6.5a1 1 0 00-1.4 0L10 8.6 7.9 6.5a1 1 0 10-1.4 1.4L8.6 10l-2.1 2.1a1 1 0 101.4 1.4L10 11.4l2.1 2.1a1 1 0 001.4-1.4L11.4 10l2.1-2.1a1 1 0 000-1.4z" />
    </svg>
  ),
  high: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 0a10 10 0 110 20 10 10 0 010-20zm0 13a1 1 0 100 2 1 1 0 000-2zm0-8a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" />
    </svg>
  ),
  moderate: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 0a10 10 0 110 20 10 10 0 010-20zm0 8a1 1 0 00-1 1v5a1 1 0 102 0V9a1 1 0 00-1-1zm0-3.5a1 1 0 100 2 1 1 0 000-2z" />
    </svg>
  ),
  low: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 0a10 10 0 110 20 10 10 0 010-20zm0 8a1 1 0 00-1 1v5a1 1 0 102 0V9a1 1 0 00-1-1zm0-3.5a1 1 0 100 2 1 1 0 000-2z" />
    </svg>
  ),
};

/**
 * ClinicalBanner — prominent banner for critical clinical alerts.
 *
 * Accessibility:
 * - Uses role="alert" for immediate screen reader announcement
 * - Icon + color + text ensures meaning is communicated multiple ways
 * - Dismiss button has accessible label
 */
export function ClinicalBanner({
  severity,
  title,
  dismissible = false,
  onDismiss,
  children,
  className,
  ...props
}: ClinicalBannerProps) {
  return (
    <div
      className={cn(styles.banner, styles[severity], className)}
      role="alert"
      {...props}
    >
      <span className={styles.icon} aria-hidden="true">
        {severityIcons[severity]}
      </span>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        {children && <div className={styles.body}>{children}</div>}
      </div>
      {dismissible && (
        <button
          className={styles.dismiss}
          onClick={onDismiss}
          aria-label="Dismiss alert"
          type="button"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            <line x1="4" y1="4" x2="12" y2="12" />
            <line x1="12" y1="4" x2="4" y2="12" />
          </svg>
        </button>
      )}
    </div>
  );
}
