import { useId } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CmxValueDemo() {
  const id = useId();
  return (
    <>
      <div className="grid gap-6">
        <div className="*:not-first:mt-2">
          <Label htmlFor={id}>blk_in_t</Label>
          <div className="flex rounded-md shadow-xs">
            <Input
              id={id}
              className="-me-px rounded-e-none shadow-none"
              defaultValue={60}
              type="number"
            />
            <span className="border-input text-muted-foreground inline-flex items-center rounded-e-md border px-3 text-sm">
              DEG_F
            </span>
          </div>
        </div>
        <div className="*:not-first:mt-2">
          <div className="flex rounded-md shadow-xs">
            <span className="border-input text-muted-foreground inline-flex items-center rounded-s-md border px-3 text-sm">
              blk_in_t
            </span>
            <Input
              id={id}
              className="-me-px -ms-px rounded-e-none rounded-s-none shadow-none"
              defaultValue={60}
              type="number"
            />
            <span className="border-input text-muted-foreground inline-flex items-center rounded-e-md border px-3 text-sm">
              DEG_F
            </span>
          </div>
        </div>
        <div className="*:not-first:mt-2">
          <Label htmlFor={id}>blk_in_t</Label>
          <div className="flex rounded-md shadow-xs">
            <Input
              id={id}
              readOnly
              className="read-only:bg-muted -me-px rounded-e-none shadow-none"
              defaultValue={60}
              type="number"
            />
            <span className="border-input text-muted-foreground inline-flex items-center rounded-e-md border px-3 text-sm">
              DEG_F
            </span>
          </div>
        </div>
        <div className="*:not-first:mt-2">
          <div className="flex rounded-md shadow-xs">
            <span className="border-input text-muted-foreground inline-flex items-center rounded-s-md border px-3 text-sm">
              blk_in_t
            </span>
            <Input
              id={id}
              readOnly
              className="read-only:bg-muted -me-px -ms-px rounded-e-none rounded-s-none shadow-none"
              defaultValue={60}
              type="number"
            />
            <span className="border-input text-muted-foreground inline-flex items-center rounded-e-md border px-3 text-sm">
              DEG_F
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
