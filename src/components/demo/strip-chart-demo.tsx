"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A simple strip chart";

const chartData = [
  { date: "2024-01-01", value: 10 },
  { date: "2024-01-02", value: 10 },
  { date: "2024-01-03", value: 10 },
  { date: "2024-01-04", value: 10 },
  { date: "2024-01-05", value: 10 },
  { date: "2024-01-06", value: 10 },
  { date: "2024-01-07", value: 10 },
];

const chartConfig = {
  value: {
    label: "Value",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function StripChartDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Strip Chart</CardTitle>
        <CardDescription>Data points over a period</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            />
            <YAxis dataKey="value" hide={true} domain={[0, 20]} /> {/* Hide Y-axis but set domain for line positioning */}
            <Tooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Line
              dataKey="value"
              type="monotone"
              stroke="var(--color-value)"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="text-muted-foreground flex items-center gap-2 text-sm leading-none">
          Showing a series of data points.
        </div>
      </CardFooter>
    </Card>
  );
}
