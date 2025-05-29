import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createFileRoute } from "@tanstack/react-router";
import {
  LayoutGridIcon,
  SettingsIcon,
  PenToolIcon,
  ShapesIcon,
  SearchIcon,
  HeartIcon,
  EyeIcon,
  GlobeIcon,
  ChevronDownIcon,
  ListFilter,
  MoreHorizontal,
  ChevronRightIcon,
  Search,
  EllipsisVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { PageHeader4 } from "@/components/pro-blocks/application/page-headers/page-header-4";
import { Section2 } from "@/components/pro-blocks/application/sections/section-2";

export const Route = createFileRoute("/marketplace/")({
  component: MarketplaceComponent,
});

const resources = [
  {
    title: "Dashboard 1",
    author: "Alex",
    image: "https://picsum.photos/seed/mpl/300/150",
    avatar: "https://picsum.photos/seed/Alex-avatar/30/30",
    likes: "1.8k",
    views: "8.3k",
    category: "Website templates",
  },
  {
    title: "Dashboard 2",
    author: "Alex",
    image: "https://picsum.photos/seed/mbds/300/150",
    avatar: "https://picsum.photos/seed/Alex-avatar/30/30",
    likes: "1.1k",
    views: "4.8k",
    category: "Website templates",
  },
  {
    title: "Dashboard 3",
    author: "Alex",
    image: "https://picsum.photos/seed/sbg/300/150",
    avatar: "https://picsum.photos/seed/Alex-avatar/30/30",
    likes: "1.5k",
    views: "4.5k",
    category: "Website templates",
  },
  {
    title: "Dashboard 4",
    author: "Alex",
    image: "https://picsum.photos/seed/readcv/300/150",
    avatar: "https://picsum.photos/seed/Alex-avatar/30/30",
    likes: "244",
    views: "1.7k",
    category: "Website templates",
  },
  {
    title: "Dashboard 5",
    author: "Alex",
    image: "https://picsum.photos/seed/spls/300/150",
    avatar: "https://picsum.photos/seed/Alex-avatar/30/30",
    likes: "256",
    views: "1.5k",
    category: "Website templates",
  },
  {
    title: "Dashboard 6",
    author: "Joey Banks",
    image: "https://picsum.photos/seed/ios16/300/150",
    avatar: "https://picsum.photos/seed/joey-avatar/30/30",
    likes: "16.2k",
    views: "483k",
    category: "UI kits",
  },
  {
    title: "Dashboard 7",
    author: "Joey Banks",
    image: "https://picsum.photos/seed/ios15/300/150",
    avatar: "https://picsum.photos/seed/joey-avatar/30/30",
    likes: "14.6k",
    views: "388k",
    category: "UI kits",
  },
  {
    title: "Dashboard 8",
    author: "MUI and 2 others",
    image: "https://picsum.photos/seed/mui/300/150",
    avatar: "https://picsum.photos/seed/mui-avatar/30/30",
    likes: "9.6k",
    views: "338k",
    category: "UI kits",
  },
  {
    title: "Dashboard 9",
    author: "Jordan Hughes",
    image: "https://picsum.photos/seed/ultimateAlex/300/150",
    avatar: "https://picsum.photos/seed/jordan-avatar/30/30",
    likes: "11.1k",
    views: "245k",
    category: "UI kits",
  },
  {
    title: "Dashboard 10",
    author: "Toni Gemayel",
    image: "https://picsum.photos/seed/mobileui/300/150",
    avatar: "https://picsum.photos/seed/toni-avatar/30/30",
    likes: "5.3k",
    views: "302k",
    category: "UI kits",
  },
];

const featuredCategories = [
  {
    title: "Assets",
    description: "High-quality icons, illustrations, photos, and patterns",
    icon: <ShapesIcon className="h-6 w-6" />,
  },
  {
    title: "Presentations",
    description: "Browse Alex Slides for your next pitch",
    icon: <PenToolIcon className="h-6 w-6" />,
  },
  {
    title: "Plugins for editing and effects",
    description: "Easily transform colors and images",
    icon: <SettingsIcon className="h-6 w-6" />,
  },
];

function ResourceCard({ resource }: { resource: (typeof resources)[0] }) {
  return (
    <Card className="min-w-[280px] max-w-[320px] flex-shrink-0 py-0 gap-0">
      <CardContent className="p-0">
        <img
          src={resource.image}
          alt={resource.title}
          className="w-full h-40 object-cover rounded-t-md"
        />
      </CardContent>
      <CardFooter className="p-3 flex flex-col items-start">
        <p className="text-sm font-semibold">{resource.title}</p>
        <div className="flex items-center gap-2 text-xs mt-1">
          <Avatar className="h-5 w-5">
            <AvatarImage src={resource.avatar} alt={resource.author} />
            <AvatarFallback>{resource.author.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <span>by {resource.author}</span>
        </div>
        <div className="flex items-center gap-2 text-xs mt-2">
          <HeartIcon className="h-3 w-3" /> {resource.likes}
          <EyeIcon className="h-3 w-3 ml-2" /> {resource.views}
        </div>
      </CardFooter>
    </Card>
  );
}

function MarketplaceComponent() {
  return (
    <>
      <div>
        <div className="flex flex-col gap-6">
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
      <div>
        {/* Section header */}
        <div className="flex flex-col gap-6 pt-4">
          {/* Title */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-6">
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-2 md:justify-start">
                <h2 className="text-xl font-semibold">Dashboards</h2>
              </div>
            </div>
            {/* Search and Actions */}
            <div className="flex flex-row-reverse justify-end gap-2 md:flex-row">
              <Button>Create new</Button>
            </div>
          </div>
        </div>
        {/* Section body */}
        <div className=" py-6">
          <div className="flex flex-wrap gap-4 pb-4">
            {resources.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
