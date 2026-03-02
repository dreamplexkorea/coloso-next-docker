"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CourseMeta } from "@/lib/types";

interface StickyBottomSummaryProps {
  meta: CourseMeta;
}

/** 하단 고정 프로그램 요약 바 — glass morphism, 히어로 지나면 항상 노출 */
export function StickyBottomSummary({ meta }: StickyBottomSummaryProps) {
  const [visible, setVisible] = useState(false);

  // IntersectionObserver — 히어로 영역을 지나면 노출
  useEffect(() => {
    const hero = document.querySelector(".product-hero");
    if (!hero) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/30 bg-white/30 shadow-[0_-8px_32px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-[28px] backdrop-saturate-[1.6] transition-[transform,opacity] duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      {/* 데스크톱: 한 줄 레이아웃 */}
      <div className="mx-auto hidden h-[48px] max-w-[1120px] items-center justify-between px-[32px] lg:flex">
        <p className="text-[1.2rem] tracking-[0.01em] text-[var(--color-text-tertiary,#64748b)]">
          {meta.level}
          <span className="mx-[8px] opacity-40">&middot;</span>
          총 {meta.totalLessons}차시
          <span className="mx-[8px] opacity-40">&middot;</span>
          {meta.totalDuration}
        </p>

        <Link
          href="/ai-quote"
          className="rounded-[6px] bg-[var(--color-primary,#2B6B9A)] px-[20px] py-[7px] text-[1.3rem] font-bold text-white transition-opacity hover:opacity-90"
        >
          견적 요청하기
        </Link>
      </div>

      {/* 모바일: 두 줄 레이아웃 */}
      <div className="px-[16px] pb-[12px] pt-[10px] lg:hidden">
        <p className="mb-[8px] text-center text-[1.2rem] text-[var(--color-text-tertiary,#64748b)]">
          {meta.level}
          <span className="mx-[6px] opacity-40">&middot;</span>
          {meta.totalLessons}차시
          <span className="mx-[6px] opacity-40">&middot;</span>
          {meta.totalDuration}
        </p>

        <div className="flex items-center gap-[8px]">
          <Link
            href="/ai-quote"
            className="flex flex-1 items-center justify-center rounded-[8px] bg-[var(--color-primary,#2B6B9A)] py-[12px] text-[1.3rem] font-bold text-white transition-opacity hover:opacity-90"
          >
            견적 요청하기
          </Link>
          <Link
            href="/ai-quote"
            className="flex items-center justify-center rounded-[8px] border border-[var(--color-primary,#2B6B9A)] px-[16px] py-[12px] text-[1.3rem] font-bold text-[var(--color-primary,#2B6B9A)] transition-colors hover:bg-[var(--color-primary,#2B6B9A)]/5"
          >
            문의
          </Link>
        </div>
      </div>
    </div>
  );
}
