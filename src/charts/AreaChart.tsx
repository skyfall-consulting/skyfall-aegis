import {
  Area,
  AreaChart as RechartsAreaChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ChartCard, type ChartCardProps } from './ChartCard';
import { ChartLegend } from './ChartLegend';
import { ChartTooltip } from './ChartTooltip';
import {
  aegisChartTheme,
  defaultValueFormatter,
  getSeriesColor,
  type ChartSeries,
  type ValueFormatter,
} from './chartTheme';

export interface AreaChartProps<T extends Record<string, unknown>>
  extends Omit<ChartCardProps, 'children'> {
  data: T[];
  xKey: keyof T & string;
  series: ChartSeries<T>[];
  height?: number;
  showLegend?: boolean;
  showGrid?: boolean;
  /** Stack areas (false = overlapping) */
  stacked?: boolean;
  valueFormatter?: ValueFormatter;
  referenceLines?: { value: number; label?: string }[];
}

/**
 * Aegis AreaChart — for cumulative trend / volume visualization.
 *
 * Set `stacked` to true to stack series on top of each other (e.g. cohort
 * composition over time).
 */
export function AreaChart<T extends Record<string, unknown>>({
  data,
  xKey,
  series,
  height = 280,
  showLegend,
  showGrid = true,
  stacked = false,
  valueFormatter = defaultValueFormatter,
  referenceLines,
  state,
  ...cardProps
}: AreaChartProps<T>) {
  const effectiveState = state ?? (data.length === 0 ? 'empty' : 'ready');
  const showLegendFinal = showLegend ?? series.length > 1;

  return (
    <ChartCard state={effectiveState} {...cardProps}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsAreaChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
          <defs>
            {series.map((s, index) => {
              const color = getSeriesColor(index, s.color);
              return (
                <linearGradient
                  key={`grad-${s.dataKey}`}
                  id={`aegis-area-${s.dataKey}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor={color} stopOpacity={0.32} />
                  <stop offset="100%" stopColor={color} stopOpacity={0.02} />
                </linearGradient>
              );
            })}
          </defs>
          {showGrid && (
            <CartesianGrid
              vertical={false}
              stroke={aegisChartTheme.grid.stroke}
              strokeDasharray={aegisChartTheme.grid.strokeDasharray}
            />
          )}
          <XAxis
            dataKey={xKey}
            stroke={aegisChartTheme.axis.stroke}
            tick={{ fill: aegisChartTheme.axis.tickColor, fontSize: aegisChartTheme.axis.fontSize }}
            tickLine={false}
            axisLine={{ stroke: aegisChartTheme.grid.stroke }}
          />
          <YAxis
            stroke={aegisChartTheme.axis.stroke}
            tick={{ fill: aegisChartTheme.axis.tickColor, fontSize: aegisChartTheme.axis.fontSize }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => valueFormatter(v as number)}
            width={48}
          />
          <Tooltip
            cursor={{ stroke: aegisChartTheme.grid.stroke, strokeWidth: 1 }}
            content={<ChartTooltip valueFormatter={valueFormatter} />}
          />
          {showLegendFinal && <Legend content={<ChartLegend />} />}
          {referenceLines?.map((ref, i) => (
            <ReferenceLine
              key={`ref-${i}`}
              y={ref.value}
              stroke={aegisChartTheme.reference.stroke}
              strokeDasharray={aegisChartTheme.reference.strokeDasharray}
              label={
                ref.label
                  ? {
                      value: ref.label,
                      position: 'insideTopRight',
                      fill: aegisChartTheme.tooltip.muted,
                      fontSize: 11,
                    }
                  : undefined
              }
            />
          ))}
          {series.map((s, index) => {
            const color = getSeriesColor(index, s.color);
            return (
              <Area
                key={s.dataKey}
                type="monotone"
                dataKey={s.dataKey}
                name={s.label ?? s.dataKey}
                stroke={color}
                strokeWidth={2}
                fill={`url(#aegis-area-${s.dataKey})`}
                stackId={stacked ? 'aegis-stack' : undefined}
                isAnimationActive={false}
                activeDot={{ r: 5, strokeWidth: 0 }}
              />
            );
          })}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
