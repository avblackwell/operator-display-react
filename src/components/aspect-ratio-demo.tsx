import { AspectRatio } from "@/components/ui/aspect-ratio";

export function AspectRatioDemo() {
  return (
    <div className="grid w-full max-w-sm items-start gap-4">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg"></AspectRatio>
      <AspectRatio ratio={1 / 1} className="bg-muted rounded-lg"></AspectRatio>
    </div>
  );
}
