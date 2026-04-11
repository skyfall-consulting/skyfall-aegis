import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import { Card } from '../Card/Card';
import { Avatar } from '../Avatar/Avatar';
import { Badge } from '../Badge/Badge';
import { Typography } from '../Typography/Typography';
import { Chip } from '../Chip/Chip';
import { Divider } from '../Divider/Divider';
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
  /** Avatar image URL (preferred) */
  avatarSrc?: string;
  /**
   * @deprecated Use `avatarSrc` instead. Accepts a custom ReactNode for the avatar slot.
   * When both `avatar` and `avatarSrc` are provided, `avatarSrc` takes precedence.
   */
  avatar?: ReactNode;
  /** Patient status */
  status?: PatientStatus;
  /** Known allergies */
  allergies?: string[];
  /** Primary physician name */
  primaryPhysician?: string;
}

const statusBadgeMap: Record<PatientStatus, { status: 'success' | 'neutral' | 'error'; label: string }> = {
  active: { status: 'success', label: 'Active' },
  inactive: { status: 'neutral', label: 'Inactive' },
  critical: { status: 'error', label: 'Critical' },
};

/**
 * PatientCard — summary card displaying patient demographics and key info.
 *
 * Composes: Card, Avatar, Badge, Typography, Chip, Divider
 *
 * Accessibility:
 * - Uses role="region" with aria-label for screen readers
 * - Status communicated via text, not color alone
 * - Allergy list uses Chip components with semantic markup
 */
export function PatientCard({
  name,
  mrn,
  dob,
  age,
  gender,
  avatarSrc,
  avatar,
  status = 'active',
  allergies = [],
  primaryPhysician,
  className,
  ...props
}: PatientCardProps) {
  const badgeConfig = statusBadgeMap[status];

  // Render avatar: prefer avatarSrc (Avatar component), fall back to legacy avatar ReactNode
  const avatarElement = avatarSrc
    ? <Avatar name={name} src={avatarSrc} size="lg" />
    : avatar
      ? <div className={styles.legacyAvatar} aria-hidden="true">{avatar}</div>
      : <Avatar name={name} size="lg" />;

  return (
    <Card
      elevation="raised"
      padding="lg"
      className={cn(status === 'critical' && styles.critical, className)}
      role="region"
      aria-label={`Patient card for ${name}`}
      {...props}
    >
      <div className={styles.header}>
        {avatarElement}
        <div className={styles.identity}>
          <Typography variant="heading-sm" as="h3">{name}</Typography>
          <Typography variant="caption" color="muted">MRN: {mrn}</Typography>
        </div>
        <Badge status={badgeConfig.status}>{badgeConfig.label}</Badge>
      </div>

      <Divider spacing="sm" />

      <div className={styles.details}>
        <div className={styles.field}>
          <Typography variant="caption" color="muted" weight="medium" as="span">DOB</Typography>
          <Typography variant="body-sm" as="span">{dob}</Typography>
        </div>
        <div className={styles.field}>
          <Typography variant="caption" color="muted" weight="medium" as="span">Age</Typography>
          <Typography variant="body-sm" as="span">{age}</Typography>
        </div>
        <div className={styles.field}>
          <Typography variant="caption" color="muted" weight="medium" as="span">Gender</Typography>
          <Typography variant="body-sm" as="span">{gender}</Typography>
        </div>
        {primaryPhysician && (
          <div className={styles.field}>
            <Typography variant="caption" color="muted" weight="medium" as="span">PCP</Typography>
            <Typography variant="body-sm" as="span">{primaryPhysician}</Typography>
          </div>
        )}
      </div>

      {allergies.length > 0 && (
        <div className={styles.allergies}>
          <Typography variant="label-md" color="error" weight="semibold" as="span">
            Allergies:
          </Typography>
          <div className={styles.allergyList} role="list" aria-label="Patient allergies">
            {allergies.map((allergy) => (
              <Chip key={allergy} color="error" size="sm" variant="filled">
                {allergy}
              </Chip>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}
