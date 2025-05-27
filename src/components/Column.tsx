import { CollisionPriority } from "@dnd-kit/abstract";
import { useSortable } from "@dnd-kit/react/sortable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export interface Props {
  id: string;
  index: number;
  children: React.ReactNode;
}

export function Column({ id, index, children }: Props) {
  const { ref } = useSortable({
    id,
    index,
    type: "column",
    collisionPriority: CollisionPriority.Low,
    accept: ["item", "column"],
  });

  return (
    <Card ref={ref} className="w-64 h-96">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{id}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Drag and drop items here
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-2">{children}</CardContent>
    </Card>
  );
}
