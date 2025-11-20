import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";
import { getToken } from "next-auth/jwt";
import { authOptions } from "./app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

// 1. Specify protected and public routes
const protectedRoutes = ["/Dashboard"];
const publicRoutes = ["/login", "/signup", "/reset-password"];

export default async function proxy(req: NextRequest, res: NextResponse) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  // const session = await getServerSession({req, res, authOptions});
  // console.log("session");
  // console.log(session);

  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const token = await getToken({ req });
  console.log(token);

  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (isPublicRoute && token) {
    return NextResponse.redirect(new URL("/Dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Proxy should not run on
export const config = {
  // يجب استثناء /api, _next/static, _next/image, إلخ، لأنها تحتاج أن تبقى مفتوحة للـ Next.js والعمل الطبيعي للتطبيق
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
  // matcher: "/:path*",
};
