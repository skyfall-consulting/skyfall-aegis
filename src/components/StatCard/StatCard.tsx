import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './StatCard.module.css';

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Metric label */
  label: string;
  /** Metric value */
  value: string | number;
  /** Percentage change */
  change?: number;
  /** Label for the change (e.g. "vs last month") */
  changeLabel?: string;
  /** Trend direction */
  trend?: 'up' | 'down' | 'neutral';
  /** Optional icon */
  icon?: ReactNode;
}

const trendIcons: Record<string, ReactNode> = {
  up: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 3l5 5h-3v5H6V8H3l5-5z" />
    </svg>
  ),
  down: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 13l5-5h-3V3H6v5H3l5 5z" />
    </svg>
  ),
  neutral: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M2 7h12v2H2V7z" />
    </svg>
  ),
};

/**
 * StatCard — displays a key metric with optional trend indicator.
 *
 * @deprecated Prefer {@link KpiStatCard} from `@skyfall_ai/aegis` for new
 * dashboards. KpiStatCard supports inline sparklines, inverse trend
 * semantics, and integrates with the Aegis charting system. StatCard will
 * continue to work for existing usage.
 *
 * Accessibility:
 * - Trend icons are aria-hidden; meaning conveyed via visible text
 * - Uses semantic structure with clear label/value relationship
 * - sr-only text describes trend for screen readers
 */
export function StatCard({
  label,
  value,
  change,
  changeLabel,
  trend = 'neutral',
  icon,
  className,
  ...props
}: StatCardProps) {
  const formattedChange = change !== undefined
    ? `${change > 0 ? '+' : ''}${change}%`
    : undefined;

  return (
    <div className={cn(styles.card, className)} {...props}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        {icon && (
          <span className={styles.icon} aria-hidden="true">
            {icon}
          </span>
        )}
      </div>
      <div className={styles.value}>{value}</div>
      {formattedChange && (
        <div className={cn(styles.trend, styles[trend])}>
          {trendIcons[trend]}
          <span>{formattedChange}</span>
          {changeLabel && <span className={styles.changeLabel}>{changeLabel}</span>}
          <span className={styles.srOnly}>
            {trend === 'up' ? 'increase' : trend === 'down' ? 'decrease' : 'no change'}
          </span>
        </div>
      )}
    </div>
  );
}
