"use client";

import { useRef, useState, useCallback, type MouseEvent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import type { HeroSlide } from "@/lib/types";
import { swiperConfig } from "@/lib/config";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface HeroBannerClientProps {
  slides: HeroSlide[];
  nextSectionHref?: string;
  nextSectionLabel?: string;
}

/** 히어로 배너 Swiper (Client Component) — fade + autoplay + Ken Burns + text animation */
export function HeroBannerClient({
  slides,
  nextSectionHref = "#home-quick-links",
  nextSectionLabel = "카테고리 바로가기",
}: HeroBannerClientProps) {
  const config = swiperConfig.hero;
  const swiperRef = useRef<SwiperType | null>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const onAutoplayTimeLeft = useCallback(
    (_swiper: SwiperType, _timeLeft: number, percentage: number) => {
      setProgress(1 - percentage);
    },
    [],
  );

  const onSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  const handleNextSectionClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (!nextSectionHref.startsWith("#")) {
        return;
      }

      const targetElement = document.querySelector(nextSectionHref);
      if (!targetElement) {
        return;
      }

      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [nextSectionHref],
  );

  return (
    <div className="relative hero-cinematic hero-intro-stage">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect={config.effect}
        autoplay={config.autoplay}
        loop={config.loop}
        speed={config.speed}
        pagination={{ type: "fraction", el: ".hero-pagination" }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        onSlideChange={onSlideChange}
        className="hero-home-swiper h-[clamp(520px,72vh,760px)] w-full sm:h-[clamp(540px,74vh,800px)] lg:h-[clamp(560px,76vh,840px)]"
      >
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          const theme = slide.theme ?? "dark";
          const layout = slide.layout ?? "overlay";
          const isFirst = slide.id === slides[0]?.id;

          return (
            <SwiperSlide key={slide.id}>
              <Link
                href={slide.href}
                className="group relative block h-full w-full overflow-hidden"
                style={{
                  backgroundColor: slide.backgroundColor,
                  "--hero-bg-color": slide.backgroundColor,
                } as React.CSSProperties}
                data-hero-theme={theme}
                data-hero-layout={layout}
              >
                {layout === "split" ? (
                  <HeroSlideSplit slide={slide} isActive={isActive} isFirst={isFirst} />
                ) : (
                  <HeroSlideOverlay slide={slide} isActive={isActive} isFirst={isFirst} />
                )}
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* 커스텀 컨트롤러 박스 (중앙 정렬) */}
      <div className="absolute bottom-[22px] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-[10px] sm:bottom-[28px] sm:gap-[12px]">
        <div className="flex items-center gap-[8px] rounded-full border border-white/18 bg-black/38 px-[12px] py-[8px] backdrop-blur-[10px] sm:gap-[12px]">
          <button
            className="flex h-[28px] w-[28px] items-center justify-center rounded-full text-white/50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/10 hover:text-white hover:scale-[1.15] active:scale-90"
            aria-label="이전 슬라이드"
            onClick={(e) => {
              e.preventDefault();
              swiperRef.current?.slidePrev();
            }}
          >
            <ChevronLeftIcon />
          </button>

          <div className="hero-pagination min-w-[42px] text-center text-[1.3rem] font-medium tracking-[0.05em] text-white/90" />

          <button
            className="flex h-[28px] w-[28px] items-center justify-center rounded-full text-white/50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/10 hover:text-white hover:scale-[1.15] active:scale-90"
            aria-label="다음 슬라이드"
            onClick={(e) => {
              e.preventDefault();
              swiperRef.current?.slideNext();
            }}
          >
            <ChevronRightIcon />
          </button>
        </div>

        <a
          href={nextSectionHref}
          onClick={handleNextSectionClick}
          aria-label={`다음 섹션 ${nextSectionLabel}로 이동`}
          className="hero-next-section-link inline-flex w-fit items-center gap-[10px] rounded-full border border-white/20 bg-black/30 px-[12px] py-[7px] text-[1.2rem] tracking-[0.02em] text-white/78 transition-colors hover:border-white/40 hover:text-white"
        >
          <span className="text-[1.05rem] font-semibold tracking-[0.16em] text-white/56">NEXT</span>
          <span className="font-medium">{nextSectionLabel}</span>
          <span className="hero-scroll-indicator" aria-hidden />
        </a>
      </div>

      {/* 슬라이드 프로그레스 바 */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-[2px] bg-white/10">
        <div
          className="h-full transition-[width] duration-100 ease-linear"
          style={{ width: `${progress * 100}%`, backgroundColor: "var(--hero-progress)" }}
        />
      </div>
    </div>
  );
}

/* ── Overlay 레이아웃 (기존 중앙 카드) ── */
function HeroSlideOverlay({
  slide,
  isActive,
  isFirst,
}: {
  slide: HeroSlide;
  isActive: boolean;
  isFirst: boolean;
}) {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none">
        {slide.image.mobile && (
          <div className="absolute inset-0 mx-auto max-w-[1440px] overflow-hidden md:hidden">
            <Image
              src={slide.image.mobile}
              alt={slide.title}
              fill
              className={`object-cover hero-slide-image ${isActive ? "hero-kenburns-active" : ""}`}
              sizes="(max-width: 1440px) 100vw, 1440px"
              priority={isFirst}
            />
          </div>
        )}
        {slide.image.desktop && (
          <div className="absolute inset-0 mx-auto max-w-[1440px] hidden overflow-hidden md:block">
            <Image
              src={slide.image.desktop}
              alt={slide.title}
              fill
              className={`object-cover hero-slide-image ${isActive ? "hero-kenburns-active" : ""}`}
              sizes="(max-width: 1440px) 100vw, 1440px"
              priority={isFirst}
            />
          </div>
        )}
        <div className="hero-overlay-base" />
        <div className="hero-overlay-noise" />
        <div className="hero-overlay-glow" />
        <div className="hero-overlay-focus" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-[18px] pb-[104px] pt-[72px] sm:px-[28px] sm:pb-[120px]">
        <div
          className={`home-hero-focus-card w-full max-w-[740px] text-center transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "home-hero-focus-card-active" : ""}`}
        >
          {slide.eyebrow && (
            <p className="hero-slide-eyebrow mb-[12px] text-[1.05rem] font-semibold tracking-[0.22em] text-white/74 sm:text-[1.2rem]">
              {slide.eyebrow}
            </p>
          )}
          <h2 className="hero-slide-title home-hero-title mx-auto max-w-[12ch] text-[2.9rem] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[4.1rem] lg:text-[5.7rem]">
            {slide.title}
          </h2>
          <p className="hero-slide-subtitle home-hero-subtitle mx-auto mt-[18px] max-w-[42ch] text-[1.36rem] font-medium leading-[1.62] tracking-[0.01em] text-white/80 sm:text-[1.58rem] lg:text-[1.86rem]">
            {slide.subtitle}
          </p>
          {slide.ctaLabel && (
            <span className="hero-slide-cta mt-[24px] inline-flex items-center gap-[8px] text-[1.28rem] font-semibold tracking-[0.05em] text-white sm:text-[1.46rem]">
              {slide.ctaLabel}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M8 6L14 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          )}
        </div>
      </div>
    </>
  );
}

/* ── Split 레이아웃 (비대칭 오버랩: 이미지 60% + 텍스트 40%) ── */
function HeroSlideSplit({
  slide,
  isActive,
  isFirst,
}: {
  slide: HeroSlide;
  isActive: boolean;
  isFirst: boolean;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden" style={{ backgroundColor: "var(--hero-bg-color)" }}>
      {/* 1. 이미지 레이어 (전체 화면 배치 + 마스킹 준비) */}
      <div className="hero-split-image-container absolute inset-0 pointer-events-none overflow-hidden">
        {slide.image.mobile && (
          <div className="absolute inset-0 mx-auto max-w-[1440px] overflow-hidden md:hidden">
            <Image
              src={slide.image.mobile}
              alt={slide.title}
              fill
              className={`object-cover object-center hero-slide-image ${isActive ? "hero-kenburns-active" : ""}`}
              sizes="(max-width: 1440px) 100vw, 1440px"
              priority={isFirst}
            />
          </div>
        )}
        {slide.image.desktop && (
          <div className="absolute inset-0 mx-auto max-w-[1440px] hidden overflow-hidden md:block">
            <Image
              src={slide.image.desktop}
              alt={slide.title}
              fill
              className={`object-none object-right hero-slide-image ${isActive ? "hero-kenburns-active" : ""}`}
              sizes="(max-width: 1440px) 100vw, 1440px"
              priority={isFirst}
            />
          </div>
        )}
        {/* 2. 블렌딩 마스크 (이미지를 배경색 속으로 녹여냄) */}
        <div className="hero-split-blend-mask absolute inset-0 z-[2]" />
      </div>

      {/* 3. 콘텐츠 컨테이너 (중앙 정렬 유지) */}
      <div className="absolute inset-y-0 left-1/2 w-full max-w-[var(--width-content)] -translate-x-1/2 px-[24px] z-[50]">
        <div className="h-full flex items-center">
          <div
            className={`hero-split-card w-full transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "hero-split-card-active" : ""}`}
          >
            {slide.eyebrow && (
              <p className="hero-slide-eyebrow mb-[14px] text-[1.05rem] font-semibold tracking-[0.22em] text-white/74 sm:text-[1.2rem]">
                {slide.eyebrow}
              </p>
            )}
            <h2 className="hero-slide-title text-[2.65rem] font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-[3.55rem] lg:text-[4.9rem]">
              {slide.title}
            </h2>
            <p className="hero-slide-subtitle mt-[16px] max-w-[38ch] text-[1.34rem] font-medium leading-[1.65] tracking-[0.01em] text-white/85 sm:text-[1.52rem] lg:text-[1.74rem]">
              {slide.subtitle}
            </p>
            {slide.ctaLabel && (
              <span className="hero-slide-cta mt-[24px] inline-flex items-center gap-[10px] text-[1.26rem] font-semibold tracking-[0.05em] text-white sm:text-[1.44rem]">
                {slide.ctaLabel}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M8 6L14 12L8 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

