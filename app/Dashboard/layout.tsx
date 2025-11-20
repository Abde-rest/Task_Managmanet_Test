import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/hedaer/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen overflow-hidden">
      <div className="w-full">
        {/* Header */}
        <DashboardHeader />

        {/* Page Content */}
        {/* <main className="flex-1 overflow-y-scroll">{children}</main> */}
      </div>
      <Sidebar />
    </div>
  );
}
