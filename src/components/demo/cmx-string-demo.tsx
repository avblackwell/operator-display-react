import { useId } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CmxStringDemo() {
  const id = useId();
  return (
    <>
      <div className="grid gap-6">
        <div className="*:not-first:mt-2">
          <Label htmlFor={id}>ASSET_VER</Label>
          <div className="flex rounded-md shadow-xs">
            <Input
              id={id}
              className=" shadow-none"
              defaultValue="1.0.0"
              type="text"
            />
          </div>
        </div>
        <div className="*:not-first:mt-2">
          <div className="flex rounded-md shadow-xs">
            <span className="border-input text-muted-foreground inline-flex items-center rounded-s-md border px-3 text-sm">
              ASSET_VER
            </span>
            <Input
              id={id}
              className="-ms-px  rounded-s-none shadow-none"
              defaultValue="1.0.0"
              type="text"
            />
          </div>
        </div>
        <div className="*:not-first:mt-2">
          <Label htmlFor={id}>ASSET_VER</Label>
          <div className="flex rounded-md shadow-xs">
            <Input
              id={id}
              readOnly
              className="read-only:bg-muted shadow-none"
              defaultValue="1.0.0"
              type="text"
            />
          </div>
        </div>
        <div className="*:not-first:mt-2">
          <div className="flex rounded-md shadow-xs">
            <span className="border-input text-muted-foreground inline-flex items-center rounded-s-md border px-3 text-sm">
              ASSET_VER
            </span>
            <Input
              id={id}
              readOnly
              className="read-only:bg-muted -ms-px  rounded-s-none shadow-none"
              defaultValue="1.0.0"
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  );
}
