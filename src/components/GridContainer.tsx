import React from "react";
import { useSortable } from "@dnd-kit/react/sortable";
import { CollisionPriority } from "@dnd-kit/abstract";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Grip, Trash } from "lucide-react";
import { Separator } from "./ui/separator";

export interface Props {
  id: string;
  index: number;
  children: React.ReactNode;
  columns: number;
}

export function GridContainer({ id, index, children, columns }: Props) {
  const { ref, handleRef } = useSortable({
    id,
    index,
    type: "column",
    collisionPriority: CollisionPriority.Low,
    accept: ["item", "column"],
  });

  return (
    <Card ref={ref}>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-lg font-semibold">{id}</CardTitle>
      </CardHeader>

      {/* <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{id}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Drag and drop to reorder
            </CardDescription>
          </div>
          <Button ref={handleRef} variant="ghost" size="icon">
            <Grip className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader> */}
      <Separator />
      <CardContent>
        <ul
          className="max-w-3xl grid grid-cols-[repeat(var(--col-count),1fr)] max-md:grid-cols-[repeat(calc(var(--col-count) -2),1fr)] max-sm:grid-cols-[repeat(calc(var(--col-count) -1),1fr)] gap-3"
          style={
            {
              "--col-count": columns,
            } as React.CSSProperties
          }
        >
          {children}
        </ul>
      </CardContent>
    </Card>
  );
}
