import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { dreamTeamPageData } from "@/lib/data/dreamTeam";

export const metadata: Metadata = {
  title: "드림팀 소개",
  description:
    "드림플렉스 드림팀의 철학, 운영 강점, 팀원 구성을 확인하고 학교 맞춤형 프로그램 운영 방식을 살펴보세요.",
};

function getInitials(name: string) {
  const compact = name.replace(/\s+/g, "");
  if (compact.length <= 2) return compact;
  return compact.slice(0, 2);
}

/** 드림팀 소개 페이지 (Server Component) */
export default function DreamTeamPage() {
  return (
    <main className="bg-white py-[44px] sm:py-[56px] md:py-[68px]">
      <Container className="space-y-[28px] sm:space-y-[36px] md:space-y-[44px]">
        <section className="relative overflow-hidden rounded-[24px] border border-grey-800 bg-[linear-gradient(140deg,#f8fbff_0%,#edf4fb_52%,#e7f1fb_100%)] px-[20px] py-[28px] sm:px-[30px] sm:py-[36px] md:px-[44px] md:py-[48px]">
          <span className="text-[1.2rem] font-semibold tracking-[0.06em] text-primary">
            {dreamTeamPageData.eyebrow}
          </span>
          <h1 className="mt-[8px] max-w-[760px] text-[2.6rem] font-bold leading-[1.28] text-text-primary sm:text-[3.2rem] md:text-[3.8rem]">
            {dreamTeamPageData.title}
          </h1>
          <p className="mt-[14px] max-w-[820px] text-[1.5rem] leading-[1.7] text-grey-200 sm:text-[1.6rem]">
            {dreamTeamPageData.subtitle}
          </p>
          <div className="pointer-events-none absolute right-[-90px] top-[-80px] h-[220px] w-[220px] rounded-full bg-[rgba(74,173,230,0.24)] blur-[48px]" />
          <div className="pointer-events-none absolute bottom-[-90px] left-[-120px] h-[260px] w-[260px] rounded-full bg-[rgba(43,107,154,0.16)] blur-[58px]" />
        </section>

        <section aria-labelledby="dream-team-principles" className="space-y-[16px]">
          <h2 id="dream-team-principles" className="text-[2.1rem] font-bold text-text-primary">
            팀 철학
          </h2>
          <div className="grid gap-[12px] sm:gap-[14px] md:grid-cols-2">
            {dreamTeamPageData.principles.map((principle) => (
              <article
                key={principle.id}
                className="rounded-[16px] border border-grey-800 bg-surface p-[18px] sm:p-[20px]"
              >
                <h3 className="text-[1.7rem] font-semibold text-text-primary">{principle.title}</h3>
                <p className="mt-[8px] text-[1.4rem] leading-[1.7] text-grey-300">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="dream-team-members" className="space-y-[16px]">
          <h2 id="dream-team-members" className="text-[2.1rem] font-bold text-text-primary">
            드림팀 멤버
          </h2>
          <div className="grid gap-[14px] md:grid-cols-2">
            {dreamTeamPageData.members.map((member) => (
              <article key={member.id} className="rounded-[18px] border border-grey-800 bg-white p-[20px]">
                <div className="flex items-start gap-[14px]">
                  <div className="relative flex h-[80px] w-[80px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(145deg,#1f4f72_0%,#2b6b9a_48%,#4aade6_100%)] text-[2rem] font-bold text-white ring-1 ring-[rgba(255,255,255,0.78)] shadow-[0_8px_22px_-10px_rgba(31,79,114,0.5)] sm:h-[92px] sm:w-[92px] md:h-[104px] md:w-[104px]">
                    {member.avatarSrc ? (
                      <Image
                        src={member.avatarSrc}
                        alt={`${member.name} 프로필 사진`}
                        width={104}
                        height={104}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <>
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-[9%] top-[8%] h-[38%] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.46),rgba(255,255,255,0))]"
                        />
                        <span className="relative z-[1]">{getInitials(member.name)}</span>
                      </>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[1.9rem] font-bold text-text-primary sm:text-[2rem]">
                      {member.name}
                    </h3>
                    <p className="text-[1.3rem] font-semibold text-primary">{member.role}</p>
                    <p className="mt-[6px] text-[1.3rem] text-grey-300">{member.strength}</p>
                  </div>
                </div>

                <p className="mt-[14px] text-[1.4rem] leading-[1.7] text-grey-300">{member.bio}</p>

                <ul className="mt-[14px] space-y-[6px]">
                  {member.careerHighlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-[8px] text-[1.3rem] text-grey-300">
                      <span className="mt-[7px] h-[4px] w-[4px] rounded-full bg-primary" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="dream-team-strengths" className="space-y-[16px]">
          <h2 id="dream-team-strengths" className="text-[2.1rem] font-bold text-text-primary">
            운영 강점
          </h2>
          <div className="grid gap-[12px] sm:gap-[14px] md:grid-cols-3">
            {dreamTeamPageData.strengths.map((strength) => (
              <article
                key={strength.id}
                className="rounded-[16px] border border-grey-800 bg-surface px-[16px] py-[18px]"
              >
                <h3 className="text-[1.6rem] font-semibold text-text-primary">{strength.title}</h3>
                <p className="mt-[8px] text-[1.35rem] leading-[1.7] text-grey-300">
                  {strength.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="dream-team-micro-motivation" className="space-y-[16px]">
          <h2 id="dream-team-micro-motivation" className="text-[2.1rem] font-bold text-text-primary">
            현장에서 바로 반응하는 미시적 동기
          </h2>
          <p className="max-w-[840px] text-[1.4rem] leading-[1.7] text-grey-300 sm:text-[1.5rem]">
            중학교 진로담당 교사의 실제 의사결정 흐름을 기준으로, &quot;왜 지금 문의해야
            하는지&quot;가
            바로 보이도록 설계했습니다.
          </p>

          <div className="grid gap-[12px] sm:gap-[14px] lg:grid-cols-2">
            {dreamTeamPageData.microMotivations.map((item) => (
              <article key={item.id} className="rounded-[16px] border border-grey-800 bg-white p-[18px]">
                <p className="text-[1.35rem] font-semibold leading-[1.6] text-text-primary">
                  {item.trigger}
                </p>
                <p className="mt-[8px] text-[1.3rem] leading-[1.7] text-grey-300">
                  <span className="font-semibold text-grey-200">장벽:</span> {item.friction}
                </p>
                <div className="mt-[10px] rounded-[10px] bg-surface px-[12px] py-[10px]">
                  <p className="text-[1.3rem] leading-[1.7] text-grey-200">
                    <span className="font-semibold text-primary">해결:</span> {item.designResponse}
                  </p>
                </div>
                <p className="mt-[10px] text-[1.25rem] font-semibold text-primary">
                  {item.decisionCue}
                </p>
              </article>
            ))}
          </div>

          <div className="rounded-[16px] border border-grey-800 bg-surface p-[16px] sm:p-[18px]">
            <h3 className="text-[1.7rem] font-semibold text-text-primary">근거 요약</h3>
            <div className="mt-[10px] grid gap-[10px] md:grid-cols-2">
              {dreamTeamPageData.evidenceSummary.map((item) => (
                <article key={item.id} className="rounded-[12px] border border-grey-700 bg-white p-[12px]">
                  <p className="text-[1.3rem] font-semibold text-primary">{item.principle}</p>
                  <p className="mt-[6px] text-[1.25rem] leading-[1.65] text-grey-300">
                    {item.appliedCopy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="dream-team-faq" className="space-y-[16px]">
          <h2 id="dream-team-faq" className="text-[2.1rem] font-bold text-text-primary">
            자주 묻는 질문
          </h2>
          <p className="max-w-[840px] text-[1.35rem] leading-[1.7] text-grey-300 sm:text-[1.45rem]">
            학교 현장에서 자주 확인하시는 운영 질문을 기준으로 정리했습니다.
          </p>

          <div className="space-y-[10px]">
            {dreamTeamPageData.faqItems.map((faq, index) => (
              <details
                key={faq.id}
                open={index === 0}
                className="group rounded-[14px] border border-grey-800 bg-white p-[14px] open:border-[rgba(43,107,154,0.28)] open:bg-[#f8fbff]"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-[10px]">
                  <h3 className="text-[1.48rem] font-semibold leading-[1.6] text-text-primary">
                    Q. {faq.question}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-[2px] shrink-0 text-[1.9rem] font-light leading-none text-primary transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <div className="mt-[10px] border-t border-grey-800 pt-[10px]">
                  <p className="text-[1.33rem] leading-[1.75] text-grey-300">{faq.answer}</p>
                  {faq.points?.length ? (
                    <ul className="mt-[8px] space-y-[6px]">
                      {faq.points.map((point) => (
                        <li key={point} className="flex items-start gap-[8px] text-[1.28rem] text-grey-300">
                          <span
                            className="mt-[7px] h-[4px] w-[4px] rounded-full bg-primary"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-[20px] border border-grey-700 bg-[linear-gradient(150deg,#1f4f72_0%,#2b6b9a_44%,#4aade6_100%)] px-[20px] py-[24px] text-white sm:px-[30px] sm:py-[30px] md:flex md:items-center md:justify-between md:gap-[24px] md:px-[36px]">
          <div className="max-w-[720px]">
            <h2 className="text-[2.1rem] font-bold leading-[1.35] sm:text-[2.4rem]">
              {dreamTeamPageData.cta.title}
            </h2>
            <p className="mt-[10px] text-[1.4rem] leading-[1.7] text-[rgba(255,255,255,0.86)] sm:text-[1.5rem]">
              {dreamTeamPageData.cta.description}
            </p>
            {dreamTeamPageData.cta.secondaryLine ? (
              <p className="mt-[8px] text-[1.25rem] leading-[1.65] text-[rgba(255,255,255,0.78)] sm:text-[1.35rem]">
                {dreamTeamPageData.cta.secondaryLine}
              </p>
            ) : null}
          </div>
          <Link
            href={dreamTeamPageData.cta.href}
            aria-label={dreamTeamPageData.cta.buttonLabel}
            className="mt-[16px] inline-flex rounded-[10px] bg-white px-[16px] py-[10px] text-[1.35rem] font-semibold text-[#1f4f72] transition-opacity hover:opacity-90 md:mt-0"
          >
            {dreamTeamPageData.cta.buttonLabel}
          </Link>
        </section>
      </Container>
    </main>
  );
}
