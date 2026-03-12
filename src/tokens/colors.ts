/** Brand primary palette */
export const brandPrimary = {
  50: '#EEF4FF',
  100: '#DCE8FF',
  200: '#BED4FF',
  300: '#8FB7FF',
  400: '#5C92F2',
  500: '#2F6FE4',
  600: '#1F5CCD',
  700: '#1849A6',
  800: '#153B82',
  900: '#112E63',
} as const;

/** Support accent — teal */
export const accentTeal = {
  50: '#EDF9F8',
  100: '#D4F1EE',
  200: '#A9E0D9',
  300: '#77C9BE',
  400: '#48AE9F',
  500: '#2E8F83',
  600: '#237368',
  700: '#1D5D54',
} as const;

/** Neutral palette */
export const neutral = {
  0: '#FFFFFF',
  25: '#FCFDFE',
  50: '#F6F8FA',
  100: '#EDF1F5',
  200: '#DCE3EA',
  300: '#C1CBD6',
  400: '#93A1B2',
  500: '#66768A',
  600: '#4B5B6C',
  700: '#334155',
  800: '#223042',
  900: '#16202B',
} as const;

/** Semantic colors */
export const semantic = {
  success: { 50: '#EEF8F1', 500: '#2F8F57', 700: '#1F6B3D' },
  warning: { 50: '#FFF6E8', 500: '#B86A00', 700: '#8D4F00' },
  error: { 50: '#FFF0F0', 500: '#C23A3A', 700: '#8F2626' },
  info: { 50: '#EEF6FF', 500: '#2563B8', 700: '#1B4C8E' },
} as const;

/** Text aliases */
export const text = {
  primary: '#16202B',
  secondary: '#4B5B6C',
  muted: '#66768A',
  inverse: '#FFFFFF',
} as const;

/** Surface aliases */
export const surface = {
  canvas: '#FCFDFE',
  default: '#FFFFFF',
  subtle: '#F6F8FA',
  raised: '#FFFFFF',
} as const;

/** Border aliases */
export const border = {
  default: '#DCE3EA',
  strong: '#C1CBD6',
  inverse: '#334155',
} as const;

/** Data visualization */
export const dataVis = {
  1: '#2F6FE4',
  2: '#2E8F83',
  3: '#7B61C9',
  4: '#B86A00',
  5: '#C23A3A',
  gridline: '#DCE3EA',
  axis: '#66768A',
} as const;
