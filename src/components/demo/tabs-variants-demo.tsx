"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserCircle, Lock, Settings, CreditCard, Bell } from "lucide-react";

export function TabsVariantsDemo() {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>User Settings</CardTitle>
        <CardDescription>
          Manage your account settings and preferences.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="account">
              <UserCircle className="mr-2 h-4 w-4" /> Account
            </TabsTrigger>
            <TabsTrigger value="password">
              <Lock className="mr-2 h-4 w-4" /> Password
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="mr-2 h-4 w-4" /> Notifications
            </TabsTrigger>
            <TabsTrigger value="billing" disabled>
              <CreditCard className="mr-2 h-4 w-4" /> Billing
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@john.doe" />
                </div>
                <Button>Save changes</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
                 <div className="space-y-1">
                  <Label htmlFor="confirm">Confirm new password</Label>
                  <Input id="confirm" type="password" />
                </div>
                <Button>Update Password</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notifications" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Choose how you want to be notified.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Email notifications are enabled.</p>
                <Button variant="outline">Configure Notifications</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="billing" className="mt-4">
             <Card>
              <CardHeader>
                <CardTitle>Billing Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Billing information is not yet available.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
