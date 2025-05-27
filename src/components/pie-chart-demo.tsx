"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
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

export const description = "Demonstrates pie and donut chart types.";

// Data for Simple Pie Chart
const pieData = [
  { name: "Chrome", value: 68.6, fill: "var(--color-chrome)" },
  { name: "Safari", value: 18.5, fill: "var(--color-safari)" },
  { name: "Edge", value: 5.2, fill: "var(--color-edge)" },
  { name: "Firefox", value: 3.6, fill: "var(--color-firefox)" },
  { name: "Other", value: 4.1, fill: "var(--color-other)" },
];

const pieChartConfig = {
  value: {
    label: "Value", // Generic label, specific labels come from data
  },
  chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
  safari: { label: "Safari", color: "hsl(var(--chart-2))" },
  edge: { label: "Edge", color: "hsl(var(--chart-3))" },
  firefox: { label: "Firefox", color: "hsl(var(--chart-4))" },
  other: { label: "Other", color: "hsl(var(--chart-5))" },
} satisfies ChartConfig;


// Data for Donut Chart (can be the same or different)
const donutData = [
  { name: "USA", value: 400, fill: "var(--color-usa)" },
  { name: "India", value: 300, fill: "var(--color-india)" },
  { name: "Japan", value: 200, fill: "var(--color-japan)" },
  { name: "Germany", value: 150, fill: "var(--color-germany)" },
];

const donutChartConfig = {
  value: {
    label: "Value",
  },
  usa: { label: "USA", color: "hsl(var(--chart-1))" },
  india: { label: "India", color: "hsl(var(--chart-2))" },
  japan: { label: "Japan", color: "hsl(var(--chart-3))" },
  germany: { label: "Germany", color: "hsl(var(--chart-4))" },
} satisfies ChartConfig;


export function PieChartDemo() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Simple Pie Chart</CardTitle>
          <CardDescription>Browser market share (approx.)</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={pieChartConfig} className="mx-auto aspect-square max-h-[300px]">
            <PieChart>
              <ChartTooltip
                cursor={true}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((entry) => (
                  <Cell key={entry.name} fill={entry.fill} />
                ))}
              </Pie>
              <ChartLegend
                content={<ChartLegendContent nameKey="name" />}
                className="-translate-y-[0px] em:translate-y-0"
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Donut Chart</CardTitle>
          <CardDescription>Sample data distribution</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={donutChartConfig} className="mx-auto aspect-square max-h-[300px]">
            <PieChart>
              <ChartTooltip
                cursor={true}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={donutData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60} // This creates the donut hole
                outerRadius={100}
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {donutData.map((entry) => (
                  <Cell key={entry.name} fill={entry.fill} />
                ))}
              </Pie>
              <ChartLegend
                content={<ChartLegendContent nameKey="name" />}
                className="-translate-y-[0px] em:translate-y-0"
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
