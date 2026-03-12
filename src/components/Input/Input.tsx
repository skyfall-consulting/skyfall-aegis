import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import styles from './Input.module.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Size of the input control */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
  /** Full width */
  fullWidth?: boolean;
}

/**
 * Input — single-line text input.
 *
 * Accessibility:
 * - Use with <Label> and associate via htmlFor/id
 * - Use aria-describedby to link to HelperText or error messages
 * - aria-invalid signals error state to assistive technology
 * - Visible border change + color signals error (not color alone)
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'md', error = false, fullWidth = false, className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        styles.input,
        styles[size],
        error && styles.error,
        fullWidth && styles.fullWidth,
        className,
      )}
      aria-invalid={error || undefined}
      {...props}
    />
  ),
);

Input.displayName = 'Input';
