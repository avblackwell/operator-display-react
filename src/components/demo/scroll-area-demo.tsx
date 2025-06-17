import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export function ScrollAreaDemo() {
  return (
    <div className="flex flex-col gap-6">
      <ScrollAreaVertical />
    </div>
  );
}

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

function ScrollAreaVertical() {
  return (
    <div className="flex flex-col gap-6">
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm leading-none font-medium">Tail</h4>
          {tags.map((tag) => (
            <React.Fragment key={tag}>
              <div className="text-sm">{tag}</div>
              <Separator className="my-2" />
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
