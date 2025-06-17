"use client";

import { Button } from "@/components/ui/button";
import { Mail, PlusCircle, Trash2, Loader2, CheckCircle, UserPlus } from "lucide-react";

export function ButtonVariantsDemo() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="outline">
        <Mail className="mr-2 h-4 w-4" /> Email
      </Button>
      <Button>
        <PlusCircle className="mr-2 h-4 w-4" /> Add New
      </Button>
      <Button variant="destructive">
        <Trash2 className="mr-2 h-4 w-4" /> Delete
      </Button>
      <Button variant="secondary">
        <UserPlus className="mr-2 h-4 w-4" /> Register
      </Button>
      <Button variant="ghost">
        <CheckCircle className="mr-2 h-4 w-4" /> Submit
      </Button>
      <Button variant="link">Learn More</Button>

      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </Button>

      <Button size="sm">Small Button</Button>
      <Button size="lg">Large Button</Button>
      <Button size="icon">
        <Mail className="h-4 w-4" />
      </Button>
       <Button variant="outline" size="icon" className="rounded-full">
        <PlusCircle className="h-4 w-4" />
      </Button>
    </div>
  );
}
