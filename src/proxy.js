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
    const res = NextResponse.next();
    res.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
    res.headers.set("Pragma", "no-cache");
    res.headers.set("Expires", "0");
    return res;
  }

  //  Prevent logged-in admin from seeing login page again

  return NextResponse.next();
}

export const config = {
  matcher: ["/","/admin/:path*"],
};
