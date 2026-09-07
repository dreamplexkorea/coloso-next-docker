import { NextResponse } from "next/server";
import type { AiQuoteResponse } from "@/lib/types";
import { validateRequest } from "./validators";
import { buildQuote } from "./calculators";

/* ── Rate Limiting (IP 기반, 분당 10회) ── */

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60_000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (record.count >= RATE_LIMIT) return false;
  record.count++;
  return true;
}

/** AI 견적요청 API */
export async function POST(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json<AiQuoteResponse>(
      { ok: false, message: "요청이 너무 많습니다. 잠시 후 다시 시도해주세요." },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json<AiQuoteResponse>(
      { ok: false, message: "요청 본문이 올바른 JSON 형식이 아닙니다." },
      { status: 400 },
    );
  }

  try {
    const validation = validateRequest(payload);
    if (!validation.valid) {
      return NextResponse.json<AiQuoteResponse>(
        { ok: false, message: validation.message },
        { status: 400 },
      );
    }

    const quote = buildQuote(validation.data);

    console.info("[ai-quote] request received", {
      tabType: validation.data.tabType,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json<AiQuoteResponse>(
      {
        ok: true,
        message: "분류별 예상 견적을 계산했습니다. 상담 접수와 일정 확정은 별도 문의해주세요.",
        quote,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json<AiQuoteResponse>(
      {
        ok: false,
        message: "요청 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      },
      { status: 500 },
    );
  }
}
