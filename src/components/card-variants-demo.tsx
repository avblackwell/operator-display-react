"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { BellRing, Check, User, CreditCard, Settings } from "lucide-react";

export function CardVariantsDemo() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
          <CardDescription>View and update your profile information.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center space-x-4 rounded-md border p-4">
            <BellRing className="h-6 w-6" />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Push Notifications
              </p>
              <p className="text-sm text-muted-foreground">
                Send notifications to device.
              </p>
            </div>
            <Button variant="outline" size="sm">Toggle</Button>
          </div>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="John Doe" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john.doe@example.com" className="mt-1" />
          </div>
          <div className="flex items-center justify-between">
            <Label>Plan</Label>
            <Badge variant="premium">Premium</Badge>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Payment Settings</CardTitle>
          <CardDescription>Manage your payment methods and billing details.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            **** **** **** 1234 <Badge variant="secondary" className="ml-2">Primary</Badge>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-card">Add New Card</Label>
            <div className="flex gap-2">
                <Input id="new-card" placeholder="Card Number" />
                <Input placeholder="MM/YY" className="w-24"/>
                <Input placeholder="CVC" className="w-20"/>
            </div>
          </div>
           <div className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-green-500" />
            <p className="text-xs text-muted-foreground">
              Your information is securely stored.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2">
            <Button className="w-full">
                <CreditCard className="mr-2 h-4 w-4" /> Add Payment Method
            </Button>
            <Button variant="outline" className="w-full">
                <Settings className="mr-2 h-4 w-4" /> Manage Billing
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
