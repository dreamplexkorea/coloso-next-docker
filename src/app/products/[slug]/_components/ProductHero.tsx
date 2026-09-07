import Image from "next/image";
import Link from "next/link";
import type { CourseDetail } from "@/lib/types";
import { buildCurriculumQuoteHref } from "@/lib/curriculum";

interface ProductHeroProps {
  course: CourseDetail;
}

/** 상세페이지 히어로 — 드림플렉스 브랜드 컬러 + 콜소 레이아웃 */
export function ProductHero({ course }: ProductHeroProps) {
  const {
    title,
    heroImageSrc,
    heroHeadline,
    heroSubcopy,
    heroChips,
    heroProofStats,
    heroTheme,
    tags,
    meta,
    instructor,
    programHighlights,
  } = course;

  const isDark = heroTheme === "cinematic-dark";
  const headline = heroHeadline ?? title;
  const subcopy = heroSubcopy ?? course.subtitle;
  const category = (heroChips?.length ? heroChips : tags)[0] ?? "";
  const proofStats = heroProofStats?.filter((stat) => stat.evidence?.trim()) ?? [];

  const highlights = programHighlights ?? [
    { label: "대상 학년", value: `${meta.level}` },
    { label: "총 차시", value: `${meta.totalLessons}차시` },
    { label: "소요 시간", value: meta.totalDuration },
    { label: "강의 언어", value: meta.language },
  ];

  return (
    <div className={`product-hero-container ${isDark ? "bg-[#0F1E2E]" : "bg-white"}`}>
      {/* 히어로 이미지 영역 */}
      <section
        className={`product-hero relative flex w-full flex-col justify-center overflow-hidden px-[16px] pb-[60px] pt-[100px] sm:px-[24px] lg:min-h-[680px] lg:px-[32px] lg:pb-[80px] lg:pt-[120px] ${
          isDark ? "text-white" : "text-[#0F1E2E]"
        }`}
      >
        {/* 1. 배경 이미지 (Z-0) */}
        {heroImageSrc && (
          <div
            className="absolute inset-0 z-0 mx-auto max-w-[1920px]"
            style={{
              WebkitMaskImage: isDark
                ? "linear-gradient(to right, black 0%, black 40%, transparent 95%)"
                : "linear-gradient(to bottom, black 0%, black 60%, transparent 95%)",
              maskImage: isDark
                ? "linear-gradient(to right, black 0%, black 40%, transparent 95%)"
                : "linear-gradient(to bottom, black 0%, black 60%, transparent 95%)",
            }}
          >
            <Image
              src={heroImageSrc}
              alt={headline}
              fill
              priority
              className={`object-cover ${isDark ? "opacity-40 grayscale-[0.1]" : "opacity-100"}`}
              sizes="100vw"
            />
            {isDark && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E2E] via-[#0F1E2E]/80 to-transparent" />
            )}
          </div>
        )}

        {/* 2. 콘텐츠 영역 (Z-20) */}
        <div className="relative z-20 mx-auto flex w-full max-w-[1120px] flex-col items-start">
          <div className="max-w-[720px] text-left">
            {category && (
              <p
                className={`mb-[16px] inline-block rounded-full border px-[12px] py-[4px] text-[1.2rem] font-bold uppercase tracking-[0.1em] ${
                  isDark ? "border-[#4AADE6]/40 text-[#4AADE6]" : "border-slate-200 text-[#2B6B9A]"
                }`}
              >
                {category}
              </p>
            )}

            {headline !== title && <p className="mb-[12px] text-[1.6rem] font-semibold leading-[1.6]">{title}</p>}
            <h1
              className="product-hero-title mb-[20px] text-[3.2rem] font-black leading-[1.1] tracking-[-0.03em] sm:text-[4.8rem] lg:text-[6.4rem]"
            >
              {headline}
            </h1>

            <p
              className={`hero-text-subcopy mb-[32px] text-[1.6rem] font-medium leading-[1.6] opacity-90 sm:text-[1.8rem] lg:text-[2.0rem] ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {subcopy}
            </p>

            <div className="flex items-center gap-[16px]">
              <div className={`h-[48px] w-[2px] ${isDark ? "bg-[#4AADE6]" : "bg-[#2B6B9A]"}`} />
              <div className="flex flex-col">
                <span className={`text-[1.4rem] font-bold ${isDark ? "text-white" : "text-[#0F1E2E]"}`}>
                  {instructor.name}
                </span>
                <span className={`text-[1.2rem] opacity-70 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  {instructor.role}
                </span>
              </div>
            </div>
            <div className="mt-[28px] flex flex-wrap gap-[12px]">
              <a href="#curriculum" className="rounded-[6px] bg-white px-[22px] py-[14px] text-[1.6rem] font-bold text-[#0F1E2E] ring-1 ring-slate-300">상세 커리큘럼 보기</a>
              <Link href={buildCurriculumQuoteHref(course.slug)} className="rounded-[6px] bg-primary px-[22px] py-[14px] text-[1.6rem] font-bold text-white">우리 학교 견적 살펴보기</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 인포 스트립 (Z-20) — 드림플렉스 브랜드 포인트 */}
      <div className={`relative z-30 mx-auto -mt-[40px] w-full max-w-[1120px] px-[16px] sm:px-[24px] lg:px-[32px]`}>
        <div className={`grid grid-cols-1 gap-0 overflow-hidden rounded-[16px] border shadow-2xl sm:grid-cols-4 ${
          isDark ? "border-white/10 bg-[#1A2A3A]" : "border-slate-200 bg-white"
        }`}>
          {highlights.map((item, idx) => (
            <div
              key={item.label}
              className={`flex flex-col items-start gap-[4px] p-[24px] ${
                idx < highlights.length - 1 ? (isDark ? "border-b border-white/5 sm:border-b-0 sm:border-r" : "border-b border-slate-100 sm:border-b-0 sm:border-r") : ""
              }`}
            >
              <span className={`text-[1.1rem] font-bold uppercase tracking-[0.05em] ${isDark ? "text-[#4AADE6]" : "text-[#2B6B9A]"}`}>
                {item.label}
              </span>
              <span className={`text-[1.8rem] font-extrabold ${isDark ? "text-white" : "text-[#0F1E2E]"}`}>
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* 4. 신뢰지표 (Proof Stats) */}
        {proofStats.length > 0 && (
          <div className={`mt-[24px] flex flex-wrap items-center justify-center gap-x-[40px] gap-y-[16px] rounded-[12px] py-[16px] ${
            isDark ? "bg-[#2B6B9A]/10" : "bg-[#F6F8FB]"
          }`}>
            {proofStats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-[8px]">
                <span className={`text-[1.2rem] font-medium ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  {stat.label}
                </span>
                <span className={`text-[2.0rem] font-black tracking-tight ${isDark ? "text-[#4AADE6]" : "text-[#2B6B9A]"}`}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
