import {
  BoxIcon,
  ChartLine,
  HouseIcon,
  PanelsTopLeftIcon,
  SettingsIcon,
  UsersRoundIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardContent, CardHeader, Card } from "@/components/ui/card";

export default function Component() {
  return (
    <Card className="pt-0">
      <Tabs defaultValue="tab-1">
        <ScrollArea>
          <CardHeader className="px-0">
            <TabsList className="text-foreground mb-3 h-auto gap-2 rounded-none border-b bg-transparent px-1">
              <TabsTrigger
                value="tab-1"
                className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Projects
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                <BoxIcon
                  className="-ms-0.5 me-1.5 opacity-60"
                  size={16}
                  aria-hidden="true"
                />
                Packages
                <Badge className="ms-1.5">New</Badge>
              </TabsTrigger>
              <TabsTrigger
                value="tab-4"
                className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                <UsersRoundIcon
                  className="-ms-0.5 me-1.5 opacity-60"
                  size={16}
                  aria-hidden="true"
                />
                Team
              </TabsTrigger>
              <TabsTrigger
                value="tab-5"
                className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                <ChartLine
                  className="-ms-0.5 me-1.5 opacity-60"
                  size={16}
                  aria-hidden="true"
                />
                Insights
              </TabsTrigger>
              <TabsTrigger
                value="tab-6"
                className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                <SettingsIcon
                  className="-ms-0.5 me-1.5 opacity-60"
                  size={16}
                  aria-hidden="true"
                />
                Settings
              </TabsTrigger>
            </TabsList>
          </CardHeader>
        </ScrollArea>
        <CardContent className="p-0">
          <TabsContent value="tab-1">
            <p className="text-muted-foreground pt-1 text-center text-xs">
              Content for Tab 1
            </p>
          </TabsContent>
          <TabsContent value="tab-2">
            <p className="text-muted-foreground pt-1 text-center text-xs">
              Content for Tab 2
            </p>
          </TabsContent>
          <TabsContent value="tab-3">
            <p className="text-muted-foreground pt-1 text-center text-xs">
              Content for Tab 3
            </p>
          </TabsContent>
          <TabsContent value="tab-4">
            <p className="text-muted-foreground pt-1 text-center text-xs">
              Content for Tab 4
            </p>
          </TabsContent>
          <TabsContent value="tab-5">
            <p className="text-muted-foreground pt-1 text-center text-xs">
              Content for Tab 5
            </p>
          </TabsContent>
          <TabsContent value="tab-6">
            <p className="text-muted-foreground pt-1 text-center text-xs">
              Content for Tab 6
            </p>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
}
