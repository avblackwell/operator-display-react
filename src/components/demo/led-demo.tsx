import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export function LedDemo() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="outline" className="gap-1.5">
            <span
              className="size-1.5 rounded-full bg-emerald-500"
              aria-hidden="true"
            ></span>
            FL_blk_in_t
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>U 220[deg_F]</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="outline" className="gap-1.5">
            <span
              className="size-1.5 rounded-full bg-red-500"
              aria-hidden="true"
            ></span>
            AL_ac_air_ot_t
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>U 160[deg_F]</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="default" className="gap-1.5">
            <span
              className="size-1.5 rounded-full bg-emerald-500"
              aria-hidden="true"
            ></span>
            FL_blk_in_t
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>U 220[deg_F]</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="default" className="gap-1.5">
            <span
              className="size-1.5 rounded-full bg-red-500"
              aria-hidden="true"
            ></span>
            AL_ac_air_ot_t
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>U 160[deg_F]</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="secondary" className="gap-1.5">
            <span
              className="size-1.5 rounded-full bg-emerald-500"
              aria-hidden="true"
            ></span>
            FL_blk_in_t
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>U 220[deg_F]</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="secondary" className="gap-1.5">
            <span
              className="size-1.5 rounded-full bg-red-500"
              aria-hidden="true"
            ></span>
            AL_ac_air_ot_t
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>U 160[deg_F]</p>
        </TooltipContent>
      </Tooltip>
    </>
  );
}
