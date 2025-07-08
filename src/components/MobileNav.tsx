import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Link, useRouter } from "@tanstack/react-router";

const MobileNav = () => {
  const router = useRouter();
  // const path = router.state.location.pathname;
  const isActive = (to: string) => router.matchRoute({ to }) !== null;

  const [openSheet, setOpenSheet] = useState(false);
  const closeSheetFn = () => setOpenSheet(false);

  return (
    <Sheet open={openSheet} onOpenChange={setOpenSheet}>
      <SheetTrigger asChild>
        <button className="sm:hidden p-2">
          <RxHamburgerMenu size={28} />
        </button>
      </SheetTrigger>

      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>

          <div className="flex flex-col gap-2 mt-4">
            <Link
              to="/"
              onClick={closeSheetFn}
              className={
                isActive("/")
                  ? "font-medium text-foreground"
                  : "font-medium text-foreground/60"
              }
            >
              Home
            </Link>

            {/* Add more links as needed */}
            <Link
              to="/cart"
              onClick={closeSheetFn}
              className={
                isActive("/cart")
                  ? "font-medium text-foreground"
                  : "font-medium text-foreground/60"
              }
            >
              Cart
            </Link>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
