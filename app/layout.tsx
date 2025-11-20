import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/Header";
// import ShopingCarts from "./components/ShopingCarts";
// import ShowNotificationUi from "./components/ShowNotificationUi";
import "./globals.css";
import ShowNotificationUi from "./components/ShowNotificationUi";
import LoadingOverlay from "./components/LoadingOverlay/LoadingOverlay";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="container m-auto sm:px-2 px-1">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {/* <ShopingCarts /> */}
        <ShowNotificationUi />
        <LoadingOverlay />
      </body>
    </html>
  );
}
