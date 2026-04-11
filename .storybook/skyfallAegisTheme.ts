import { create } from 'storybook/theming/create';

export default create({
  base: 'light',

  // Brand
  brandTitle: 'Skyfall Aegis',
  brandUrl: 'https://skyfall.consulting',
  brandImage: '/aegis_logo_blue.png',
  brandTarget: '_self',

  // Colors — clean blue accent
  colorPrimary: '#1A73E8',
  colorSecondary: '#1A73E8',

  // UI chrome — white and airy
  appBg: '#FAFBFC',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#E5E8EB',
  appBorderRadius: 8,

  // Text
  textColor: '#1A2332',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#6B7685',

  // Toolbar
  barTextColor: '#6B7685',
  barHoverColor: '#1A73E8',
  barSelectedColor: '#1A73E8',
  barBg: '#FFFFFF',

  // Inputs
  inputBg: '#FFFFFF',
  inputBorder: '#DFE3E8',
  inputTextColor: '#1A2332',
  inputBorderRadius: 6,

  // Booleans
  booleanBg: '#F0F2F5',
  booleanSelectedBg: '#1A73E8',

  // Button
  buttonBg: '#F5F7FA',
  buttonBorder: '#DFE3E8',

  // Grid
  gridCellSize: 12,
});
