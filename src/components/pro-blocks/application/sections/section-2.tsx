"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  ChevronRightIcon,
  EllipsisVertical,
  Search,
  XIcon,
} from "lucide-react";

export function Section2() {
  return (
    <div className="bg-background">
      {/* Section header */}
      <div className="container mx-auto flex flex-col gap-6 pt-4">
        {/* Title */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-6">
          <div className="space-y-1">
            <div className="flex items-center justify-between gap-2 md:justify-start">
              <h2 className="text-xl font-semibold">Dashboards</h2>
            </div>
          </div>
          {/* Search and Actions */}
          <div className="flex flex-col-reverse gap-3 md:flex-row">
            <div className="relative">
              <Input type="search" placeholder="Search" className="pl-8" />
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
            </div>
            <div className="flex flex-row-reverse justify-end gap-2 md:flex-row">
              <div className="lg:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <EllipsisVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>View</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Button variant="outline" className="hidden lg:inline-flex">
                View
              </Button>
              <Button variant="outline" className="hidden lg:inline-flex">
                Edit
              </Button>
              <Button>Create new</Button>
            </div>
          </div>
        </div>
      </div>
      {/* Section body */}
      <div className="container mx-auto py-6">
        <div className="border-border bg-muted text-muted-foreground w-full rounded-md border border-dashed p-6 text-center">
          Replace this div with your content
        </div>
      </div>
    </div>
  );
}
