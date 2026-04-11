import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Portal } from './Portal';

const meta: Meta<typeof Portal> = {
  title: 'Components/Utils/Portal',
  component: Portal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Portal>;

export const Default: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <div style={{ fontFamily: 'var(--aegis-font-family-sans)', fontSize: 14 }}>
        <button
          onClick={() => setShow((v) => !v)}
          style={{
            padding: '8px 16px',
            borderRadius: 8,
            border: '1px solid var(--aegis-color-border-default)',
            background: 'var(--aegis-color-surface-default)',
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          {show ? 'Hide' : 'Show'} Portal Content
        </button>
        {show && (
          <Portal>
            <div
              style={{
                position: 'fixed',
                bottom: 24,
                right: 24,
                padding: '12px 20px',
                background: 'var(--aegis-color-neutral-900)',
                color: 'white',
                borderRadius: 8,
                boxShadow: 'var(--aegis-shadow-lg)',
                fontFamily: 'var(--aegis-font-family-sans)',
                fontSize: 14,
                zIndex: 9999,
              }}
            >
              This is rendered via Portal at document.body
            </div>
          </Portal>
        )}
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ fontFamily: 'var(--aegis-font-family-sans)', fontSize: 14, padding: 16, border: '2px dashed var(--aegis-color-border-default)', borderRadius: 8 }}>
      <p>Portal is disabled — content renders inline:</p>
      <Portal disabled>
        <div style={{ marginTop: 8, padding: 12, background: 'var(--aegis-color-surface-subtle)', borderRadius: 6 }}>
          This content renders inline (no portal)
        </div>
      </Portal>
    </div>
  ),
};
