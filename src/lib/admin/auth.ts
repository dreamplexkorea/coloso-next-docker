/**
 * 어드민 인증 유틸리티
 * Web Crypto API 기반 HMAC-SHA256 JWT (외부 라이브러리 없음)
 */

const SECRET = process.env.ADMIN_JWT_SECRET || "fallback-secret-change-me";
const TOKEN_EXPIRY = 24 * 60 * 60; // 24시간 (초)

function base64url(buf: ArrayBuffer): string {
  return Buffer.from(buf)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function base64urlEncode(str: string): string {
  return Buffer.from(str, "utf-8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function base64urlDecode(str: string): string {
  const padded = str.replace(/-/g, "+").replace(/_/g, "/");
  return Buffer.from(padded, "base64").toString("utf-8");
}

async function sign(payload: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return base64url(signature);
}

async function verify(payload: string, signature: string): Promise<boolean> {
  const expected = await sign(payload);
  return expected === signature;
}

export async function createToken(username: string): Promise<string> {
  const header = base64urlEncode(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const now = Math.floor(Date.now() / 1000);
  const payload = base64urlEncode(
    JSON.stringify({ sub: username, iat: now, exp: now + TOKEN_EXPIRY }),
  );
  const signature = await sign(`${header}.${payload}`);
  return `${header}.${payload}.${signature}`;
}

export async function verifyToken(token: string): Promise<{ sub: string } | null> {
  const parts = token.split(".");
  if (parts.length !== 3) return null;

  const [header, payload, signature] = parts;
  const valid = await verify(`${header}.${payload}`, signature);
  if (!valid) return null;

  const decoded = JSON.parse(base64urlDecode(payload));
  if (decoded.exp < Math.floor(Date.now() / 1000)) return null;

  return { sub: decoded.sub };
}

export function checkCredentials(username: string, password: string): boolean {
  return (
    username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD
  );
}
