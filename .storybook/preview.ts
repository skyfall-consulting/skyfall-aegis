import type { Preview } from '@storybook/react-vite';
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
      options: {
        white: { name: 'White', value: '#FFFFFF' },
        canvas: { name: 'Canvas', value: '#FAFBFC' },
        subtle: { name: 'Subtle', value: '#F5F7FA' },
        dark: { name: 'Dark', value: '#16202B' }
      }
    },
    layout: 'centered',
    options: {
      storySort: {
        order: [
          'Overview',
          ['Introduction', 'Installation'],
          'Components',
          [
            'Foundations',
            [
              'Tokens',
              ['Colors', 'Typography', 'Spacing', 'Radius', 'Shadows', 'Motion', 'Focus'],
              'Theme',
              'Icons',
              'Typography',
            ],
            'Inputs',
            'Data Display',
            'Feedback',
            'Surfaces',
            'Navigation',
            'Layout',
            'Utils',
          ],
          'Aegis X',
          ['Charts', 'Healthcare'],
        ],
      },
    },
  },

  initialGlobals: {
    backgrounds: {
      value: 'white'
    }
  }
};

export default preview;
