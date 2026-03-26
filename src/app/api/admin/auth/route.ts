import { NextResponse } from "next/server";
import { checkCredentials, createToken } from "@/lib/admin/auth";

/** POST /api/admin/auth — 로그인 */
export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  if (!username || !password) {
    return NextResponse.json({ error: "아이디와 비밀번호를 입력해주세요" }, { status: 400 });
  }

  if (!checkCredentials(username, password)) {
    return NextResponse.json({ error: "아이디 또는 비밀번호가 올바르지 않습니다" }, { status: 401 });
  }

  const token = await createToken(username);
  const response = NextResponse.json({ ok: true });
  response.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 24시간
  });
  return response;
}

/** DELETE /api/admin/auth — 로그아웃 */
export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set("admin_token", "", { path: "/", maxAge: 0 });
  return response;
}
