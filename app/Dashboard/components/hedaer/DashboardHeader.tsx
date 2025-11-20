import Logo from "@/app/components/logo";
import { ModeToggle } from "@/app/components/toggleMode";

import BtnSingOut from "@/app/Dashboard/components/BtnSingOut";
import MenuIconSidebar from "./MenuHedear";

export default function DashboardHeader() {
  //   const [loding, setlodin] = useState(false);
  //   const router = useRouter();

  //   const handleLogout = async () => {
  //     setlodin(true);
  //     await signOut({ redirect: false });
  //     setTimeout(() => {
  //       router.replace("/login");
  //     }, 2000);
  //   };

  return (
    <div>
      {/* <LoadingOverlay message={"Sing Out Now ... "} /> */}
      <header className="sticky top-0 z-30 flex h-16 items-center w-full justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Logo />
        </div>
        <div className="flex items-center gap-3">
          <ModeToggle />
          <BtnSingOut />
          <MenuIconSidebar />
        </div>
      </header>
    </div>
  );
}
