import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './TopNav.module.css';

export interface TopNavProps extends HTMLAttributes<HTMLElement> {
  /** Logo or brand element */
  logo?: ReactNode;
  /** Navigation items (center/left area) */
  children?: ReactNode;
  /** Action elements on the right (profile, notifications, etc.) */
  actions?: ReactNode;
}

/**
 * TopNav — horizontal top navigation bar for application headers.
 *
 * Accessibility:
 * - Uses <header> with <nav> for semantic structure
 * - Navigation items should be provided as links or buttons
 * - Fixed height with clean horizontal layout
 */
export function TopNav({ logo, children, actions, className, ...props }: TopNavProps) {
  return (
    <header className={cn(styles.topNav, className)} {...props}>
      <div className={styles.inner}>
        {logo && <div className={styles.logo}>{logo}</div>}
        {children && (
          <nav aria-label="Main navigation" className={styles.nav}>
            {children}
          </nav>
        )}
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
    </header>
  );
}
