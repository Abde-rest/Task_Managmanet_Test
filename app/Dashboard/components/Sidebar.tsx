"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  Settings,
  FileText,
  X,
} from "lucide-react";
import storeSidbar from "../store/storeSidbar";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    title: "لوحة التحكم",
    href: "/Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "الطلبات",
    href: "/Dashboard/orders",
    icon: ShoppingCart,
  },
  {
    title: "المنتجات",
    href: "/Dashboard/products",
    icon: Package,
  },
  {
    title: "المستخدمون",
    href: "/Dashboard/users",
    icon: Users,
  },
  {
    title: "التقارير",
    href: "/Dashboard/reports",
    icon: BarChart3,
  },
  {
    title: "الإعدادات",
    href: "/Dashboard/settings",
    icon: Settings,
  },
  {
    title: "التوثيق",
    href: "/Dashboard/docs",
    icon: FileText,
  },
];

export default function Sidebar() {
  const { isOpen, setIsOpenSidbar } = storeSidbar();
  const pathname = usePathname();

  return (
    <>
      <div
        role="presentation"
        onClick={() => setIsOpenSidbar(false)}
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 xl:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      <aside
        className={cn(
          "fixed right-0 top-0 z-50 h-screen w-64 border-l bg-card transition-transform duration-300 will-change-transform",
          isOpen ? "translate-x-0" : "translate-x-full",
          "xl:z-40 xl:translate-x-0"
        )}>
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
          <div className="h-16  border-b px-6 flex items-center justify-between">
            <Button className="xl:hidden" onClick={() => setIsOpenSidbar(false)}>
              <X />
            </Button>
            <h2 className="text-lg font-semibold">القائمة</h2>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto p-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}>
                  <Icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
