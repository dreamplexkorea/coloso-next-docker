"use client";

import { useRef, useState, useEffect, useCallback, type ReactNode } from "react";

interface ReviewCarouselProps {
  children: ReactNode[];
}

/** 후기 카드 캐러셀 — CSS scroll-snap 기반 */
export function ReviewCarousel({ children }: ReviewCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const totalItems = children.length;

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);

    // 현재 활성 인덱스 계산 (첫 번째 보이는 카드 기준)
    if (totalItems === 0) return;
    const cardWidth = el.scrollWidth / totalItems;
    const idx = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(idx, totalItems - 1));
  }, [totalItems]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      resizeObserver.disconnect();
    };
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth = el.scrollWidth / totalItems;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth = el.scrollWidth / totalItems;
    el.scrollTo({ left: cardWidth * idx, behavior: "smooth" });
  };

  const needsCarousel = totalItems > 3;

  return (
    <div className="relative">
      {/* 스크롤 컨테이너 */}
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-[20px] overflow-x-auto scroll-smooth scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children.map((child, idx) => (
          <div
            key={idx}
            className="w-[85%] flex-shrink-0 snap-start sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)]"
          >
            {child}
          </div>
        ))}
      </div>

      {/* 좌우 화살표 (캐러셀 필요 시에만) */}
      {needsCarousel && (
        <>
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-[16px] top-1/2 z-10 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(0,0,0,0.08)] bg-white shadow-lg transition-opacity hover:bg-gray-50"
              aria-label="이전 후기"
            >
              <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-[16px] top-1/2 z-10 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(0,0,0,0.08)] bg-white shadow-lg transition-opacity hover:bg-gray-50"
              aria-label="다음 후기"
            >
              <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </>
      )}

      {/* Dot indicator (캐러셀 필요 시에만) */}
      {needsCarousel && (
        <div className="mt-[20px] flex items-center justify-center gap-[8px]">
          {Array.from({ length: totalItems }, (_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-[8px] rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "w-[24px] bg-[var(--color-primary,#2B6B9A)]"
                  : "w-[8px] bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`후기 ${idx + 1}번으로 이동`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
