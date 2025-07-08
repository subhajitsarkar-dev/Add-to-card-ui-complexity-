import { createFileRoute } from "@tanstack/react-router";
import Home from "../components/Home";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="">
      <Home />
    </div>
  );
}
