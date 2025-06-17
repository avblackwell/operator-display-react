import { NavActions } from "@/components/nav-actions";
import { NavUser } from "@/components/nav-user";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";

const data = {
  user: {
    name: "Test Cell 101",
    email: "Test Cell 101",
    avatar: "/avatars/example.jpg",
  },
};

export const Route = createFileRoute("/marketplace")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <header className="sticky z-50 flex h-16 shrink-0 items-center gap-2 border-b bg-sidebar-primary-foreground top-(--header-height) h-(--header-height)">
        <div className="flex flex-1 items-center gap-2 px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1">
                  Marketplace
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="ml-auto px-4">
          <div className="flex">
            <NavUser user={data.user} />
          </div>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-10">
        <Outlet />
        <Toaster />
      </div>
    </>
  );
}
