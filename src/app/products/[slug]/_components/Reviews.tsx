"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import type { Review } from "@/lib/types";
import { ExpandableText } from "./ExpandableText";

/* ── 별 아이콘 ── */
function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`h-[16px] w-[16px] ${filled ? "text-[#FFBC00]" : "text-slate-200"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

/* 별 N개 렌더 */
function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-[2px]">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} filled={i < Math.round(rating)} />
      ))}
    </div>
  );
}

/* ── 캐릭터 아바타 ── */
function CharacterAvatar({ id, size = 36 }: { id: number; size?: number }) {
  const colors = [
    "bg-[#4AADE6]/20 text-[#4AADE6]",
    "bg-[#2B6B9A]/20 text-[#2B6B9A]",
    "bg-emerald-100 text-emerald-600",
    "bg-violet-100 text-violet-600",
    "bg-amber-100 text-amber-600",
  ];
  const colorClass = colors[id % colors.length];
  return (
    <div
      className={`flex items-center justify-center rounded-full font-black ${colorClass}`}
      style={{ width: size, height: size, fontSize: size * 0.38 }}
    >
      {String.fromCharCode(65 + (id % 26))}
    </div>
  );
}

/* ── 평점 분포 바 차트 ── */
function RatingDistribution({ reviews }: { reviews: Review[] }) {
  const total = reviews.length;

  const dist = useMemo(() => {
    const counts = [0, 0, 0, 0, 0]; // index 0 = 1점, index 4 = 5점
    reviews.forEach((r) => {
      const idx = Math.max(0, Math.min(4, r.rating - 1));
      counts[idx]++;
    });
    return counts.reverse(); // 5점부터 내림차순
  }, [reviews]);

  const avg =
    total > 0
      ? (reviews.reduce((s, r) => s + r.rating, 0) / total).toFixed(1)
      : "0.0";

  return (
    <div className="flex flex-col gap-[28px] rounded-[24px] bg-[#0F1E2E] p-[32px] text-white shadow-2xl lg:flex-row lg:items-center lg:gap-[48px]">
      {/* 좌: 평균 점수 */}
      <div className="flex flex-col items-center gap-[10px] lg:min-w-[140px] lg:items-start">
        <span className="text-[5.6rem] font-black leading-none tracking-tighter text-white">
          {avg}
        </span>
        <StarRow rating={Number(avg)} />
        <span className="text-[1.2rem] font-medium text-slate-400">/ 5.0 Rating</span>
        <span className="mt-[4px] rounded-full bg-white/8 px-[12px] py-[4px] text-[1.1rem] font-medium text-slate-400">
          총 {total}개 후기
        </span>
      </div>

      {/* 구분선 */}
      <div className="hidden h-[90px] w-[1px] bg-white/10 lg:block" />

      {/* 우: 별점 분포 바 */}
      <div className="flex flex-1 flex-col gap-[12px]">
        {dist.map((count, idx) => {
          const star = 5 - idx;
          const pct = total > 0 ? (count / total) * 100 : 0;
          return (
            <div key={star} className="flex items-center gap-[12px]">
              <span className="w-[14px] flex-shrink-0 text-right text-[1.2rem] font-bold text-slate-400">
                {star}
              </span>
              <svg
                className="h-[12px] w-[12px] flex-shrink-0 text-[#FFBC00]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div className="relative h-[8px] flex-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-[#FFBC00] transition-all duration-700 ease-out"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="w-[28px] flex-shrink-0 text-right text-[1.1rem] font-medium text-slate-400">
                {count}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── 필터 탭 ── */
type FilterOption = "all" | 5 | 4 | 3;

function FilterTabs({
  active,
  onChange,
  counts,
}: {
  active: FilterOption;
  onChange: (v: FilterOption) => void;
  counts: Record<string, number>;
}) {
  const options: { label: string; value: FilterOption }[] = [
    { label: "전체", value: "all" },
    { label: "5점", value: 5 },
    { label: "4점", value: 4 },
    { label: "3점 이하", value: 3 },
  ];

  return (
    <div className="flex flex-wrap gap-[8px]">
      {options.map((opt) => {
        const cnt =
          opt.value === "all" ? counts.all : (counts[String(opt.value)] ?? 0);
        const isActive = active === opt.value;
        return (
          <button
            key={String(opt.value)}
            onClick={() => onChange(opt.value)}
            className={`flex items-center gap-[6px] rounded-full border px-[18px] py-[9px] text-[1.3rem] font-semibold transition-all duration-200 ${
              isActive
                ? "border-[#2B6B9A] bg-[#2B6B9A] text-white shadow-md"
                : "border-slate-200 bg-white text-slate-600 hover:border-[#4AADE6] hover:text-[#2B6B9A]"
            }`}
          >
            {opt.value !== "all" && (
              <svg
                className={`h-[12px] w-[12px] ${isActive ? "text-[#FFBC00]" : "text-[#FFBC00]/60"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            )}
            {opt.label}
            <span
              className={`rounded-full px-[7px] py-[1px] text-[1.1rem] font-bold ${
                isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
              }`}
            >
              {cnt}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ── 후기 카드 ── */
function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="group relative flex h-[460px] flex-col overflow-hidden rounded-[32px] bg-[#0F1E2E] shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        {review.photoSrc ? (
          <Image
            src={review.photoSrc}
            alt={review.title}
            fill
            className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#1A2A3A]">
            <svg
              className="h-20 w-20 text-white/5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E2E] via-[#0F1E2E]/40 to-transparent" />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 flex h-full flex-col justify-end p-[32px] text-white">
        <div className="mb-[12px]">
          <StarRow rating={review.rating} />
        </div>
        <h5 className="mb-[12px] break-keep text-[1.8rem] font-black leading-tight tracking-tight text-white">
          &ldquo;{review.title}&rdquo;
        </h5>
        <div className="mb-[20px]">
          <ExpandableText
            text={review.content}
            className="text-[1.4rem] leading-relaxed text-slate-300 transition-all"
            clampClass="line-clamp-3"
          />
        </div>
        <div className="mt-auto flex items-center gap-[12px] border-t border-white/10 pt-[24px]">
          <CharacterAvatar id={review.characterId ?? 1} size={36} />
          <div>
            <p className="text-[1.3rem] font-bold text-white">{review.authorName}</p>
            <p className="text-[1.1rem] font-medium text-[#4AADE6]">{review.authorGrade}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 후기 그리드 (필터 적용) ── */
function ReviewGrid({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[24px] border border-dashed border-slate-200 py-[80px] text-center">
        <svg
          className="mb-[16px] h-[48px] w-[48px] text-slate-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
        <p className="text-[1.6rem] font-bold text-slate-400">
          해당 별점의 후기가 없습니다
        </p>
        <p className="mt-[8px] text-[1.3rem] text-slate-300">
          다른 필터를 선택해보세요
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 md:grid-cols-3">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}

/* ── 메인 Reviews 컴포넌트 ── */
interface ReviewsProps {
  reviews: Review[];
}

export function Reviews({ reviews }: ReviewsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");

  /* 별점별 카운트 */
  const counts = useMemo(() => {
    const c: Record<string, number> = { all: reviews.length, "5": 0, "4": 0, "3": 0 };
    reviews.forEach((r) => {
      if (r.rating === 5) c["5"]++;
      else if (r.rating === 4) c["4"]++;
      else c["3"]++;
    });
    return c;
  }, [reviews]);

  /* 필터링된 후기 */
  const filtered = useMemo(() => {
    if (activeFilter === "all") return reviews;
    if (activeFilter === 5) return reviews.filter((r) => r.rating === 5);
    if (activeFilter === 4) return reviews.filter((r) => r.rating === 4);
    return reviews.filter((r) => r.rating <= 3);
  }, [reviews, activeFilter]);

  return (
    <section id="reviews" className="w-full bg-[#F8FAFC] py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-[20px] sm:px-[24px] lg:px-[32px]">

        {/* 섹션 헤더 */}
        <div className="mb-[48px] text-center lg:text-left">
          <p className="mb-[12px] text-[1.4rem] font-bold uppercase tracking-[0.3em] text-[#2B6B9A]">
            Student Stories
          </p>
          <h3 className="text-[3.2rem] font-black tracking-tight text-[#0F1E2E] sm:text-[4.0rem]">
            진짜 경험한 학생들이 증명하는<br />
            압도적 교육 만족도
          </h3>
        </div>

        {/* 평점 분포 카드 */}
        <div className="mb-[40px]">
          <RatingDistribution reviews={reviews} />
        </div>

        {/* 필터 탭 */}
        <div className="mb-[24px]">
          <FilterTabs active={activeFilter} onChange={setActiveFilter} counts={counts} />
        </div>

        {/* 결과 카운트 */}
        <p className="mb-[28px] text-[1.3rem] font-medium text-slate-400">
          {activeFilter === "all"
            ? `전체 ${reviews.length}개 후기`
            : `${filtered.length}개 후기`}
        </p>

        {/* 후기 그리드 */}
        <ReviewGrid reviews={filtered} />
      </div>
    </section>
  );
}
