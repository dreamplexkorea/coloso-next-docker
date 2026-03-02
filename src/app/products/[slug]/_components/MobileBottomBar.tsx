"use client";

import Link from "next/link";

/** 모바일 하단 고정 바 — 견적 요청하기 CTA (lg 이상에서 숨김) */
export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[rgba(0,0,0,0.08)] bg-white px-[16px] py-[12px] shadow-[0_-4px_12px_rgba(0,0,0,0.08)] lg:hidden">
      <div className="flex items-center gap-[12px]">
        <Link
          href="/ai-quote"
          className="flex flex-1 items-center justify-center rounded-[8px] bg-[var(--color-primary,#2B6B9A)] px-[24px] py-[14px] text-[1.4rem] font-bold text-white transition-opacity hover:opacity-90"
        >
          견적 요청하기
        </Link>
        <Link
          href="/ai-quote"
          className="flex items-center justify-center rounded-[8px] border border-[var(--color-primary,#2B6B9A)] px-[20px] py-[14px] text-[1.4rem] font-bold text-[var(--color-primary,#2B6B9A)] transition-colors hover:bg-[var(--color-primary,#2B6B9A)]/5"
        >
          문의하기
        </Link>
      </div>
    </div>
  );
}
