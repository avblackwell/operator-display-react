import { useSortable } from "@dnd-kit/react/sortable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Grip } from "lucide-react";
import { Separator } from "./ui/separator";

export interface Props {
  id: string;
  index: number;
  children: React.ReactNode;
  column: string;
}

export function Item({ id, index, column }: Props) {
  const { ref, isDragging, handleRef } = useSortable({
    id,
    index,
    type: "item",
    accept: "item",
    group: column,
  });

  return (
    <Card ref={ref} data-dragging={isDragging}>
      <CardHeader className="gap-0">
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
      </CardHeader>
      <Separator />
      <CardContent>{id}</CardContent>
    </Card>
  );
}
