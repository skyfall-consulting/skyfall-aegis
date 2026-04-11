import type { Meta, StoryObj } from '@storybook/react';
import {
  brandPrimary,
  accentTeal,
  neutral,
  semantic,
  text,
  surface,
  border,
  dataVis,
} from '../tokens/colors';
import { fontFamily, fontWeight, fontSize, lineHeight } from '../tokens/typography';
import { space } from '../tokens/spacing';
import { radius } from '../tokens/radius';
import { shadow } from '../tokens/shadows';

/* ------------------------------------------------------------------ */
/*  Swatch                                                             */
/* ------------------------------------------------------------------ */
const Swatch = ({ color, label }: { color: string; label: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 6,
        background: color,
        border: '1px solid rgba(0,0,0,0.08)',
        flexShrink: 0,
      }}
    />
    <span style={{ fontFamily: 'monospace', fontSize: 13, color: '#334155' }}>{label}</span>
    <span style={{ fontFamily: 'monospace', fontSize: 12, color: '#66768A' }}>{color}</span>
  </div>
);

const PaletteSection = ({ title, palette }: { title: string; palette: Record<string, string> }) => (
  <div style={{ marginBottom: 32 }}>
    <h3 style={{ margin: '0 0 12px', fontSize: 16, fontWeight: 600, color: '#16202B' }}>{title}</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {Object.entries(palette).map(([key, value]) => (
        <Swatch key={key} color={value} label={key} />
      ))}
    </div>
  </div>
);

const SpaceRow = ({ name, value }: { name: string; value: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
    <span style={{ fontFamily: 'monospace', fontSize: 13, width: 60, color: '#334155' }}>{name}</span>
    <div style={{ height: 16, background: '#2F6FE4', borderRadius: 3, width: value === '0' ? 1 : parseInt(value) }} />
    <span style={{ fontFamily: 'monospace', fontSize: 12, color: '#66768A' }}>{value}</span>
  </div>
);

const RadiusBox = ({ name, value }: { name: string; value: string }) => (
  <div style={{ textAlign: 'center', marginBottom: 8 }}>
    <div
      style={{
        width: 56,
        height: 56,
        border: '2px solid #2F6FE4',
        borderRadius: value,
        margin: '0 auto 6px',
      }}
    />
    <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#334155' }}>{name}</div>
    <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#66768A' }}>{value}</div>
  </div>
);

const ShadowBox = ({ name, value }: { name: string; value: string }) => (
  <div style={{ textAlign: 'center', marginBottom: 16 }}>
    <div
      style={{
        width: 80,
        height: 56,
        background: '#FFFFFF',
        borderRadius: 10,
        boxShadow: value,
        margin: '0 auto 8px',
      }}
    />
    <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#334155' }}>{name}</div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Token page                                                         */
/* ------------------------------------------------------------------ */
const TokensPage = () => (
  <div style={{ maxWidth: 820, fontFamily: fontFamily.sans }}>
    <h1 style={{ fontSize: 28, fontWeight: 700, margin: '0 0 4px', color: '#16202B' }}>Design Tokens</h1>
    <p style={{ fontSize: 14, color: '#66768A', margin: '0 0 32px' }}>
      The atomic values that define the Aegis visual language.
    </p>

    {/* Colors */}
    <h2 style={{ fontSize: 20, fontWeight: 600, margin: '0 0 16px', color: '#16202B' }}>Color</h2>
    <PaletteSection title="Brand Primary" palette={brandPrimary} />
    <PaletteSection title="Accent Teal" palette={accentTeal} />
    <PaletteSection title="Neutral" palette={neutral} />
    <PaletteSection title="Success" palette={semantic.success as unknown as Record<string, string>} />
    <PaletteSection title="Warning" palette={semantic.warning as unknown as Record<string, string>} />
    <PaletteSection title="Error" palette={semantic.error as unknown as Record<string, string>} />
    <PaletteSection title="Info" palette={semantic.info as unknown as Record<string, string>} />
    <PaletteSection title="Text" palette={text} />
    <PaletteSection title="Surface" palette={surface} />
    <PaletteSection title="Border" palette={border} />
    <PaletteSection title="Data Visualization" palette={dataVis as unknown as Record<string, string>} />

    {/* Typography */}
    <h2 style={{ fontSize: 20, fontWeight: 600, margin: '40px 0 16px', color: '#16202B' }}>Typography</h2>
    <h3 style={{ margin: '0 0 12px', fontSize: 16, fontWeight: 600, color: '#16202B' }}>Font Family</h3>
    {Object.entries(fontFamily).map(([key, value]) => (
      <div key={key} style={{ marginBottom: 8 }}>
        <span style={{ fontFamily: value, fontSize: 16, color: '#16202B' }}>{key}: </span>
        <span style={{ fontFamily: 'monospace', fontSize: 12, color: '#66768A' }}>{value}</span>
      </div>
    ))}

    <h3 style={{ margin: '24px 0 12px', fontSize: 16, fontWeight: 600, color: '#16202B' }}>Font Weights</h3>
    {Object.entries(fontWeight).map(([key, value]) => (
      <div key={key} style={{ marginBottom: 4, fontSize: 14, fontWeight: value, color: '#16202B' }}>
        {key} ({value})
      </div>
    ))}

    <h3 style={{ margin: '24px 0 12px', fontSize: 16, fontWeight: 600, color: '#16202B' }}>Type Scale</h3>
    {Object.entries(fontSize).map(([key, size]) => (
      <div key={key} style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
        <span style={{ fontSize: size, lineHeight: lineHeight[key as keyof typeof lineHeight], color: '#16202B', whiteSpace: 'nowrap' }}>
          {key}
        </span>
        <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#66768A' }}>
          {size} / {lineHeight[key as keyof typeof lineHeight]}
        </span>
      </div>
    ))}

    {/* Spacing */}
    <h2 style={{ fontSize: 20, fontWeight: 600, margin: '40px 0 16px', color: '#16202B' }}>Spacing</h2>
    {Object.entries(space).map(([key, value]) => (
      <SpaceRow key={key} name={`space-${key}`} value={value} />
    ))}

    {/* Radius */}
    <h2 style={{ fontSize: 20, fontWeight: 600, margin: '40px 0 16px', color: '#16202B' }}>Radius</h2>
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      {Object.entries(radius).map(([key, value]) => (
        <RadiusBox key={key} name={key} value={value} />
      ))}
    </div>

    {/* Shadows */}
    <h2 style={{ fontSize: 20, fontWeight: 600, margin: '40px 0 16px', color: '#16202B' }}>Shadows</h2>
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      {Object.entries(shadow)
        .filter(([key]) => !key.startsWith('focus') && !key.startsWith('inset'))
        .map(([key, value]) => (
          <ShadowBox key={key} name={key} value={value} />
        ))}
    </div>
    <h3 style={{ margin: '16px 0 12px', fontSize: 14, fontWeight: 600, color: '#16202B' }}>Focus Rings</h3>
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      {Object.entries(shadow)
        .filter(([key]) => key.startsWith('focus'))
        .map(([key, value]) => (
          <ShadowBox key={key} name={key} value={value} />
        ))}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Components/Foundations/Tokens',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const AllTokens: Story = {
  render: () => <TokensPage />,
};
