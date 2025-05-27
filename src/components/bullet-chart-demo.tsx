"use client";

import { Bar, BarChart, CartesianGrid, ReferenceLine, XAxis, YAxis } from "recharts";

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
  ChartTooltip,
  ChartTooltipContent,
}
from "@/components/ui/chart";

export const description = "A simplified bullet chart";

const chartData = [
  { name: "Revenue", actual: 75, target: 85, range_poor: 40, range_average: 70, range_good: 100 },
  { name: "Profit", actual: 50, target: 60, range_poor: 20, range_average: 45, range_good: 80 },
  { name: "Satisfaction", actual: 90, target: 80, range_poor: 50, range_average: 80, range_good: 100 },
];

const chartConfig = {
  actual: {
    label: "Actual",
    color: "hsl(var(--chart-1))", // Main value color
  },
  target: {
    label: "Target",
    color: "hsl(var(--chart-2))", // Target line color
  },
  range_poor: {
    label: "Poor",
    color: "hsl(var(--chart-3))",
  },
  range_average: {
    label: "Average",
    color: "hsl(var(--chart-4))",
  },
  range_good: {
    label: "Good",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function BulletChartDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bullet Chart (Simplified)</CardTitle>
        <CardDescription>Showing actual vs. target with performance ranges.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart
            layout="vertical"
            data={chartData}
            margin={{ left: 10, right: 10, top: 10, bottom: 10 }}
            barCategoryGap="20%" // Adds space between different category bars (Revenue, Profit)
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              axisLine={false}
              tickMargin={5}
              hide={false}
            />
            <XAxis dataKey="range_good" type="number" hide={true} domain={[0, 'dataMax + 10']} /> {/* Base for ranges */}
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            {/* Background Ranges - rendered first to be in the background */}
            <Bar dataKey="range_good"    stackId="a" fill="var(--color-range_good)"    barSize={30} radius={[5, 5, 5, 5]} />
            <Bar dataKey="range_average" stackId="a" fill="var(--color-range_average)" barSize={30} />
            <Bar dataKey="range_poor"    stackId="a" fill="var(--color-range_poor)"    barSize={30} radius={[5, 5, 5, 5]} />

            {/* Actual Value Bar - rendered on top of ranges */}
            {/* This bar is technically separate from the stack, but visually overlays it */}
            <Bar
              dataKey="actual"
              fill="var(--color-actual)"
              barSize={10} // Make it thinner to be distinct
              radius={[3, 3, 3, 3]}
            />

            {/* Target Lines - one for each data entry */}
            {chartData.map((entry) => (
              <ReferenceLine
                key={`target-${entry.name}`}
                x={entry.target}
                stroke="var(--color-target)"
                strokeWidth={2}
                // Position the line correctly for vertical layout.
                // This requires knowing the y-coordinate of the bar.
                // For simplicity, we'll assume recharts handles this if y is not specified for XAxis ReferenceLine
                // If precise positioning is needed, Segment or custom component might be required for the line.
                // However, ReferenceLine on XAxis with layout="vertical" should work per data point.
                // We need to ensure the YAxis provides the correct category for the line.
                // The `ifOverflow="extendDomain"` can be useful if targets are outside the main data range.
                // For this demo, we assume target is within range_good.
                y={entry.name} // This associates the ReferenceLine with the correct category on YAxis
                ifOverflow="visible"
              />
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
