import { createFileRoute } from "@tanstack/react-router";
import { ComponentWrapper } from "@/components/component-wrapper";
import { ButtonDemo } from "@/components/button-demo";
import { AccordionDemo } from "@/components/accordion-demo";
import { AlertDemo } from "@/components/alert-demo";
import { AlertDialogDemo } from "@/components/alert-dialog-demo";
import { AspectRatioDemo } from "@/components/aspect-ratio-demo";
import { AvatarDemo } from "@/components/avatar-demo";
import { BadgeDemo } from "@/components/badge-demo";
import { BreadcrumbDemo } from "@/components/breadcrumb-demo";
import { CalendarDemo } from "@/components/calendar-demo";
import { CardDemo } from "@/components/card-demo";
import { CheckboxDemo } from "@/components/checkbox-demo";
import { CollapsibleDemo } from "@/components/collapsible-demo";
import { ComboboxDemo } from "@/components/combobox-demo";
import { CommandDemo } from "@/components/command-demo";
import { ContextMenuDemo } from "@/components/context-menu-demo";
import { DatePickerDemo } from "@/components/date-picker-demo";
import { DialogDemo } from "@/components/dialog-demo";
import { DrawerDemo } from "@/components/drawer-demo";
import { DropdownMenuDemo } from "@/components/dropdown-menu-demo";
import { FormDemo } from "@/components/form-demo";
import { HoverCardDemo } from "@/components/hover-card-demo";
import { InputDemo } from "@/components/input-demo";
import { LabelDemo } from "@/components/label-demo";
import { MenubarDemo } from "@/components/menubar-demo";
import { PaginationDemo } from "@/components/pagination-demo";
import { PopoverDemo } from "@/components/popover-demo";
import { ProgressDemo } from "@/components/progress-demo";
import { RadioGroupDemo } from "@/components/radio-group-demo";
import { ResizableDemo } from "@/components/resizable-demo";
import { ScrollAreaDemo } from "@/components/scroll-area-demo";
import { SelectDemo } from "@/components/select-demo";
import { SeparatorDemo } from "@/components/separator-demo";
import { SheetDemo } from "@/components/sheet-demo";
import { SliderDemo } from "@/components/slider-demo";
import { SonnerDemo } from "@/components/sonner-demo";
import { SwitchDemo } from "@/components/switch-demo";
import { TableDemo } from "@/components/table-demo";
import { TabsDemo } from "@/components/tabs-demo";
import { TextareaDemo } from "@/components/textarea-demo";
import { ToggleDemo } from "@/components/toggle-demo";
import { ToggleGroupDemo } from "@/components/toggle-group-demo";
import { TooltipDemo } from "@/components/tooltip-demo";
import { InputOTPDemo } from "@/components/input-otp-demo";
import { NavigationMenuDemo } from "@/components/navigation-menu-demo";
import { ChartLineDemo } from "@/components/chart-line-demo";
import SliderWithTicks from "@/components/slider-with-ticks";
import SliderWithInput from "@/components/slider-with-input";
import { ChartRadialLabel } from "@/components/chart-radial-label";
import { GaugeDemo } from "@/components/gauge-demo";
import { LedDemo } from "@/components/led-demo";
import CmdLineDemo from "@/components/cmd-line-demo";
import CmxValueDemo from "@/components/cmx-value-demo";
import CmxStringDemo from "@/components/cmx-string-demo";
import { ProgressWithTicks } from "@/components/progress-with-ticks";
import { ChartRadialText } from "@/components/chart-radial-text";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <ComponentWrapper name="slider">
        <SliderDemo />
      </ComponentWrapper>
      <ComponentWrapper name="slider">
        <ProgressWithTicks />
      </ComponentWrapper>
      <ComponentWrapper name="Radial Chart">
        <ChartRadialText />
      </ComponentWrapper>

      <ComponentWrapper name="cmx-LED">
        <LedDemo />
      </ComponentWrapper>
      <ComponentWrapper name="command-line">
        <CmdLineDemo />
      </ComponentWrapper>
      <ComponentWrapper name="cmx-value">
        <CmxValueDemo />
      </ComponentWrapper>
      <ComponentWrapper name="cmx-string">
        <CmxStringDemo />
      </ComponentWrapper>

      <ComponentWrapper name="button">
        <ButtonDemo />
      </ComponentWrapper>

      <ComponentWrapper name="scroll-area">
        <ScrollAreaDemo />
      </ComponentWrapper>
      <ComponentWrapper name="switch">
        <SwitchDemo />
      </ComponentWrapper>
    </>
  );
}
