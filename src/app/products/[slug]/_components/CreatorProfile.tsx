import Image from "next/image";
import type { InstructorProfile } from "@/lib/types";

interface CreatorProfileProps {
  instructor: InstructorProfile;
}

/** 강사 프로필 및 인터뷰 섹션 — 드림플렉스 브랜드 컬러 적용 */
export function CreatorProfile({ instructor }: CreatorProfileProps) {
  return (
    <section id="educator" className="w-full bg-white py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-[1120px] px-[20px] sm:px-[24px] lg:px-[32px]">
        {/* 상단: 마스터 기본 정보 및 철학 */}
        <div className="mb-[80px] flex flex-col items-center gap-[40px] lg:flex-row lg:items-end lg:gap-[80px]">
          {/* 아바타 / 인물 사진 */}
          <div className="relative h-[320px] w-[240px] flex-shrink-0 overflow-hidden rounded-[24px] bg-[#F6F8FB] shadow-2xl lg:h-[480px] lg:w-[360px] border border-slate-100">
            {instructor.avatarSrc ? (
              <Image
                src={instructor.avatarSrc}
                alt={instructor.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 240px, 360px"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[#0F1E2E] text-[8rem] font-black text-white/10">
                {instructor.name.charAt(0)}
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0F1E2E]/60 to-transparent lg:hidden" />
            <div className="absolute bottom-[24px] left-[24px] lg:hidden">
              <p className="text-[1.2rem] font-bold text-[#4AADE6]">THE MASTER</p>
              <h2 className="text-[2.4rem] font-black text-white">{instructor.name}</h2>
            </div>
          </div>

          {/* 마스터 메시지 및 경력 */}
          <div className="flex-1 text-center lg:pb-[20px] lg:text-left">
            <p className="hidden text-[1.4rem] font-bold tracking-[0.2em] text-[#2B6B9A] lg:block">
              THE MASTER
            </p>
            <h2 className="hidden mt-[8px] text-[4.8rem] font-black tracking-tight text-[#0F1E2E] lg:block">
              {instructor.name}
            </h2>

            {/* 메인 인용구 (Quote) */}
            {instructor.quote && (
              <div className="relative mt-[32px] lg:mt-[48px]">
                <span className="absolute -left-[40px] -top-[20px] hidden text-[8rem] leading-none text-[#4AADE6]/20 lg:block">
                  &ldquo;
                </span>
                <p className="break-keep text-[2.0rem] font-bold leading-[1.6] text-slate-800 sm:text-[2.4rem] lg:text-[2.8rem]">
                  {instructor.quote}
                </p>
              </div>
            )}

            {/* 상세 경력 리스트 */}
            <div className="mt-[40px] space-y-[12px]">
              <h3 className="text-[1.3rem] font-bold uppercase tracking-wider text-[#2B6B9A]/50">
                Major Career
              </h3>
              <ul className="flex flex-col gap-[8px] text-[1.5rem] font-medium text-slate-600">
                {instructor.career.map((item) => (
                  <li key={item} className="flex items-start gap-[10px]">
                    <span className="mt-[8px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[#4AADE6]" />
                    <span className="text-left">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 하단: 인터뷰 (Q&A) 섹션 */}
        {instructor.interview && instructor.interview.length > 0 && (
          <div className="space-y-[32px] rounded-[32px] bg-[#F6F8FB] p-[32px] sm:p-[48px] lg:p-[80px] border border-slate-100">
            <h3 className="mb-[48px] text-center text-[2.4rem] font-black text-[#0F1E2E] sm:text-[3.2rem]">
              Master&apos;s Interview
            </h3>
            <div className="grid gap-[40px] lg:grid-cols-2 lg:gap-[60px]">
              {instructor.interview.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-[16px]">
                  <div className="flex items-center gap-[12px]">
                    <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#2B6B9A] text-[1.1rem] font-bold text-white">
                      Q
                    </span>
                    <h4 className="text-[1.8rem] font-bold text-[#0F1E2E] break-keep">
                      {item.question}
                    </h4>
                  </div>
                  <div className="flex gap-[12px]">
                    <span className="flex h-[24px] w-[24px] items-center justify-center text-[1.4rem] font-bold text-[#4AADE6]">
                      A
                    </span>
                    <p className="text-[1.6rem] leading-[1.8] text-slate-600 break-keep">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
