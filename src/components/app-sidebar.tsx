"use client";

import * as React from "react";
import {
  AudioWaveform,
  Blocks,
  Clock,
  Command,
  Component,
  LayoutDashboardIcon,
  MessageCircleQuestion,
  Palette,
} from "lucide-react";

import { NavFavorites } from "@/components/nav-favorites";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { NavSecondary } from "./nav-secondary";

// This is sample data.
const data = {
  user: {
    name: "first last",
    email: "email@example.com",
    avatar: "/avatars/example.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: Command,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Recents",
      url: "#",
      icon: Clock,
      isActive: true,
    },
    {
      title: "Marketplace",
      url: "#",
      icon: Blocks,
    },
  ],
  navSecondary: [
    {
      title: "Marketplace",
      url: "#",
      icon: Blocks,
    },
    {
      title: "Help",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
  favorites: [
    {
      name: "Dashboard 1",
      url: "#",
      emoji: "D",
    },
    {
      name: "Dashboard 2",
      url: "#",
      emoji: "D",
    },
    {
      name: "Dashboard 3",
      url: "#",
      emoji: "D",
    },
    {
      name: "Component 1",
      url: "#",
      emoji: "C",
    },
    {
      name: "Component 2",
      url: "#",
      emoji: "C",
    },
    {
      name: "Component 3",
      url: "#",
      emoji: "C",
    },
    {
      name: "Component 4",
      url: "#",
      emoji: "C",
    },
    {
      name: "Theme 1",
      url: "#",
      emoji: "T",
    },
    {
      name: "Theme 2",
      url: "#",
      emoji: "T",
    },
    {
      name: "Theme 3",
      url: "#",
      emoji: "T",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <NavSecondary items={data.navMain} />
        <SidebarSeparator className="m-0" />
        <NavFavorites favorites={data.favorites} />
      </SidebarContent>
    </Sidebar>
  );
}
