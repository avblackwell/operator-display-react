"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { EllipsisVertical, Search } from "lucide-react";

export function PageHeader4() {
  return (
    <div className="py-4 md:py-6">
      <div className="container mx-auto flex flex-col gap-6">
        {/* Main content */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
              Browse resources
            </h1>
            <p className="text-muted-foreground text-sm lg:text-base">
              Discover dashboards files, widgets, and themes—a great place for
              inspiration and shortcuts to boost your workflow.
            </p>
          </div>
          {/* Search */}
          <div className="relative w-full md:max-w-xs">
            <Search className="text-muted-foreground absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 transform" />
            <Input type="search" placeholder="Search" className="pl-8" />
          </div>
        </div>
        <div className="flex gap-2 flex-row">
          <Button variant="outline">Dashboards</Button>
          <Button variant="outline">Widgets</Button>
          <Button variant="outline">Themes</Button>
        </div>
      </div>
    </div>
  );
}
