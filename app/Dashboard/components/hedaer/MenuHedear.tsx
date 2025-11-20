"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import storeSidbar from "../../store/storeSidbar";

const MenuIconSidebar = () => {
  const { setIsOpenSidbar } = storeSidbar();
  return (
    <Button onClick={() => setIsOpenSidbar(true)} variant="outline" size="icon">
      <Menu className="h-4 w-4" />
    </Button>
  );
};

export default MenuIconSidebar;
