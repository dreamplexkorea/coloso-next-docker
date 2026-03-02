"use client";

import { useCarousel } from "./CarouselContext";

export function CarouselNavigation() {
  const { swiperInstance, isBeginning, isEnd } = useCarousel();

  return (
    <>
      {/* 이전 버튼 */}
      <button
        className="carousel-nav-btn absolute left-[-20px] top-1/2 z-10 -translate-y-1/2 hidden md:flex"
        aria-label="이전"
        disabled={isBeginning}
        onClick={() => swiperInstance?.slidePrev()}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* 다음 버튼 */}
      <button
        className="carousel-nav-btn absolute right-[-20px] top-1/2 z-10 -translate-y-1/2 hidden md:flex"
        aria-label="다음"
        disabled={isEnd}
        onClick={() => swiperInstance?.slideNext()}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
}
