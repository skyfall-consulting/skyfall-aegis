import type { Preview } from '@storybook/react';
import skyfallAegisTheme from './skyfallAegisTheme';
import '../src/tokens/aegis-tokens.css';
import './storybook.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: skyfallAegisTheme,
    },
    a11y: {
      test: 'error',
    },
    backgrounds: {
      default: 'White',
      values: [
        { name: 'White', value: '#FFFFFF' },
        { name: 'Canvas', value: '#FAFBFC' },
        { name: 'Subtle', value: '#F5F7FA' },
        { name: 'Dark', value: '#16202B' },
      ],
    },
    layout: 'centered',
    options: {
      storySort: {
        order: [
          'Foundations',
          ['Tokens', 'Themes', 'Icons'],
          'Inputs',
          'Data Display',
          'Feedback',
          'Surfaces',
          'Navigation',
          'Layout',
          'Utils',
          'Skyfall X',
          'Charts',
          'Healthcare',
        ],
      },
    },
  },
};

export default preview;
