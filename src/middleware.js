import { NextResponse } from "next/server";

export default function middleware(request) {
  console.log("Middleware running for:", request.nextUrl.pathname);
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("adminToken")?.value;

  //  Protect all /admin routes
  if (pathname.startsWith("/admin")) {
    if (!token) {
      console.log("No token found. Redirecting to /");
      const homeUrl = new URL("/", request.url);
      homeUrl.searchParams.set("from",pathname);
      return NextResponse.redirect(homeUrl);
    }
  }

  //  Prevent logged-in admin from seeing login page again
  if (pathname === "/" && token) {
    console.log("🔁 Token found. Redirecting to /admin/dashboard");
    const dashboardUrl = new URL("/admin/dashboard", request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
