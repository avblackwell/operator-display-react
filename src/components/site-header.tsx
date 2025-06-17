import { BellIcon, SidebarIcon, UserIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { AppControls } from "@/components/AppControls";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b top-(--header-height) h-(--header-height)">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-2">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>

        <div className="flex-1 flex justify-center">
          <AppControls />
        </div>

        <div className="flex gap-1">
          <Button variant="ghost" size="icon">
            <BellIcon />
          </Button>
          <Button variant="ghost" size="icon">
            <UserIcon />
          </Button>
        </div>
      </div>
    </header>
  );
}
