import { type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import styles from './Card.module.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Elevation level */
  elevation?: 'flat' | 'raised';
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Card — surface container for grouping related content.
 *
 * Accessibility:
 * - Uses semantic HTML; add role="region" + aria-label when card
 *   represents a distinct content section
 * - Border provides separation independent of shadow (not shadow alone)
 */
export function Card({ elevation = 'flat', padding = 'md', className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(styles.card, styles[elevation], styles[`pad-${padding}`], className)}
      {...props}
    >
      {children}
    </div>
  );
}
