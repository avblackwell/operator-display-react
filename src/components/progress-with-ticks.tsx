import { Progress } from "./ui/progress";

export function ProgressWithTicks() {
  return (
    <div className="w-full max-w-[400px] space-y-4">
      <Progress value={50} className="h-2" />
    </div>
  );
}
