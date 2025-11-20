import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./toggleMode";
import DrawerThem from "./DrawerThem";

export default function Header() {
  return (
    <header>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            MyApp
          </Link>

          <div className="flex gap-3 items-center">
            <h6 className="text-gray-400 text-sm px-3 hover:text-gray-500 cursor-pointer">
              doc
            </h6>
            <ModeToggle />
            <DrawerThem />
            {/* SingUp */}
            <Link href={"/SingUp"}>
              <Button className="cursor-pointer">SingUp</Button>
            </Link>
            <Button className="cursor-pointer bg-transparent text-black dark:text-white hover:bg-transparent shadow-md">
              SingIn
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
