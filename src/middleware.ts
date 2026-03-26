import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/admin/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 로그인 페이지와 로그인 API는 보호하지 않음
  if (pathname === "/admin/login" || pathname === "/api/admin/auth") {
    return NextResponse.next();
  }

  const token = request.cookies.get("admin_token")?.value;
  if (!token) {
    if (pathname.startsWith("/api/admin")) {
      return NextResponse.json({ error: "인증이 필요합니다" }, { status: 401 });
    }
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  const payload = await verifyToken(token);
  if (!payload) {
    if (pathname.startsWith("/api/admin")) {
      return NextResponse.json({ error: "인증이 만료되었습니다" }, { status: 401 });
    }
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
