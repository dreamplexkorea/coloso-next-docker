"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import type { CourseDetail } from "@/lib/types";

interface ProductHeroSplitProps {
  course: CourseDetail;
}

/**
 * ProductHeroSplit — Split Screen 레이아웃 히어로
 *
 * 레이아웃:
 *  - 데스크톱(lg+): 좌 45% 텍스트 | 우 55% 이미지 (이미지 100% 원본 노출)
 *  - 모바일: 이미지 상단 풀블리드 → 텍스트 하단
 *
 * 톤앤매너:
 *  - 배경: #0F1E2E (Dreamplex 다크 네이비)
 *  - 포인트: #4AADE6 (accent), #2B6B9A (primary)
 *  - 폰트: Pretendard Variable (font-black 헤드라인)
 *  - 이미지: opacity 100%, grayscale 없음, rounded-[28px] 프레임
 *  - 이미지 진입 애니메이션: clip-path reveal (좌→우)
 */
export function ProductHeroSplit({ course }: ProductHeroSplitProps) {
  const {
    heroImageSrc,
    heroHeadline,
    heroSubcopy,
    heroChips,
    heroProofStats,
    heroEyebrow,
    tags,
    instructor,
    programHighlights,
    meta,
    title,
    subtitle,
  } = course;

  const headline = heroHeadline ?? title;
  const subcopy = heroSubcopy ?? subtitle;
  const eyebrow = heroEyebrow ?? (heroChips?.length ? heroChips[0] : tags[0] ?? "");

  const highlights = programHighlights ?? [
    { label: "대상 학년", value: meta.level },
    { label: "총 차시", value: `${meta.totalLessons}차시` },
    { label: "소요 시간", value: meta.totalDuration },
    { label: "강의 언어", value: meta.language },
  ];

  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  /* 진입 애니메이션 — IntersectionObserver로 한 번만 트리거 */
  useEffect(() => {
    const imageEl = imageRef.current;
    const textEl = textRef.current;
    if (!imageEl || !textEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ph-split-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(imageEl);
    observer.observe(textEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ph-split-root bg-[#0F1E2E]">
      {/* ── 메인 히어로 영역 ── */}
      <section className="ph-split-section relative mx-auto flex w-full max-w-[1440px] flex-col lg:flex-row lg:min-h-[680px]">

        {/* ── 좌: 텍스트 패널 ── */}
        <div
          ref={textRef}
          className="ph-split-text relative z-10 flex flex-col justify-center px-[24px] py-[80px] pt-[120px] lg:w-[45%] lg:py-[120px] lg:pl-[clamp(32px,5vw,80px)] lg:pr-[40px]"
        >
          {/* 세로 액센트 라인 */}
          <div className="ph-split-accent-line mb-[28px] h-[3px] w-[48px] rounded-full bg-[#4AADE6]" />

          {/* Eyebrow */}
          {eyebrow && (
            <p className="mb-[16px] text-[1.2rem] font-bold uppercase tracking-[0.18em] text-[#4AADE6]">
              {eyebrow}
            </p>
          )}

          {/* 헤드라인 */}
          <h1 className="ph-split-headline mb-[20px] text-[3.2rem] font-black leading-[1.08] tracking-[-0.03em] text-white sm:text-[4.4rem] lg:text-[5.6rem]">
            {headline}
          </h1>

          {/* 서브카피 */}
          <p className="mb-[36px] max-w-[38ch] text-[1.5rem] font-medium leading-[1.7] text-slate-300 sm:text-[1.7rem]">
            {subcopy}
          </p>

          {/* 강사 정보 */}
          <div className="mb-[40px] flex items-center gap-[14px]">
            <div className="h-[44px] w-[3px] rounded-full bg-[#2B6B9A]" />
            <div>
              <p className="text-[1.4rem] font-bold text-white">{instructor.name}</p>
              <p className="text-[1.2rem] text-slate-400">{instructor.role}</p>
            </div>
          </div>

          {/* 태그 칩 */}
          {heroChips && heroChips.length > 0 && (
            <div className="flex flex-wrap gap-[8px]">
              {heroChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[#4AADE6]/30 bg-[#4AADE6]/10 px-[12px] py-[5px] text-[1.2rem] font-semibold text-[#4AADE6]"
                >
                  {chip}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ── 우: 이미지 패널 ── */}
        <div
          ref={imageRef}
          className="ph-split-image-panel relative flex items-center justify-center overflow-hidden
            px-[24px] pb-[48px] lg:w-[55%] lg:px-[clamp(24px,4vw,60px)] lg:py-[60px]"
        >
          {heroImageSrc ? (
            <>
              {/* 이미지 프레임 */}
              <div className="ph-split-image-frame relative w-full overflow-hidden rounded-[28px] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.7)]
                aspect-[4/3] lg:aspect-[3/2]">
                <Image
                  src={heroImageSrc}
                  alt={headline}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                {/* 이미지 하단 미세 그라디언트 (정보 카드 가독성) */}
                <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-[#0F1E2E]/60 to-transparent" />
              </div>

              {/* 플로팅 통계 카드 — 이미지 위에 겹침 */}
              {heroProofStats && heroProofStats.length > 0 && (
                <div className="ph-split-stats-card absolute bottom-[60px] left-[40px] right-[40px] lg:bottom-[80px] lg:left-auto lg:right-[clamp(40px,5vw,80px)] lg:w-auto">
                  <div className="flex flex-wrap items-center justify-center gap-x-[28px] gap-y-[12px] rounded-[16px] border border-white/10 bg-[#0F1E2E]/80 px-[24px] py-[16px] backdrop-blur-[12px]">
                    {heroProofStats.map((stat) => (
                      <div key={stat.label} className="flex flex-col items-center gap-[2px]">
                        <span className="text-[2.0rem] font-black tracking-tight text-[#4AADE6]">
                          {stat.value}
                        </span>
                        <span className="text-[1.1rem] font-medium text-slate-400">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            /* 이미지 없을 때 — 카테고리 기반 플레이스홀더 */
            <div className="flex w-full items-center justify-center rounded-[28px] bg-[#1A2A3A] aspect-[4/3] lg:aspect-[3/2]">
              <span className="text-[8rem] font-black text-white/5">{headline.charAt(0)}</span>
            </div>
          )}
        </div>
      </section>

      {/* ── 인포 스트립 ── */}
      <div className="relative z-20 mx-auto w-full max-w-[1120px] px-[16px] pb-[48px] sm:px-[24px] lg:px-[32px]">
        <div className="grid grid-cols-2 overflow-hidden rounded-[16px] border border-white/8 bg-[#1A2A3A] shadow-xl sm:grid-cols-4">
          {highlights.map((item, idx) => (
            <div
              key={item.label}
              className={`flex flex-col items-start gap-[4px] p-[20px] sm:p-[24px] ${
                idx < highlights.length - 1
                  ? "border-b border-white/5 sm:border-b-0 sm:border-r sm:border-white/5"
                  : ""
              }`}
            >
              <span className="text-[1.1rem] font-bold uppercase tracking-[0.06em] text-[#4AADE6]">
                {item.label}
              </span>
              <span className="text-[1.8rem] font-extrabold text-white">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
