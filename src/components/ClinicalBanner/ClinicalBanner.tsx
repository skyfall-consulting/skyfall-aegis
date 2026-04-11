import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import { Banner, type BannerStatus } from '../Banner/Banner';
import { Typography } from '../Typography/Typography';
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

/** Map clinical severity → Banner status */
const severityToBannerStatus: Record<ClinicalSeverity, BannerStatus> = {
  critical: 'error',
  high: 'warning',
  moderate: 'warning',
  low: 'info',
};

/**
 * ClinicalBanner — prominent banner for critical clinical alerts.
 *
 * Composes: Banner, Typography
 *
 * Wraps the core Banner component with healthcare-specific severity semantics
 * (critical / high / moderate / low) and an enhanced left-border accent.
 *
 * Accessibility:
 * - Inherits Banner's role="alert" for urgent statuses
 * - Icon + color + text ensures meaning is communicated multiple ways
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
    <Banner
      status={severityToBannerStatus[severity]}
      dismissible={dismissible}
      onDismiss={onDismiss}
      className={cn(styles.clinicalBanner, styles[severity], className)}
      {...props}
    >
      <Typography variant="body-md" weight="semibold" as="p" className={styles.title}>
        {title}
      </Typography>
      {children && (
        <Typography variant="body-sm" color="inherit" as="div" className={styles.body}>
          {children}
        </Typography>
      )}
    </Banner>
  );
}
