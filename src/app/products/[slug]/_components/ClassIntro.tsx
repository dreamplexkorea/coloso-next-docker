import Image from "next/image";
import type { TargetAudience, ExpectedOutcome } from "@/lib/types";

interface IntroSection {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
}

interface ClassIntroProps {
  sections: IntroSection[];
  targetAudience?: TargetAudience[];
  expectedOutcomes?: ExpectedOutcome[];
}

/** 아이콘 매핑 (브랜드 블루 적용) */
function SkillIcon({ type }: { type?: string }) {
  const className = "w-10 h-10";
  switch (type) {
    case "scale":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#2B6B9A" strokeWidth={1.5}>
          <path d="M12 3v18M3 7l3-4 3 4M15 7l3-4 3 4M3 7v2a6 6 0 006 6M21 7v2a6 6 0 01-6 6" />
        </svg>
      );
    case "users":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#2B6B9A" strokeWidth={1.5}>
          <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    case "sparkle":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#2B6B9A" strokeWidth={1.5}>
          <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
        </svg>
      );
    case "briefcase":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#2B6B9A" strokeWidth={1.5}>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
          <path d="M2 12h20" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#2B6B9A" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      );
  }
}

/** 프로그램 소개 섹션 — 드림플렉스 브랜드 컬러 + 스토리텔링 */
export function ClassIntro({ sections, targetAudience, expectedOutcomes }: ClassIntroProps) {
  return (
    <section id="program-intro" className="py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-[1120px]">
        {/* 1. 추천 대상 */}
        {targetAudience && targetAudience.length > 0 && (
          <div className="mb-[100px] lg:mb-[160px]">
            <div className="mb-[48px] text-center lg:text-left">
              <p className="mb-[12px] text-[1.4rem] font-bold uppercase tracking-[0.3em] text-[#2B6B9A]">
                Target Audience
              </p>
              <h3 className="text-[2.8rem] font-black tracking-tight text-slate-900 sm:text-[3.6rem]">
                이런 고민을 가진<br className="sm:hidden" /> 학교와 선생님께 추천합니다
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-2">
              {targetAudience.map((audience) => (
                <div
                  key={audience.grade}
                  className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-[32px] transition-all hover:border-[#2B6B9A] hover:shadow-2xl sm:p-[40px]"
                >
                  <div className="flex flex-col gap-[20px]">
                    <div className="flex items-center gap-[12px]">
                      <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#2B6B9A] text-white">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      <h4 className="text-[2.0rem] font-black text-[#0F1E2E]">
                        {audience.grade}
                      </h4>
                    </div>
                    <p className="text-[1.6rem] font-medium leading-[1.7] text-slate-600 break-keep">
                      {audience.description}
                    </p>
                    <div className="flex flex-wrap gap-[8px]">
                      {audience.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-[#F6F8FB] px-[12px] py-[6px] text-[1.2rem] font-bold text-[#2B6B9A]/70"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. 핵심 성과 */}
        {expectedOutcomes && expectedOutcomes.length > 0 && (
          <div className="mb-[100px] lg:mb-[160px]">
            <div className="mb-[48px] text-center">
              <p className="mb-[12px] text-[1.4rem] font-bold uppercase tracking-[0.3em] text-[#2B6B9A]">
                Expected Outcomes
              </p>
              <h3 className="text-[2.8rem] font-black tracking-tight text-slate-900 sm:text-[3.6rem]">
                프로그램 종료 후 학생들에게 생기는<br className="hidden sm:block" /> 확실한 변화 {expectedOutcomes.length}가지
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
              {expectedOutcomes.map((outcome) => (
                <div
                  key={outcome.title}
                  className="flex flex-col items-center rounded-[32px] bg-[#F6F8FB] p-[40px] text-center transition-all hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-[24px] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-white text-[#2B6B9A] shadow-sm">
                    <SkillIcon type={outcome.iconType} />
                  </div>
                  <h4 className="mb-[12px] text-[1.8rem] font-black text-[#0F1E2E]">
                    {outcome.title}
                  </h4>
                  <p className="text-[1.4rem] font-medium leading-[1.6] text-slate-500 break-keep">
                    {outcome.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. 스토리텔링 포인트 블록 */}
        <div className="space-y-[100px] lg:space-y-[160px]">
          {sections.map((section, idx) => (
            <div key={section.title} className={`flex flex-col gap-[48px] lg:flex-row lg:items-center lg:gap-[80px] ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}>
              <div className="relative aspect-[16/10] flex-1 overflow-hidden rounded-[40px] bg-slate-100 shadow-2xl border border-slate-200">
                {section.imageSrc ? (
                  <Image
                    src={section.imageSrc}
                    alt={section.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-900 text-[2.4rem] font-black text-white/5">
                    POINT {String(idx + 1).padStart(2, "0")}
                  </div>
                )}
                <div className="absolute left-[32px] top-[32px] rounded-full bg-white/90 px-[20px] py-[8px] text-[1.3rem] font-black text-[#2B6B9A] shadow-lg backdrop-blur-md">
                  POINT {String(idx + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-[20px] lg:gap-[32px]">
                {section.subtitle && (
                  <p className="text-[1.4rem] font-black uppercase tracking-[0.2em] text-[#4AADE6]">
                    {section.subtitle}
                  </p>
                )}
                <h3 className="text-[2.8rem] font-black leading-[1.2] tracking-tight text-[#0F1E2E] sm:text-[3.2rem] lg:text-[4.0rem] break-keep">
                  {section.title}
                </h3>
                <p className="text-[1.7rem] leading-[1.8] text-slate-600 sm:text-[1.8rem] lg:text-[2.0rem] break-keep">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
