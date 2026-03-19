import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './PatientCard.module.css';

export type PatientStatus = 'active' | 'inactive' | 'critical';

export interface PatientCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Patient full name */
  name: string;
  /** Medical record number */
  mrn: string;
  /** Date of birth */
  dob: string;
  /** Patient age */
  age: number;
  /** Patient gender */
  gender: string;
  /** Avatar element */
  avatar?: ReactNode;
  /** Patient status */
  status?: PatientStatus;
  /** Known allergies */
  allergies?: string[];
  /** Primary physician name */
  primaryPhysician?: string;
}

const statusLabels: Record<PatientStatus, string> = {
  active: 'Active',
  inactive: 'Inactive',
  critical: 'Critical',
};

/**
 * PatientCard — summary card displaying patient demographics and key info.
 *
 * Accessibility:
 * - Uses role="region" with aria-label for screen readers
 * - Status communicated via text, not color alone
 * - Allergy list uses semantic <ul> element
 */
export function PatientCard({
  name,
  mrn,
  dob,
  age,
  gender,
  avatar,
  status = 'active',
  allergies = [],
  primaryPhysician,
  className,
  ...props
}: PatientCardProps) {
  return (
    <div
      className={cn(styles.card, styles[status], className)}
      role="region"
      aria-label={`Patient card for ${name}`}
      {...props}
    >
      <div className={styles.header}>
        {avatar && <div className={styles.avatar} aria-hidden="true">{avatar}</div>}
        <div className={styles.identity}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.mrn}>MRN: {mrn}</span>
        </div>
        <span className={cn(styles.statusBadge, styles[`status-${status}`])}>
          {statusLabels[status]}
        </span>
      </div>

      <div className={styles.details}>
        <div className={styles.field}>
          <span className={styles.label}>DOB</span>
          <span className={styles.value}>{dob}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>Age</span>
          <span className={styles.value}>{age}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>Gender</span>
          <span className={styles.value}>{gender}</span>
        </div>
        {primaryPhysician && (
          <div className={styles.field}>
            <span className={styles.label}>PCP</span>
            <span className={styles.value}>{primaryPhysician}</span>
          </div>
        )}
      </div>

      {allergies.length > 0 && (
        <div className={styles.allergies}>
          <span className={styles.allergiesLabel}>Allergies:</span>
          <ul className={styles.allergyList}>
            {allergies.map((allergy) => (
              <li key={allergy} className={styles.allergyItem}>{allergy}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
