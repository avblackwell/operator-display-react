import { useId, useState } from "react";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

function SwitchOne() {
  const id = useId();
  return (
    <div className="inline-flex items-center gap-2">
      <Switch id={id} />
      <Label htmlFor={id} className="sr-only">
        Simple switch
      </Label>
    </div>
  );
}

function SwitchTwo() {
  const id = useId();
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <div className="inline-flex items-center gap-2">
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={setChecked}
        aria-label="Toggle switch"
      />
      <Label htmlFor={id} className="text-sm font-medium">
        {checked ? "On" : "Off"}
      </Label>
    </div>
  );
}

function SwitchThree() {
  const id = useId();
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => setChecked((prev) => !prev);

  return (
    <div
      className="group inline-flex items-center gap-2"
      data-state={checked ? "checked" : "unchecked"}
    >
      <span
        id={`${id}-off`}
        className="group-data-[state=checked]:text-muted-foreground/70 flex-1 cursor-pointer text-right text-sm font-medium"
        aria-controls={id}
        onClick={() => setChecked(false)}
      >
        Off
      </span>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={toggleSwitch}
        aria-labelledby={`${id}-off ${id}-on`}
      />
      <span
        id={`${id}-on`}
        className="group-data-[state=unchecked]:text-muted-foreground/70 flex-1 cursor-pointer text-left text-sm font-medium"
        aria-controls={id}
        onClick={() => setChecked(true)}
      >
        On
      </span>
    </div>
  );
}

export function SwitchDemo() {
  return (
    <div className="flex flex-col gap-6">
      <SwitchOne />
      <SwitchTwo />
      <div className="flex items-center gap-2">
        <Switch id="switch-demo-airplane-mode" />
        <Label htmlFor="switch-demo-airplane-mode">Label</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          id="switch-demo-bluetooth"
          className="data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-600"
          defaultChecked
        />
        <Label htmlFor="switch-demo-bluetooth">Label</Label>
      </div>
      <Label className="flex items-center gap-6 rounded-lg border p-4 has-[[data-state=checked]]:border-blue-600">
        <div className="flex flex-col gap-1">
          <div className="font-medium">Switch</div>
          <div className="text-muted-foreground text-sm font-normal truncate">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <Switch
          id="switch-demo-focus-mode"
          className="data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-600"
        />
      </Label>
    </div>
  );
}
