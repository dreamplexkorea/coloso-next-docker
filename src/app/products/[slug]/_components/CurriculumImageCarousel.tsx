"use client";

import { useState } from "react";
import Image from "next/image";

interface CurriculumImageCarouselProps {
  images: string[];
  alt: string;
  /** 섹션 번호 (1, 2, ...) — 플레이스홀더 아이콘 선택에 사용 */
  sectionIndex?: number;
}

/* 섹션별 플레이스홀더 아이콘 & 색상 */
const PLACEHOLDER_THEMES = [
  {
    icon: (
      <svg className="h-[48px] w-[48px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    bg: "from-[#EBF5FF] to-[#DBEEFF]",
    iconColor: "text-[#2B6B9A]",
    label: "이론 학습",
  },
  {
    icon: (
      <svg className="h-[48px] w-[48px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    bg: "from-[#F0FDF4] to-[#DCFCE7]",
    iconColor: "text-emerald-600",
    label: "실습 체험",
  },
  {
    icon: (
      <svg className="h-[48px] w-[48px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    bg: "from-[#FFF7ED] to-[#FFEDD5]",
    iconColor: "text-amber-500",
    label: "창작 활동",
  },
];

/** 이미지 없을 때 표시하는 섹션별 플레이스홀더 */
function ImagePlaceholder({ sectionIndex = 0 }: { sectionIndex?: number }) {
  const theme = PLACEHOLDER_THEMES[sectionIndex % PLACEHOLDER_THEMES.length];
  return (
    <div
      className={`flex aspect-[4/3] w-full flex-col items-center justify-center gap-[16px] rounded-[16px] bg-gradient-to-br ${theme.bg}`}
    >
      <div className={`${theme.iconColor} opacity-60`}>{theme.icon}</div>
      <div className="text-center">
        <p className="text-[1.4rem] font-bold text-slate-500">{theme.label}</p>
        <p className="mt-[4px] text-[1.2rem] text-slate-400">이미지를 추가해보세요</p>
      </div>
      {/* 업로드 힌트 점선 테두리 */}
      <div className="absolute inset-[8px] rounded-[12px] border-2 border-dashed border-slate-300/60 pointer-events-none" />
    </div>
  );
}

/** 커리큘럼 섹션 이미지 캐러셀 */
export function CurriculumImageCarousel({
  images,
  alt,
  sectionIndex = 0,
}: CurriculumImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  /* 이미지 없으면 플레이스홀더 */
  if (!images || images.length === 0) {
    return (
      <div className="relative">
        <ImagePlaceholder sectionIndex={sectionIndex} />
      </div>
    );
  }

  const hasMultiple = images.length > 1;

  return (
    <div className="group relative">
      {/* 메인 이미지 */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-slate-100 shadow-md">
        <Image
          src={images[current]}
          alt={`${alt} - ${current + 1}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 45vw"
        />
        {/* 하단 그라디언트 오버레이 (dot indicator 가독성) */}
        {hasMultiple && (
          <div className="absolute inset-x-0 bottom-0 h-[60px] bg-gradient-to-t from-black/40 to-transparent rounded-b-[16px]" />
        )}

        {/* 좌우 화살표 */}
        {hasMultiple && (
          <>
            <button
              onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
              className="absolute left-[12px] top-1/2 z-10 flex h-[36px] w-[36px] -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:scale-110 opacity-0 group-hover:opacity-100"
              aria-label="이전 이미지"
            >
              <svg className="h-[16px] w-[16px] text-[#0F1E2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % images.length)}
              className="absolute right-[12px] top-1/2 z-10 flex h-[36px] w-[36px] -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:scale-110 opacity-0 group-hover:opacity-100"
              aria-label="다음 이미지"
            >
              <svg className="h-[16px] w-[16px] text-[#0F1E2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* 이미지 카운터 뱃지 */}
        {hasMultiple && (
          <span className="absolute right-[12px] top-[12px] rounded-full bg-black/50 px-[10px] py-[4px] text-[1.1rem] font-bold text-white backdrop-blur-sm">
            {current + 1} / {images.length}
          </span>
        )}

        {/* Dot indicator */}
        {hasMultiple && (
          <div className="absolute bottom-[12px] left-1/2 flex -translate-x-1/2 gap-[6px]">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-[7px] rounded-full transition-all duration-300 ${
                  idx === current ? "w-[20px] bg-white" : "w-[7px] bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`이미지 ${idx + 1} 보기`}
              />
            ))}
          </div>
        )}
      </div>

      {/* 썸네일 스트립 (이미지 3개 이상일 때) */}
      {images.length >= 3 && (
        <div className="mt-[12px] flex gap-[8px] overflow-x-auto scrollbar-none">
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`relative h-[56px] w-[80px] flex-shrink-0 overflow-hidden rounded-[8px] transition-all duration-200 ${
                idx === current
                  ? "ring-2 ring-[#2B6B9A] ring-offset-2 opacity-100"
                  : "opacity-60 hover:opacity-90"
              }`}
              aria-label={`이미지 ${idx + 1} 선택`}
            >
              <Image
                src={src}
                alt={`${alt} 썸네일 ${idx + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
