import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Nav from "../components/Nav";
import { ThemeProvider } from "../components/theme-provider";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <React.Fragment>
        <Nav />
        <Outlet />
      </React.Fragment>
    </ThemeProvider>
  );
}
