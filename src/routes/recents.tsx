import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/recents")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/recents"!</div>;
}
