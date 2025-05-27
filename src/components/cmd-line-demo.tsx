import { useId } from "react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { CommandDialog, CommandList } from "@/components/ui/command";
import { CommandEmpty } from "@/components/ui/command";
import { CommandGroup } from "@/components/ui/command";
import { CommandInput } from "@/components/ui/command";
import { CommandItem } from "@/components/ui/command";
import React from "react";

function CommandMenu() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

export default function CmdLineDemo() {
  const id = useId();
  return (
    <>
      <CommandMenu />

      <div className="flex items-start justify-center gap-2">
        <Textarea
          id={id}
          placeholder="Enter your command here..."
          defaultValue="echo 'Hello, World!'"
          className="field-sizing-content max-h-29.5 min-h-0 resize-none py-1.75 w-xl"
        />
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button variant="outline">History</Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            Yes. Free to use for personal and commercial projects. No
            attribution required.
          </CollapsibleContent>
        </Collapsible>
        <Button variant="outline">History</Button>
        <Button variant="outline">Execute</Button>
      </div>
    </>
  );
}
