import { createFileRoute } from "@tanstack/react-router";

import { ComponentWrapper } from "@/components/demo/component-wrapper";
import { SliderDemo } from "@/components/demo/slider-demo";
import { ProgressWithTicks } from "@/components/demo/progress-with-ticks";
import { ChartRadialText } from "@/components/demo/chart-radial-text";
import { GaugeDemo } from "@/components/demo/gauge-demo";
import { ChartBarDemo } from "@/components/demo/chart-bar-demo";
import { ProgressDemo } from "@/components/demo/progress-demo";
import { StripChartDemo } from "@/components/demo/strip-chart-demo";
import { BulletChartDemo } from "@/components/demo/bullet-chart-demo";
import { AdvancedBarChartDemo } from "@/components/demo/advanced-bar-chart-demo";
import { PieChartDemo } from "@/components/demo/pie-chart-demo";
import { ScatterPlotDemo } from "@/components/demo/scatter-plot-demo";
import { AdvancedAreaChartDemo } from "@/components/demo/advanced-area-chart-demo";
import { ComposedChartDemo } from "@/components/demo/composed-chart-demo";
import { ButtonVariantsDemo } from "@/components/demo/button-variants-demo";
import { CardVariantsDemo } from "@/components/demo/card-variants-demo";
import { TabsVariantsDemo } from "@/components/demo/tabs-variants-demo";
import CmxValueDemo from "@/components/demo/cmx-value-demo";
import CmxStringDemo from "@/components/demo/cmx-string-demo";
import CmdLineDemo from "@/components/demo/cmd-line-demo";
import { ButtonDemo } from "@/components/demo/button-demo";
import { ScrollAreaDemo } from "@/components/demo/scroll-area-demo";
import { SwitchDemo } from "@/components/demo/switch-demo";
import { FormsDemo } from "@/components/demo/forms-demo";
import { AccordionDemo } from "@/components/demo/accordion-demo";
import { AlertDemo } from "@/components/demo/alert-demo";
import { AlertDialogDemo } from "@/components/demo/alert-dialog-demo";
import { AspectRatioDemo } from "@/components/demo/aspect-ratio-demo";
import { AvatarDemo } from "@/components/demo/avatar-demo";
import { BadgeDemo } from "@/components/demo/badge-demo";
import { BreadcrumbDemo } from "@/components/demo/breadcrumb-demo";
import { CalendarDemo } from "@/components/demo/calendar-demo";
import { CardDemo } from "@/components/demo/card-demo";
import { CheckboxDemo } from "@/components/demo/checkbox-demo";
import { ChartLineDemo } from "@/components/demo/chart-line-demo";
import { ChartRadialLabel } from "@/components/demo/chart-radial-label";
import { CollapsibleDemo } from "@/components/demo/collapsible-demo";
import { ComboboxDemo } from "@/components/demo/combobox-demo";
import { CommandDemo } from "@/components/demo/command-demo";
import { ContextMenuDemo } from "@/components/demo/context-menu-demo";
import { DatePickerDemo } from "@/components/demo/date-picker-demo";
import { DialogDemo } from "@/components/demo/dialog-demo";
import { DrawerDemo } from "@/components/demo/drawer-demo";
import { DropdownMenuDemo } from "@/components/demo/dropdown-menu-demo";
import { FormDemo } from "@/components/demo/form-demo";
import { NavigationMenuDemo } from "@/components/demo/navigation-menu-demo";
import { PaginationDemo } from "@/components/demo/pagination-demo";
import { PopoverDemo } from "@/components/demo/popover-demo";
import { RadioGroupDemo } from "@/components/demo/radio-group-demo";
import { ResizableDemo } from "@/components/demo/resizable-demo";
import { SelectDemo } from "@/components/demo/select-demo";
import { SeparatorDemo } from "@/components/demo/separator-demo";
import { SheetDemo } from "@/components/demo/sheet-demo";
import SliderWithInput from "@/components/demo/slider-with-input";
import { SonnerDemo } from "@/components/demo/sonner-demo";
import { TableDemo } from "@/components/demo/table-demo";
import { TabsDemo } from "@/components/demo/tabs-demo";
import { TextareaDemo } from "@/components/demo/textarea-demo";
import { ToggleDemo } from "@/components/demo/toggle-demo";
import { ToggleGroupDemo } from "@/components/demo/toggle-group-demo";
import { TooltipDemo } from "@/components/demo/tooltip-demo";
import { HoverCardDemo } from "@/components/demo/hover-card-demo";
import { InputDemo } from "@/components/demo/input-demo";
import { InputOTPDemo } from "@/components/demo/input-otp-demo";
import { LabelDemo } from "@/components/demo/label-demo";
import { MenubarDemo } from "@/components/demo/menubar-demo";
import { LedDemo } from "@/components/demo/led-demo";

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

      <ComponentWrapper name="Gauge Chart">
        <GaugeDemo />
      </ComponentWrapper>

      <ComponentWrapper name="Bar Chart">
        <ChartBarDemo />
      </ComponentWrapper>

      <ComponentWrapper name="Progress Chart">
        <ProgressDemo />
      </ComponentWrapper>

      <ComponentWrapper name="Strip Chart">
        <StripChartDemo />
      </ComponentWrapper>

      <ComponentWrapper name="Bullet Chart (Simplified)">
        <BulletChartDemo />
      </ComponentWrapper>

      <ComponentWrapper name="Advanced Bar Charts">
        <AdvancedBarChartDemo />
      </ComponentWrapper>

      <ComponentWrapper name="Pie & Donut Charts">
        <PieChartDemo />
      </ComponentWrapper>

      <ComponentWrapper name="Scatter Plots">
        <ScatterPlotDemo />
      </ComponentWrapper>

      <ComponentWrapper name="Advanced Area Charts">
        <AdvancedAreaChartDemo />
      </ComponentWrapper>

      <ComponentWrapper name="Composed Charts">
        <ComposedChartDemo />
      </ComponentWrapper>

      <ComponentWrapper name="Button Variants">
        <ButtonVariantsDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Card Variants">
        <CardVariantsDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Tabs Variants">
        <TabsVariantsDemo />
      </ComponentWrapper>

      <ComponentWrapper name="LED Indicator">
        <LedDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Value Indicator">
        <CmxValueDemo />
      </ComponentWrapper>
      <ComponentWrapper name="String Indicator">
        <CmxStringDemo />
      </ComponentWrapper>

      <ComponentWrapper name="command-line">
        <CmdLineDemo />
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

      <ComponentWrapper name="Forms Demo">
        <FormsDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Accordion Demo">
        <AccordionDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Alert Demo">
        <AlertDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Alert Dialog Demo">
        <AlertDialogDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Aspect Ratio Demo">
        <AspectRatioDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Avatar Demo">
        <AvatarDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Badge Demo">
        <BadgeDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Breadcrumb Demo">
        <BreadcrumbDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Calendar Demo">
        <CalendarDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Card Demo">
        <CardDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Checkbox Demo">
        <CheckboxDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Collapsible Demo">
        <CollapsibleDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Combobox Demo">
        <ComboboxDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Command Demo">
        <CommandDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Context Menu Demo">
        <ContextMenuDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Date Picker Demo">
        <DatePickerDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Dialog Demo">
        <DialogDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Drawer Demo">
        <DrawerDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Dropdown Menu Demo">
        <DropdownMenuDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Form Demo">
        <FormDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Hover Card Demo">
        <HoverCardDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Input Demo">
        <InputDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Label Demo">
        <LabelDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Menubar Demo">
        <MenubarDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Pagination Demo">
        <PaginationDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Popover Demo">
        <PopoverDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Radio Group Demo">
        <RadioGroupDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Resizable Demo">
        <ResizableDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Select Demo">
        <SelectDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Separator Demo">
        <SeparatorDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Sheet Demo">
        <SheetDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Sonner Demo">
        <SonnerDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Table Demo">
        <TableDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Tabs Demo">
        <TabsDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Textarea Demo">
        <TextareaDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Toggle Demo">
        <ToggleDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Toggle Group Demo">
        <ToggleGroupDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Tooltip Demo">
        <TooltipDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Input OTP Demo">
        <InputOTPDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Navigation Menu Demo">
        <NavigationMenuDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Chart Line Demo">
        <ChartLineDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Slider With Input">
        <SliderWithInput />
      </ComponentWrapper>
      <ComponentWrapper name="Chart Radial Label">
        <ChartRadialLabel />
      </ComponentWrapper>
    </>
  );
}
