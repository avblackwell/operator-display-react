"use client";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
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

export const description = "Demonstrates composed charts with combinations like Line/Bar and Area/Line.";

// Data for Line and Bar Composed Chart
const lineBarData = [
  { name: 'Jan', sales: 1200, avgTx: 50, targetSales: 1100 },
  { name: 'Feb', sales: 1500, avgTx: 55, targetSales: 1400 },
  { name: 'Mar', sales: 900,  avgTx: 48, targetSales: 1000 },
  { name: 'Apr', sales: 1800, avgTx: 60, targetSales: 1600 },
  { name: 'May', sales: 1300, avgTx: 52, targetSales: 1350 },
  { name: 'Jun', sales: 2100, avgTx: 65, targetSales: 1900 },
];

const lineBarChartConfig = {
  sales: { label: "Sales ($)", color: "hsl(var(--chart-1))", type: "bar" },
  avgTx: { label: "Avg. Transaction ($)", color: "hsl(var(--chart-2))", type: "line" },
  targetSales: { label: "Target Sales ($)", color: "hsl(var(--chart-3))", type: "line", strokeDasharray: "3 3" },
} satisfies ChartConfig;

// Data for Area and Line Composed Chart
const areaLineData = [
  { name: 'Jan', visitors: 2000, conversionRate: 0.05, prevVisitors: 1800 },
  { name: 'Feb', visitors: 2300, conversionRate: 0.055, prevVisitors: 2000 },
  { name: 'Mar', visitors: 2100, conversionRate: 0.048, prevVisitors: 2200 },
  { name: 'Apr', visitors: 2500, conversionRate: 0.06, prevVisitors: 2100 },
  { name: 'May', visitors: 2200, conversionRate: 0.052, prevVisitors: 2400 },
  { name: 'Jun', visitors: 2800, conversionRate: 0.065, prevVisitors: 2500 },
];

const areaLineChartConfig = {
  visitors: { label: "Visitors", color: "hsl(var(--chart-1))", type: "area" },
  conversionRate: { label: "Conversion Rate (%)", color: "hsl(var(--chart-2))", type: "line", valueFormatter: (value) => `${(value * 100).toFixed(1)}%` },
  prevVisitors: { label: "Previous Month Visitors", color: "hsl(var(--chart-4))", type: "line", strokeDasharray: "5 5" },
} satisfies ChartConfig;


export function ComposedChartDemo() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Line and Bar Composed Chart</CardTitle>
          <CardDescription>Monthly sales and average transaction value.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={lineBarChartConfig} className="h-[300px] w-full">
            <ComposedChart
              data={lineBarData}
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="var(--color-sales)" label={{ value: "Sales ($)", angle: -90, position: 'insideLeft' }} />
              <YAxis yAxisId="right" orientation="right" stroke="var(--color-avgTx)" label={{ value: "Avg. Tx ($)", angle: -90, position: 'insideRight' }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="sales" yAxisId="left" fill="var(--color-sales)" radius={[4, 4, 0, 0]} />
              <Line type="monotone" dataKey="avgTx" yAxisId="right" stroke="var(--color-avgTx)" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="targetSales" yAxisId="left" stroke="var(--color-targetSales)" strokeWidth={2} strokeDasharray="3 3" dot={false}/>
            </ComposedChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Area and Line Composed Chart</CardTitle>
          <CardDescription>Monthly website visitors and conversion rate.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={areaLineChartConfig} className="h-[300px] w-full">
            <ComposedChart
              data={areaLineData}
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="var(--color-visitors)" label={{ value: "Visitors", angle: -90, position: 'insideLeft' }}/>
              <YAxis yAxisId="right" orientation="right" stroke="var(--color-conversionRate)" label={{ value: "Conv. Rate (%)", angle: -90, position: 'insideRight' }} tickFormatter={(value) => (value * 100).toFixed(0)} />
              <ChartTooltip content={<ChartTooltipContent formatter={(value, name, props) => {
                if (props.dataKey === 'conversionRate') return `${(Number(value) * 100).toFixed(1)}%`;
                return String(value);
              }} />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Area type="monotone" dataKey="visitors" yAxisId="left" fill="var(--color-visitors)" stroke="var(--color-visitors)" />
              <Line type="monotone" dataKey="conversionRate" yAxisId="right" stroke="var(--color-conversionRate)" strokeWidth={2} dot={false}/>
              <Line type="monotone" dataKey="prevVisitors" yAxisId="left" stroke="var(--color-prevVisitors)" strokeWidth={2} strokeDasharray="5 5" dot={false}/>
            </ComposedChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
