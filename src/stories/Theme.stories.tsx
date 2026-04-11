import type { Meta, StoryObj } from '@storybook/react';
import { neutral, brandPrimary, semantic, text, surface, border } from '../tokens/colors';
import { fontFamily } from '../tokens/typography';
import { shadow } from '../tokens/shadows';

const Card = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div
    style={{
      background: surface.default,
      border: `1px solid ${border.default}`,
      borderRadius: 10,
      padding: 24,
      boxShadow: shadow.sm,
      ...style,
    }}
  >
    {children}
  </div>
);

const ThemePage = () => (
  <div style={{ maxWidth: 820, fontFamily: fontFamily.sans }}>
    <h1 style={{ fontSize: 28, fontWeight: 700, margin: '0 0 4px', color: text.primary }}>Theme</h1>
    <p style={{ fontSize: 14, color: text.muted, margin: '0 0 32px' }}>
      Aegis surfaces, elevation, and semantic intent in context.
    </p>

    {/* Surface stack */}
    <h2 style={{ fontSize: 20, fontWeight: 600, margin: '0 0 16px', color: text.primary }}>Surface Hierarchy</h2>
    <div style={{ display: 'flex', gap: 16, marginBottom: 40 }}>
      {Object.entries(surface).map(([name, value]) => (
        <div
          key={name}
          style={{
            flex: 1,
            height: 100,
            background: value,
            borderRadius: 10,
            border: `1px solid ${border.default}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, color: text.primary }}>{name}</span>
          <span style={{ fontFamily: 'monospace', fontSize: 11, color: text.muted }}>{value}</span>
        </div>
      ))}
    </div>

    {/* Elevation */}
    <h2 style={{ fontSize: 20, fontWeight: 600, margin: '0 0 16px', color: text.primary }}>Elevation</h2>
    <div style={{ display: 'flex', gap: 20, marginBottom: 40 }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((level) => (
        <div
          key={level}
          style={{
            width: 100,
            height: 80,
            background: surface.default,
            borderRadius: 10,
            boxShadow: shadow[level],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontFamily: 'monospace', fontSize: 12, color: text.secondary }}>{level}</span>
        </div>
      ))}
    </div>

    {/* Semantic intent */}
    <h2 style={{ fontSize: 20, fontWeight: 600, margin: '0 0 16px', color: text.primary }}>Semantic Intent</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40 }}>
      {(['success', 'warning', 'error', 'info'] as const).map((status) => (
        <div
          key={status}
          style={{
            background: semantic[status][50],
            border: `1px solid ${semantic[status][500]}`,
            borderRadius: 10,
            padding: 16,
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 600, color: semantic[status][700], marginBottom: 4, textTransform: 'capitalize' }}>
            {status}
          </div>
          <div style={{ fontSize: 13, color: semantic[status][700] }}>
            Foreground: {semantic[status][700]} &middot; Background: {semantic[status][50]}
          </div>
        </div>
      ))}
    </div>

    {/* Sample card */}
    <h2 style={{ fontSize: 20, fontWeight: 600, margin: '0 0 16px', color: text.primary }}>Card Composition</h2>
    <div style={{ background: surface.canvas, borderRadius: 14, padding: 24 }}>
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: brandPrimary[500], display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 600, fontSize: 16 }}>A</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14, color: text.primary }}>Patient Record</div>
            <div style={{ fontSize: 13, color: text.muted }}>Updated today</div>
          </div>
        </div>
        <div style={{ fontSize: 13, color: text.secondary, lineHeight: '20px' }}>
          Aegis cards use the <strong>default</strong> surface with <strong>sm</strong> elevation
          and <strong>md</strong> radius. Text follows the primary / secondary / muted hierarchy.
        </div>
      </Card>
    </div>

    {/* Text hierarchy */}
    <h2 style={{ fontSize: 20, fontWeight: 600, margin: '40px 0 16px', color: text.primary }}>Text Hierarchy</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{ fontSize: 14, color: text.primary, fontWeight: 600 }}>Primary — {text.primary}</span>
      <span style={{ fontSize: 14, color: text.secondary }}>Secondary — {text.secondary}</span>
      <span style={{ fontSize: 14, color: text.muted }}>Muted — {text.muted}</span>
      <span style={{ fontSize: 14, color: text.inverse, background: neutral[900], padding: '4px 10px', borderRadius: 6, alignSelf: 'flex-start' }}>
        Inverse — {text.inverse}
      </span>
    </div>
  </div>
);

const meta: Meta = {
  title: 'Components/Foundations/Themes',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Overview: Story = {
  render: () => <ThemePage />,
};
