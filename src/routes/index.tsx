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
import { ChartBarDemo } from "@/components/chart-bar-demo";
import { StripChartDemo } from "@/components/strip-chart-demo";
import { BulletChartDemo } from "@/components/bullet-chart-demo";
import { AdvancedBarChartDemo } from "@/components/advanced-bar-chart-demo";
import { PieChartDemo } from "@/components/pie-chart-demo";
import { ScatterPlotDemo } from "@/components/scatter-plot-demo";
import { AdvancedAreaChartDemo } from "@/components/advanced-area-chart-demo";
import { ComposedChartDemo } from "@/components/composed-chart-demo";
import { ButtonVariantsDemo } from "@/components/button-variants-demo";
import { CardVariantsDemo } from "@/components/card-variants-demo";
import { TabsVariantsDemo } from "@/components/tabs-variants-demo";
import { ChartAreaDemo } from "@/components/chart-area-demo";
import { ChartBarMixed } from "@/components/chart-bar-mixed";
import { ChartDemo } from "@/components/chart-demo";
import { FormsDemo } from "@/components/forms-demo";

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
      <ComponentWrapper name="Chart Area Demo">
        <ChartAreaDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Chart Bar Mixed Demo">
        <ChartBarMixed />
      </ComponentWrapper>
      <ComponentWrapper name="Chart Demo">
        <ChartDemo />
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
