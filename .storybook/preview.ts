import type { Preview } from '@storybook/react';
import '../src/tokens/aegis-tokens.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'error',
    },
    backgrounds: {
      values: [
        { name: 'Canvas', value: '#FCFDFE' },
        { name: 'White', value: '#FFFFFF' },
        { name: 'Subtle', value: '#F6F8FA' },
        { name: 'Dark', value: '#16202B' },
      ],
    },
    layout: 'centered',
  },
};

export default preview;
