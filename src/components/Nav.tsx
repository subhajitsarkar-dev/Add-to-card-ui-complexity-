import { Link, useRouter } from "@tanstack/react-router";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

const Nav = () => {
  const router = useRouter();
  const path = router.state.location.pathname;
  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-foreground backdrop-blur bg-background">
        <div className="container mx-auto flex items-center justify-between px-6 py-2">
          <div className="">
            <Link to="/" className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold font-papa">
                <span className="text-primary">v </span>mart
              </h1>
            </Link>
          </div>

          <nav className="hidden grid-cols-3 place-items-center gap-2 sm:grid">
            <Link
              to="/"
              className={
                path === "/"
                  ? `font-medium text-foreground`
                  : `font-medium text-foreground/60`
              }
            >
              About
            </Link>
            <Link
              to="/cart"
              className={
                path === "/cart"
                  ? `font-medium text-foreground`
                  : `font-medium text-foreground/60`
              }
            >
              Cart
            </Link>

            <div className="">
              <ThemeToggle />
            </div>
          </nav>

          <nav className="grid grid-flow-col place-items-center gap-2 sm:hidden">
            <div className="">
              <ThemeToggle />
            </div>
            <div className="">
              <MobileNav />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
