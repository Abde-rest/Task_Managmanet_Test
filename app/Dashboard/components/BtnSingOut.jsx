"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import storeLodingOverley from "@/store/storeLodingOverley";

const BtnSingOut = () => {
  const { setIsOpen } = storeLodingOverley();

  const router = useRouter();
  const handleLogout = async () => {
    setIsOpen({ isOpen: true, message: "SingOut" });

    await signOut({ redirect: false });
    router.replace("/login");

    setTimeout(() => {
      setIsOpen({ isOpen: false, message: "" });
    }, 500);
  };
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleLogout}
      className="gap-2">
      <LogOut className="h-4 w-4" />
      <span className="hidden sm:inline">تسجيل خروج</span>
    </Button>
  );
};

export default BtnSingOut;
