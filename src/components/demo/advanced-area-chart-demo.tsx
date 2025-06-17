"use client";

import {
  AreaChart,
  Area,
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

export const description = "Demonstrates stacked area charts and area charts with gradient fills.";

// Data for Stacked Area Chart
const stackedData = [
  { name: 'Jan', organic: 400, social: 240, direct: 150 },
  { name: 'Feb', organic: 300, social: 139, direct: 210 },
  { name: 'Mar', organic: 200, social: 980, direct: 180 },
  { name: 'Apr', organic: 278, social: 390, direct: 200 },
  { name: 'May', organic: 189, social: 480, direct: 170 },
  { name: 'Jun', organic: 239, social: 380, direct: 250 },
];

const stackedChartConfig = {
  organic: { label: "Organic", color: "hsl(var(--chart-1))" },
  social: { label: "Social", color: "hsl(var(--chart-2))" },
  direct: { label: "Direct", color: "hsl(var(--chart-3))" },
} satisfies ChartConfig;

// Data for Area Chart with Gradient Fill
const gradientData = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const gradientChartConfig = {
  uv: { label: "UV", color: "hsl(var(--chart-1))" },
  // pv: { label: "PV", color: "hsl(var(--chart-2))" }, // Only showing one series for simplicity
} satisfies ChartConfig;


export function AdvancedAreaChartDemo() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Stacked Area Chart</CardTitle>
          <CardDescription>Monthly visitors by source</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={stackedChartConfig} className="h-[300px] w-full">
            <AreaChart
              data={stackedData}
              margin={{
                top: 10, right: 30, left: 0, bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip
                cursor={true}
                content={<ChartTooltipContent />}
              />
              <ChartLegend content={<ChartLegendContent />} />
              <Area type="monotone" dataKey="organic" stackId="1" stroke="var(--color-organic)" fill="var(--color-organic)" />
              <Area type="monotone" dataKey="social" stackId="1" stroke="var(--color-social)" fill="var(--color-social)" />
              <Area type="monotone" dataKey="direct" stackId="1" stroke="var(--color-direct)" fill="var(--color-direct)" />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Area Chart with Gradient Fill</CardTitle>
          <CardDescription>UV data over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={gradientChartConfig} className="h-[300px] w-full">
            <AreaChart
              data={gradientData}
              margin={{
                top: 10, right: 30, left: 0, bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-uv)" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="var(--color-uv)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false}/>
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip
                cursor={true}
                content={<ChartTooltipContent />}
              />
               {/* Legend can be optional if only one series is prominent */}
              <ChartLegend content={<ChartLegendContent />} />
              <Area type="monotone" dataKey="uv" stroke="var(--color-uv)" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
