"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CourseMeta } from "@/lib/types";
import { buildCurriculumQuoteHref, getPlanMinutes } from "@/lib/curriculum";
import { useCurriculumSelection } from "./CurriculumSelection";

interface StickyBottomSummaryProps {
  meta: CourseMeta;
  slug: string;
}

/** 히어로 이후 선택한 수업 구성과 견적 진입점을 표시한다. */
export function StickyBottomSummary({ meta, slug }: StickyBottomSummaryProps) {
  const [visible, setVisible] = useState(false);
  const plan = useCurriculumSelection()?.plan;
  const href = buildCurriculumQuoteHref(slug, plan?.id);
  const summary = plan
    ? `${plan.sessions.length}차시 · ${getPlanMinutes(plan)}분${plan.status === "proposal" ? " · 수업 설계안" : ""}`
    : `${meta.level} · ${meta.totalLessons}차시 · ${meta.totalDuration}`;

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
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] backdrop-blur-md transition-[transform,opacity] duration-300 motion-reduce:transition-none ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      {/* 데스크톱: 한 줄 레이아웃 */}
      <div className="mx-auto hidden h-[48px] max-w-[1120px] items-center justify-between px-[32px] lg:flex">
        <p className="text-[1.4rem] tracking-[0.01em] text-[var(--color-text-tertiary,#64748b)]">
          {summary}
        </p>

        <Link
          href={href}
          className="rounded-[6px] bg-[var(--color-primary,#2B6B9A)] px-[20px] py-[7px] text-[1.5rem] font-bold text-white transition-opacity hover:opacity-90"
        >
          견적 살펴보기
        </Link>
      </div>

      {/* 모바일: 두 줄 레이아웃 */}
      <div className="px-[16px] pb-[max(12px,env(safe-area-inset-bottom))] pt-[10px] lg:hidden">
        <p className="mb-[8px] text-center text-[1.4rem] text-[var(--color-text-tertiary,#64748b)]">
          {summary}
        </p>

        <div className="flex items-center gap-[8px]">
          <Link
            href={href}
            className="flex flex-1 items-center justify-center rounded-[8px] bg-[var(--color-primary,#2B6B9A)] py-[12px] text-[1.5rem] font-bold text-white transition-opacity hover:opacity-90"
          >
            견적 살펴보기
          </Link>
        </div>
      </div>
    </div>
  );
}
