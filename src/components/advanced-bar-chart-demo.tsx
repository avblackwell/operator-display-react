"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
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

export const description = "Demonstrates advanced bar chart features like stacked bars and negative values.";

// Data for Stacked Bar Chart
const stackedData = [
  { name: 'Jan', desktop: 400, mobile: 240, tablet: 150 },
  { name: 'Feb', desktop: 300, mobile: 139, tablet: 210 },
  { name: 'Mar', desktop: 200, mobile: 980, tablet: 180 },
  { name: 'Apr', desktop: 278, mobile: 390, tablet: 200 },
  { name: 'May', desktop: 189, mobile: 480, tablet: 170 },
  { name: 'Jun', desktop: 239, mobile: 380, tablet: 250 },
];

const stackedChartConfig = {
  desktop: { label: "Desktop", color: "hsl(var(--chart-1))" },
  mobile: { label: "Mobile", color: "hsl(var(--chart-2))" },
  tablet: { label: "Tablet", color: "hsl(var(--chart-3))" },
} satisfies ChartConfig;

// Data for Bar Chart with Negative Values
const negativeData = [
  { name: 'Q1', profit: 4000, loss: -2400 },
  { name: 'Q2', profit: 3000, loss: -1398 },
  { name: 'Q3', profit: 2000, loss: -9800 },
  { name: 'Q4', profit: 2780, loss: -3908 },
  { name: 'Q5', profit: 1890, loss: -4800 },
  { name: 'Q6', profit: 2390, loss: -3800 },
];

const negativeChartConfig = {
  profit: { label: "Profit", color: "hsl(var(--chart-1))" },
  loss: { label: "Loss", color: "hsl(var(--chart-4))" }, // Using a different color for loss
} satisfies ChartConfig;

export function AdvancedBarChartDemo() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Stacked Bar Chart</CardTitle>
          <CardDescription>Monthly sales by device category</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={stackedChartConfig} className="h-[300px] w-full">
            <BarChart
              data={stackedData}
              margin={{
                top: 20, right: 30, left: 20, bottom: 5,
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
              <Bar dataKey="desktop" stackId="a" fill="var(--color-desktop)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="mobile" stackId="a" fill="var(--color-mobile)" />
              <Bar dataKey="tablet" stackId="a" fill="var(--color-tablet)" radius={[0, 0, 4, 4]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bar Chart with Negative Values</CardTitle>
          <CardDescription>Quarterly profit and loss</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={negativeChartConfig} className="h-[300px] w-full">
            <BarChart
              data={negativeData}
              margin={{
                top: 20, right: 30, left: 20, bottom: 5,
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
              <ReferenceLine y={0} stroke="#000" strokeDasharray="3 3" />
              <Bar dataKey="profit" fill="var(--color-profit)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="loss" fill="var(--color-loss)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
