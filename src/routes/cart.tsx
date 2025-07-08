import { createFileRoute } from "@tanstack/react-router";
import Cart from "../components/Cart";

export const Route = createFileRoute("/cart")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Cart />
    </div>
  );
}
