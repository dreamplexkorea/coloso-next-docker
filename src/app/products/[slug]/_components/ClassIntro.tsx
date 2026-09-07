import { TemplateMedia } from "./TemplateMedia";
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
    <section id="program-intro" className="py-[48px] lg:py-[64px]">
      <div className="mx-auto max-w-[1120px]">
        {/* 1. 추천 대상 */}
        {targetAudience && targetAudience.length > 0 && (
          <div className="mb-[64px] lg:mb-[80px]">
            <div className="mb-[32px] text-center lg:text-left">
              <p className="mb-[12px] text-[1.4rem] font-bold uppercase tracking-[0.3em] text-[#2B6B9A]">
                추천 대상
              </p>
              <h3 className="break-keep text-[2.8rem] font-black tracking-tight text-slate-900 sm:text-[3.6rem]">
                이런 고민을 가진<br className="sm:hidden" /> 학교와 선생님께 추천합니다
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-2">
              {targetAudience.map((audience) => (
                <div
                  key={audience.grade}
                  className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-[24px] sm:p-[32px]"
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
                          className="rounded-lg bg-[#F6F8FB] px-[12px] py-[6px] text-[1.3rem] font-bold text-[#2B6B9A]"
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
          <div className="mb-[64px] lg:mb-[80px]">
            <div className="mb-[32px] text-center">
              <p className="mb-[12px] text-[1.4rem] font-bold uppercase tracking-[0.3em] text-[#2B6B9A]">
                수업에서 얻는 배움
              </p>
              <h3 className="break-keep text-[2.8rem] font-black tracking-tight text-slate-900 sm:text-[3.6rem]">
                프로그램에서 기대하는<br className="hidden sm:block" /> 배움 {expectedOutcomes.length}가지
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
              {expectedOutcomes.map((outcome) => (
                <div
                  key={outcome.title}
                  className="flex flex-col items-center rounded-[16px] bg-[#F6F8FB] p-[24px] text-center"
                >
                  <div className="mb-[20px] flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white text-[#2B6B9A] shadow-sm">
                    <SkillIcon type={outcome.iconType} />
                  </div>
                  <h4 className="mb-[12px] text-[1.8rem] font-black text-[#0F1E2E]">
                    {outcome.title}
                  </h4>
                  <p className="text-[1.6rem] leading-[1.7] text-slate-600 break-keep">
                    {outcome.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="dp-story-list">
          {sections.map((section, index) => <article key={section.title} className="dp-story">
            <span className="dp-story-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div className="dp-story-content">
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              {section.imageSrc && <div className="dp-story-media dp-media">
                <TemplateMedia src={section.imageSrc} alt={section.title} sizes="(min-width: 960px) 900px, 100vw" />
              </div>}
            </div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
