"use client";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Demonstrates basic and multi-series scatter plots.";

// Data for Basic Scatter Plot
const data1 = [
  { x: 10, y: 30 }, { x: 30, y: 200 }, { x: 45, y: 100 }, { x: 50, y: 180 },
  { x: 70, y: 260 }, { x: 90, y: 150 }, { x: 110, y: 290 }, { x: 130, y: 240 },
];

const basicChartConfig = {
  seriesA: { label: "Series A", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig;

// Data for Scatter Plot with Multiple Series
const dataSeries1 = [
  { x: 100, y: 200, z: 200 }, { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 }, { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 }, { x: 110, y: 280, z: 200 },
];
const dataSeries2 = [
  { x: 200, y: 100, z: 220 }, { x: 220, y: 80, z: 200 },
  { x: 270, y: 200, z: 300 }, { x: 240, y: 150, z: 210 },
  { x: 250, y: 300, z: 400 }, { x: 210, y: 180, z: 280 },
];
const dataSeries3 = [
  { x: 60, y: 70, z: 120 }, { x: 80, y: 60, z: 100 },
  { x: 100, y: 120, z: 150 }, { x: 70, y: 90, z: 110 },
  { x: 90, y: 130, z: 160 }, { x: 50, y: 80, z: 100 },
];


const multiSeriesChartConfig = {
  series1: { label: "Series 1", color: "hsl(var(--chart-1))" },
  series2: { label: "Series 2", color: "hsl(var(--chart-2))" },
  series3: { label: "Series 3", color: "hsl(var(--chart-3))" }, // Added a third series for demonstration
} satisfies ChartConfig;

export function ScatterPlotDemo() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Basic Scatter Plot</CardTitle>
          <CardDescription>Single data series</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={basicChartConfig} className="h-[300px] w-full">
            <ScatterChart
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="X-Value" unit=" units" />
              <YAxis type="number" dataKey="y" name="Y-Value" unit=" units" />
              <ChartTooltip
                cursor={{ strokeDasharray: '3 3' }}
                content={<ChartTooltipContent />}
              />
              <ChartLegend content={<ChartLegendContent />} />
              <Scatter nameKey="seriesA" data={data1} fill="var(--color-seriesA)" />
            </ScatterChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Scatter Plot with Multiple Series</CardTitle>
          <CardDescription>Three distinct data series</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={multiSeriesChartConfig} className="h-[300px] w-full">
            <ScatterChart
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="X-Value" unit=" units" />
              <YAxis type="number" dataKey="y" name="Y-Value" unit=" units" />
              <ChartTooltip
                cursor={{ strokeDasharray: '3 3' }}
                content={<ChartTooltipContent />}
              />
              <ChartLegend content={<ChartLegendContent />} />
              <Scatter nameKey="series1" data={dataSeries1} fill="var(--color-series1)" shape="star" />
              <Scatter nameKey="series2" data={dataSeries2} fill="var(--color-series2)" shape="triangle" />
              <Scatter nameKey="series3" data={dataSeries3} fill="var(--color-series3)" shape="circle" />
            </ScatterChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
