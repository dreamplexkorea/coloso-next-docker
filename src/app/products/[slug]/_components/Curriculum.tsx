import type { CurriculumChapter } from "@/lib/types";
import { CurriculumImageCarousel } from "./CurriculumImageCarousel";

interface CurriculumProps {
  chapters: CurriculumChapter[];
}

/** 커리큘럼 섹션 — 프리미엄 교육 플랫폼 스타일 */
export function Curriculum({ chapters }: CurriculumProps) {
  return (
    <section id="curriculum" className="w-full bg-[#F8FAFC] py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-[20px] sm:px-[24px] lg:px-[32px]">
        {/* 상단 헤더 */}
        <div className="mb-[60px] text-center lg:text-left">
          <p className="mb-[12px] text-[1.4rem] font-bold uppercase tracking-[0.3em] text-[#2B6B9A]">
            Class Structure
          </p>
          <h2 className="text-[3.2rem] font-black tracking-tight text-[#0F1E2E] sm:text-[4.0rem] lg:text-[4.8rem]">
            실전에서 즉시 발휘되는<br />
            체계적인 커리큘럼
          </h2>
          <div className="mt-[24px] h-[4px] w-[60px] bg-[#2B6B9A] mx-auto lg:mx-0" />
          <p className="mt-[32px] max-w-[600px] text-[1.6rem] leading-[1.8] text-[#334A62] sm:text-[1.8rem]">
            단순한 이론 나열이 아닙니다. 입문부터 심화 실전까지,<br className="hidden lg:block" />
            현장의 노하우를 단계별로 완벽하게 흡수할 수 있도록 설계되었습니다.
          </p>
        </div>

        {/* 챕터 리스트 */}
        <div className="space-y-[32px]">
          {chapters.map((chapter, index) => (
            <article
              key={chapter.id}
              className="group overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-white shadow-[0_1px_3px_rgba(15,30,46,0.04),0_4px_12px_rgba(15,30,46,0.03)] transition-all duration-200 ease-out hover:border-[#2B6B9A]/30 hover:shadow-[0_2px_8px_rgba(43,107,154,0.06),0_8px_24px_rgba(43,107,154,0.08)]"
            >
              {/* 챕터 헤더 */}
              <div className="flex flex-col gap-[20px] bg-[#F8FAFC] px-[32px] py-[24px] sm:flex-row sm:items-center sm:px-[40px] sm:py-[32px]">
                <div className="flex items-center gap-[12px]">
                  <span className="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#2B6B9A] text-[1.3rem] font-bold text-white shadow-[0_2px_4px_rgba(43,107,154,0.2)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1.3rem] font-bold uppercase tracking-widest text-[#64748B]">
                    Section {index + 1}
                  </span>
                </div>
                <h3 className="text-[2.0rem] font-black text-[#0F1E2E] sm:text-[2.4rem]">
                  {chapter.title}
                </h3>
              </div>

              {/* 학습 포인트 — 좌측 액센트 바 */}
              {chapter.learningPoint && (
                <div className="border-l-[3px] border-l-[#2B6B9A] bg-[#F0F7FC] px-[32px] py-[16px] sm:px-[40px]">
                  <div className="flex items-start gap-[12px]">
                    <svg className="mt-[3px] h-[18px] w-[18px] flex-shrink-0 text-[#2B6B9A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    <p className="text-[1.5rem] font-medium leading-[1.6] text-[#334A62]">
                      {chapter.learningPoint}
                    </p>
                  </div>
                </div>
              )}

              {/* 콘텐츠 */}
              <div className="flex flex-col lg:flex-row">
                {/* 이미지 영역 — 항상 표시 (이미지 없으면 플레이스홀더) */}
                <div className="w-full bg-[#F8FAFC] p-[28px] lg:w-[45%] lg:p-[36px]">
                  <CurriculumImageCarousel
                    images={chapter.carouselImages ?? []}
                    alt={chapter.title}
                    sectionIndex={index}
                  />
                </div>

                {/* 상세 레슨 리스트 */}
                {chapter.lessons && chapter.lessons.length > 0 && (
                  <div className="flex-1 px-[32px] py-[32px] sm:px-[40px] sm:py-[40px] lg:border-l lg:border-[#E2E8F0]">
                    <ul className="divide-y divide-[#F1F5F9]">
                      {chapter.lessons.map((lesson, lessonIdx) => (
                        <li key={lesson.id} className="flex gap-[20px] py-[16px] first:pt-0 last:pb-0 group/item">
                          <span className="mt-[4px] text-[1.4rem] font-black text-[#CBD5E1] transition-colors duration-150 group-hover/item:text-[#4AADE6]">
                            {String(lessonIdx + 1).padStart(2, "0")}
                          </span>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-[8px] mb-[6px]">
                              {lessonIdx === 0 && (
                                <span className="text-[1.05rem] font-semibold text-[#2B6B9A] bg-[#EDF4F9] px-[8px] py-[2px] rounded-[4px]">핵심 원리</span>
                              )}
                              <p className="text-[1.6rem] font-bold leading-[1.5] text-[#0F1E2E] transition-colors duration-150 group-hover/item:text-[#2B6B9A]">
                                {lesson.title}
                              </p>
                            </div>
                            <div className="flex items-center gap-[12px]">
                              <span className="text-[1.2rem] font-medium text-[#64748B]">
                                {lesson.duration}
                              </span>
                              <span className="h-[3px] w-[3px] rounded-full bg-[#CBD5E1]" />
                              <span className="text-[1.2rem] font-medium text-[#64748B]">
                                실습 포함
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
