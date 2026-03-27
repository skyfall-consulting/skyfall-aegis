import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',

  // Brand
  brandTitle: 'Skyfall Aegis',
  brandUrl: 'https://skyfall.consulting',
  brandImage: '/skyfall_aegis_logo.png',
  brandTarget: '_self',

  // Colors — dark premium palette with selective gold accent
  colorPrimary: '#C8A24E',
  colorSecondary: '#C8A24E',

  // UI chrome
  appBg: '#0F1318',
  appContentBg: '#151A21',
  appPreviewBg: '#FCFDFE',
  appBorderColor: '#2A3140',
  appBorderRadius: 6,

  // Text
  textColor: '#E2E6EC',
  textInverseColor: '#0F1318',
  textMutedColor: '#8892A0',

  // Toolbar
  barTextColor: '#8892A0',
  barHoverColor: '#C8A24E',
  barSelectedColor: '#C8A24E',
  barBg: '#12171E',

  // Inputs
  inputBg: '#1A2028',
  inputBorder: '#2A3140',
  inputTextColor: '#E2E6EC',
  inputBorderRadius: 4,

  // Booleans
  booleanBg: '#1A2028',
  booleanSelectedBg: '#C8A24E',

  // Button
  buttonBg: '#1E2530',
  buttonBorder: '#2A3140',

  // Grid
  gridCellSize: 12,
});
