import Image from "next/image";
import type { Review } from "@/lib/types";
import { ReviewCarousel } from "./ReviewCarousel";
import { ExpandableText } from "./ExpandableText";

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`h-4 w-4 ${filled ? "text-[#FFBC00]" : "text-gray-200"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

/** 캐릭터 아바타 컴포넌트 */
function CharacterAvatar({ id, size = 32 }: { id: number; size?: number }) {
  return (
    <div 
      className="flex items-center justify-center rounded-full bg-slate-100 font-bold text-[#2B6B9A]/40" 
      style={{ width: size, height: size, fontSize: size * 0.4 }}
    >
      {String.fromCharCode(65 + (id % 26))}
    </div>
  );
}

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
            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-50"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-[#1A2A3A]">
             <svg className="w-20 h-20 text-white/5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
             </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E2E] via-[#0F1E2E]/40 to-transparent" />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 flex h-full flex-col justify-end p-[32px] text-white">
        <div className="mb-[12px] flex items-center gap-[4px]">
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} filled={i < review.rating} />
          ))}
        </div>

        <h5 className="mb-[12px] text-[1.8rem] font-black leading-tight tracking-tight break-keep text-white">
          &ldquo;{review.title}&rdquo;
        </h5>

        <div className="mb-[20px]">
          <ExpandableText
            text={review.content}
            className="text-[1.4rem] leading-relaxed text-slate-300 line-clamp-2 group-hover:line-clamp-none transition-all"
          />
        </div>

        <div className="mt-auto flex items-center gap-[12px] border-t border-white/10 pt-[24px]">
          <CharacterAvatar id={review.characterId ?? 1} />
          <div>
            <p className="text-[1.3rem] font-bold text-white">{review.authorName}</p>
            <p className="text-[1.1rem] font-medium text-[#4AADE6]">{review.authorGrade}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ReviewsProps {
  reviews: Review[];
}

export function Reviews({ reviews }: ReviewsProps) {
  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : "0.0";

  return (
    <section id="reviews" className="py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-[1120px]">
        {/* 섹션 헤더 */}
        <div className="mb-[60px] flex flex-col items-center justify-between gap-[32px] lg:flex-row lg:items-end">
          <div className="text-center lg:text-left">
            <p className="mb-[12px] text-[1.4rem] font-bold uppercase tracking-[0.3em] text-[#2B6B9A]">
              Student Stories
            </p>
            <h3 className="text-[3.2rem] font-black tracking-tight text-[#0F1E2E] sm:text-[4.0rem]">
              진짜 경험한 학생들이 증명하는<br />
              압도적 교육 만족도
            </h3>
          </div>
          
          <div className="flex flex-col items-center gap-[12px] rounded-[32px] bg-[#0F1E2E] px-[48px] py-[32px] text-white shadow-2xl lg:items-end">
            <div className="flex items-center gap-[8px]">
              <span className="text-[4.8rem] font-black tracking-tighter text-white leading-none">
                {averageRating}
              </span>
              <div className="flex flex-col">
                <div className="flex gap-[2px]">
                   {Array.from({ length: 5 }, (_, i) => (
                      <StarIcon key={i} filled={i < Math.floor(Number(averageRating))} />
                   ))}
                </div>
                <span className="text-[1.4rem] font-bold text-[#4AADE6]">/ 5.0 Rating</span>
              </div>
            </div>
            <p className="text-[1.2rem] font-medium text-slate-400">
              최근 1,200회차 출강 만족도 데이터 기준
            </p>
          </div>
        </div>

        {/* 후기 갤러리 */}
        <div className="relative">
          <ReviewCarousel>
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </ReviewCarousel>
        </div>
      </div>
    </section>
  );
}
